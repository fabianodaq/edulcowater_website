# Stripe Checkout Server

## 1) Configure environment

Create a local `.env` file in `checkout-server` and set the required values:

- `STRIPE_SECRET_KEY=sk_test_...`
- `STRIPE_WEBHOOK_SECRET=whsec_...`
- `SITE_BASE_URL=http://127.0.0.1:5500` (or your real domain)
- `PORT=4242`

## 2) Install dependencies

Run this in `checkout-server`:

```bash
npm install
```

## 3) Start server

```bash
npm start
```

Server endpoint:

- `POST /api/create-checkout-session`
- `POST /api/stripe-webhook`
- `GET /health`
- `GET /api/orders`

## Notes

- Prices are validated server-side from `../data/products_price_input.json`.
- Success URL: `/cart/success.html`
- Cancel URL: `/cart/cancel.html`
- Confirmed Stripe checkouts are stored in `checkout-server/data/orders.json`.
- Each stored order includes products, quantities, totals, shipping cost, billing address, shipping address, customer details, and Stripe metadata.
- Customer details are collected in the frontend checkout form and passed to the backend before Stripe Checkout opens. Stripe collects the card details on its hosted payment page.
- The webhook handles both `checkout.session.completed` and delayed successful payments.
- A paid-order email is sent to `edulcowater.mailer@gmail.com` by default with subject `order_website`; the record stores `notificationStatus` as `sent` or `failed`.

## Email notifications with Gmail

Use a Gmail App Password for `SMTP_PASS`, not the normal Gmail password. The Gmail account must have two-step authentication enabled.

Configure these values in `.env`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=edulcowater.mailer@gmail.com
SMTP_PASS=your_16_character_app_password
```

After changing `.env`, restart the Node server. A successful payment will then create the order record and send the notification email.

## Webhook local testing (Stripe CLI)

1) Start your server (`npm start`).
2) In a second terminal, run:

```bash
stripe listen --forward-to localhost:4242/api/stripe-webhook
```

3) Copy the shown `whsec_...` value into `STRIPE_WEBHOOK_SECRET`.
4) Complete a test payment in checkout and verify new records in `data/orders.json`.
