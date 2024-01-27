// models/paymentModel.js

const { stripe } = require('../utils/stripeUtil');

class PaymentModel {
  static async createPaymentIntent(amount, currency, payment_method_types, metadata, payment_method) {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
        payment_method_types,
        metadata,
        payment_method, 
      });

      return paymentIntent;
    } catch (error) {
      throw new Error(`Failed to create PaymentIntent: ${error.message}`);
    }
  }

  static async getClientSecret(intentId) {
    try {
      const paymentIntent = await stripe.paymentIntents.retrieve(intentId);
      return paymentIntent.client_secret;
    } catch (error) {
      throw new Error(`Failed to retrieve client secret: ${error.message}`);
    }
  }

  static async capturePaymentIntent(intentId) {
    try {
      const paymentIntent = await stripe.paymentIntents.retrieve(intentId);
      console.log(paymentIntent) ;
      console.log('PaymentIntent status:', paymentIntent.status);

      if (paymentIntent.status === 'requires_capture') {
          // Proceed with capturing
          const capturedIntent = await stripe.paymentIntents.capture(intentId);
          return capturedIntent;
      } else {
          throw new Error(`Cannot capture PaymentIntent with current status: ${paymentIntent.status}`);
      }
  } catch (error) {
      throw new Error(`Failed to capture PaymentIntent: ${error.message}`);
  }
}

  static async createRefund(intentId) {
    try {
      const refund = await stripe.refunds.create({
        payment_intent: intentId,
      });
      return refund;
    } catch (error) {
      throw new Error(`Failed to create refund: ${error.message}`);
    }
  }

  static async getAllPaymentIntents() {
    try {
      const paymentIntents = await stripe.paymentIntents.list();
      return paymentIntents;
    } catch (error) {
      throw new Error(`Failed to retrieve PaymentIntents: ${error.message}`);
    }
  } 

  static async getPaymentIntentById(intentId) {
    try {
      const paymentIntent = await stripe.paymentIntents.retrieve(intentId);
      return paymentIntent;
    } catch (error) {
      throw new Error(`Failed to retrieve PaymentIntent: ${error.message}`);
    }
  } 

  static async updatePaymentIntent(intentId, updateParams) {
    try {
      // Use Stripe's paymentIntents.update method to update the PaymentIntent
      const updatedIntent = await stripe.paymentIntents.update(intentId, updateParams);
      return updatedIntent;
    } catch (error) {
      throw new Error(`Failed to update PaymentIntent: ${error.message}`);
    }
  }
}


module.exports = PaymentModel;
