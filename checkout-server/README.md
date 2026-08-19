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
- Render only stores paid orders with `customerNotificationStatus` set to `pending`. Email delivery will be handled later by a protected local order agent.

## Email notifications

Render does not send email. A future protected local order agent will read pending orders from Render, send the confirmation through the local Gmail SMTP configuration, and mark each order as processed.

## Webhook local testing (Stripe CLI)

1) Start your server (`npm start`).
2) In a second terminal, run:

```bash
stripe listen --forward-to localhost:4242/api/stripe-webhook
```

3) Copy the shown `whsec_...` value into `STRIPE_WEBHOOK_SECRET`.
4) Complete a test payment in checkout and verify new records in `data/orders.json`.
