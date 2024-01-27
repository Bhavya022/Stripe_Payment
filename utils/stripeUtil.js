

const stripe = require('stripe')('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');

async function getPaymentIntentById(intentId) {
  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(intentId);
    return paymentIntent;
  } catch (error) {
    console.error('Error retrieving PaymentIntent:', error.message);
    throw new Error('Failed to retrieve PaymentIntent');
  }
}

// Function to create a refund for a PaymentIntent
async function createRefund(intentId) {
  try {
    const refund = await stripe.refunds.create({
      payment_intent: intentId,
    });
    return refund;
  } catch (error) {
    console.error('Error creating refund:', error.message);
    throw new Error('Failed to create refund');
  }
}

module.exports = {
  stripe,
  getPaymentIntentById,
  createRefund,
};
