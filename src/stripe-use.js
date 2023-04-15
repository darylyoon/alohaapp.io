// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys

async function getPaymentIntent(pay_amount) {
  // Create a PaymentIntent with the order amount and currency
  pay_amount = pay_amount * 100;
  const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);
  const paymentIntent = stripe.paymentIntents.create({
    amount: pay_amount,
    currency: 'sgd',
    automatic_payment_methods: {enabled: true},
  });
  return paymentIntent;
}

export default getPaymentIntent;