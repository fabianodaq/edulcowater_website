import fs from 'node:fs';
import path from 'node:path';
import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';
import dotenv from 'dotenv';
import { fileURLToPath } from 'node:url';

dotenv.config();

const app = express();
const serverDirectory = path.dirname(fileURLToPath(import.meta.url));
const port = Number.parseInt(process.env.PORT || '4242', 10);
const siteBaseUrl = process.env.SITE_BASE_URL || 'http://127.0.0.1:5500';
const stripeSecret = process.env.STRIPE_SECRET_KEY || '';
const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';
const activeNotificationJobs = new Set();

if (!stripeSecret) {
    console.error('Missing STRIPE_SECRET_KEY in environment.');
    process.exit(1);
}

const stripe = new Stripe(stripeSecret, { apiVersion: '2024-06-20' });

const dataDirPath = path.resolve(process.cwd(), 'data');
const ordersFilePath = path.join(dataDirPath, 'orders.json');
const shippingRates = {
    DE: 6.90,
    AT: 9.90,
    BE: 12.90,
    BG: 19.90,
    HR: 19.90,
    CY: 24.90,
    CZ: 12.90,
    DK: 14.90,
    EE: 19.90,
    ES: 19.90,
    FI: 19.90,
    FR: 12.90,
    GR: 24.90,
    HU: 14.90,
    IE: 19.90,
    IT: 14.90,
    LT: 19.90,
    LU: 12.90,
    LV: 19.90,
    MT: 24.90,
    NL: 12.90,
    PL: 14.90,
    PT: 19.90,
    RO: 19.90,
    SE: 19.90,
    SI: 14.90,
    SK: 14.90
};

const readPriceCatalog = () => {
    const dataFilePath = path.resolve(serverDirectory, '..', 'data', 'products_price_input.json');
    const raw = fs.readFileSync(dataFilePath, 'utf8');

    // Supports the current file format that includes comments before the JSON object.
    const start = raw.indexOf('{');
    const end = raw.lastIndexOf('}');
    if (start === -1 || end === -1 || end <= start) {
        throw new Error('Invalid products_price_input.json format');
    }

    const jsonSlice = raw.slice(start, end + 1);
    const parsed = JSON.parse(jsonSlice);

    const catalogById = {};
    Object.entries(parsed).forEach(([name, price]) => {
        const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        catalogById[id] = {
            id,
            name,
            price: Number(price) || 0
        };
    });

    return catalogById;
};

const ensureOrdersStorage = () => {
    if (!fs.existsSync(dataDirPath)) {
        fs.mkdirSync(dataDirPath, { recursive: true });
    }

    if (!fs.existsSync(ordersFilePath)) {
        fs.writeFileSync(ordersFilePath, '[]', 'utf8');
    }
};

const appendOrderRecord = (record) => {
    ensureOrdersStorage();
    const raw = fs.readFileSync(ordersFilePath, 'utf8');
    let parsed = [];

    try {
        parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) {
            parsed = [];
        }
    } catch {
        parsed = [];
    }

    parsed.push(record);
    fs.writeFileSync(ordersFilePath, JSON.stringify(parsed, null, 2), 'utf8');
};

const updateOrderRecord = (orderId, changes) => {
    const orders = JSON.parse(fs.readFileSync(ordersFilePath, 'utf8'));
    const order = Array.isArray(orders) ? orders.find((entry) => entry?.id === orderId) : null;
    if (!order) return null;

    Object.assign(order, changes, { updatedAt: new Date().toISOString() });
    fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2), 'utf8');
    return order;
};

const createOrderRecordFromSession = (session, webhookEventId) => {
    const customerEmail = session.customer_details?.email || session.customer_email || null;
    const customerName = session.customer_details?.name || null;
    const amountTotalCents = Number(session.amount_total || 0);
    const lineItems = session.line_items?.data || [];
    const shippingLineItem = lineItems.find((item) => item.description?.startsWith('Shipping to '));
    const billingAddress = session.customer_details?.address || null;
    const shippingDetails = session.shipping_details || null;

    return {
        id: session.id,
        status: session.payment_status === 'paid' ? 'paid' : session.payment_status || 'unknown',
        paymentStatus: session.payment_status || 'unknown',
        fulfillmentStatus: 'pending',
        currency: session.currency || 'eur',
        amountTotal: amountTotalCents / 100,
        amountTotalCents,
        customerEmail,
        customerName,
        billingAddress,
        shippingAddress: shippingDetails?.address || null,
        shippingName: shippingDetails?.name || null,
        shippingPhone: shippingDetails?.phone || null,
        shippingAmount: Number(shippingLineItem?.amount_total || 0) / 100,
        shippingAmountCents: Number(shippingLineItem?.amount_total || 0),
        items: lineItems
            .filter((item) => item !== shippingLineItem)
            .map((item) => ({
                name: item.description || 'Product',
                quantity: item.quantity || 0,
                amountTotal: Number(item.amount_total || 0) / 100,
                amountTotalCents: Number(item.amount_total || 0)
            })),
        purchasedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        webhookEventId,
        customerNotificationStatus: 'pending',
        metadata: session.metadata || {}
    };
};

const handleCheckoutCompleted = async (session, eventId) => {
    if (activeNotificationJobs.has(session.id)) {
        return;
    }

    activeNotificationJobs.add(session.id);

    try {
        const existingRaw = fs.existsSync(ordersFilePath)
            ? fs.readFileSync(ordersFilePath, 'utf8')
            : '[]';

        let existing = [];
        try {
            existing = JSON.parse(existingRaw);
            if (!Array.isArray(existing)) {
                existing = [];
            }
        } catch {
            existing = [];
        }

        const existingOrder = existing.find((order) => order?.id === session.id);
        if (existingOrder) return;

        const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
            expand: ['line_items.data.price.product']
        });
        const order = createOrderRecordFromSession(fullSession, eventId);
        appendOrderRecord(order);
    } finally {
        activeNotificationJobs.delete(session.id);
    }
};

ensureOrdersStorage();

app.use(cors({ origin: true }));

app.post('/api/stripe-webhook', express.raw({ type: 'application/json' }), async (req, res) => {
    if (!stripeWebhookSecret) {
        return res.status(500).send('Missing STRIPE_WEBHOOK_SECRET.');
    }

    const signature = req.headers['stripe-signature'];
    if (!signature) {
        return res.status(400).send('Missing Stripe signature.');
    }

    let event;
    try {
        event = stripe.webhooks.constructEvent(req.body, signature, stripeWebhookSecret);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Invalid webhook signature.';
        console.error('Webhook signature verification failed:', message);
        return res.status(400).send(`Webhook error: ${message}`);
    }

    try {
        if (event.type === 'checkout.session.completed' || event.type === 'checkout.session.async_payment_succeeded') {
            const session = event.data.object;
            void handleCheckoutCompleted(session, event.id).catch((error) => {
                console.error('Background webhook handling error:', error);
            });
        }

        return res.json({ received: true });
    } catch (error) {
        console.error('Webhook handling error:', error);
        return res.status(500).send('Webhook handling failed.');
    }
});

app.use(express.json());

app.get('/health', (_req, res) => {
    res.json({ ok: true });
});

app.get('/api/orders', (_req, res) => {
    try {
        ensureOrdersStorage();
        const raw = fs.readFileSync(ordersFilePath, 'utf8');
        const orders = JSON.parse(raw);
        if (!Array.isArray(orders)) {
            return res.json([]);
        }

        return res.json(orders);
    } catch (error) {
        console.error('Read orders error:', error);
        return res.status(500).json({ error: 'Failed to read orders.' });
    }
});

app.post('/api/create-checkout-session', async (req, res) => {
    try {
        const bodyItems = Array.isArray(req.body?.items) ? req.body.items : [];
        const shippingCountry = String(req.body?.shippingCountry || '').toUpperCase();
        const customer = req.body?.customer || {};
        const requiredCustomerFields = ['firstName', 'lastName', 'email', 'address', 'houseNumber', 'city', 'postalCode', 'country'];
        const hasMissingCustomerField = requiredCustomerFields.some((field) => !String(customer[field] || '').trim());
        if (hasMissingCustomerField || String(customer.country).toUpperCase() !== shippingCountry) {
            return res.status(400).json({ error: 'Complete the shipping address.' });
        }
        if (bodyItems.length === 0) {
            return res.status(400).json({ error: 'No items selected for checkout.' });
        }

        if (!shippingRates[shippingCountry]) {
            return res.status(400).json({ error: 'Select a valid shipping country.' });
        }

        const catalog = readPriceCatalog();
        const lineItems = [];

        bodyItems.forEach((item) => {
            const id = String(item?.id || '');
            const qty = Math.max(0, Number.parseInt(String(item?.qty || '0'), 10));
            if (!id || qty <= 0) return;

            const product = catalog[id];
            if (!product || product.price <= 0) return;

            lineItems.push({
                quantity: qty,
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: product.name
                    },
                    unit_amount: Math.round(product.price * 100)
                }
            });
        });

        if (lineItems.length === 0) {
            return res.status(400).json({ error: 'No valid items found in catalog.' });
        }

        lineItems.push({
            quantity: 1,
            price_data: {
                currency: 'eur',
                product_data: {
                    name: `Shipping to ${shippingCountry}`
                },
                unit_amount: Math.round(shippingRates[shippingCountry] * 100)
            }
        });

        const customerName = `${String(customer.firstName).trim()} ${String(customer.lastName).trim()}`;
        const customerAddress = {
            line1: `${String(customer.address).trim()} ${String(customer.houseNumber).trim()}`,
            city: String(customer.city).trim(),
            postal_code: String(customer.postalCode).trim(),
            country: String(customer.country).toUpperCase()
        };
        const stripeCustomerData = {
            name: customerName,
            email: String(customer.email).trim(),
            address: customerAddress,
            shipping: {
                name: customerName,
                address: customerAddress
            }
        };
        const customerPhone = String(customer.phone || '').trim();
        if (customerPhone) {
            stripeCustomerData.phone = customerPhone;
            stripeCustomerData.shipping.phone = customerPhone;
        }
        const stripeCustomer = await stripe.customers.create(stripeCustomerData);

        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            line_items: lineItems,
            customer: stripeCustomer.id,
            payment_intent_data: {
                receipt_email: 'edulcowater.mailer@gmail.com'
            },
            billing_address_collection: 'required',
            shipping_address_collection: {
                allowed_countries: [
                    'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES',
                    'FI', 'FR', 'GR', 'HU', 'IE', 'IT', 'LT', 'LU', 'LV', 'MT',
                    'NL', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK'
                ]
            },
            metadata: {
                shippingCountry,
                firstName: String(customer.firstName).trim(),
                lastName: String(customer.lastName).trim(),
                email: String(customer.email).trim(),
                phone: String(customer.phone).trim(),
                address: String(customer.address).trim(),
                city: String(customer.city).trim(),
                postalCode: String(customer.postalCode).trim(),
                country: String(customer.country).toUpperCase()
            },
            success_url: `${siteBaseUrl}/cart/success.html?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${siteBaseUrl}/cart/cancel.html`
        });

        return res.json({ url: session.url });
    } catch (error) {
        console.error('Checkout session error:', error);
        return res.status(500).json({ error: 'Failed to create checkout session.' });
    }
});

app.listen(port, () => {
    console.log(`Checkout server listening on http://localhost:${port}`);
});
