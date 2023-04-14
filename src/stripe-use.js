// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys

function getPaymentIntent() {
  // Create a PaymentIntent with the order amount and currency
  const stripe = require('stripe')('sk_test_51MnLSLFXC7CDXqcPYPSRb08OBbQG5g8UyEKDfbpGGfLNw7v7YLuLuCOal8QiU9Qcb8QFq8MYUcoVsD1oi3CJcPAN007rASPeSN');
  const paymentIntent = stripe.paymentIntents.create({
    amount: 1099,
    currency: 'sgd',
    automatic_payment_methods: {enabled: true},
  });
  return paymentIntent;
}

export default getPaymentIntent;