

const PaymentModel = require('../models/paymentModel');

class PaymentController {
  static async createPaymentIntent(req, res) {
    const { amount, currency, payment_method_types, metadata } = req.body;
    console.log(amount, currency, payment_method_types, metadata)
    try {
      const paymentIntent = await PaymentModel.createPaymentIntent(amount, currency, payment_method_types, metadata);
      res.json({ payment_intent_id: paymentIntent.id,payment_method_types });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create PaymentIntent' });
    }
  }

  static async getClientSecret(req, res) {
    const intentId = req.params.id;

    try {
      const clientSecret = await PaymentModel.getClientSecret(intentId);
      res.json({ client_secret: clientSecret });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve client secret' });
    }
  }

  // // static async capturePaymentIntent(req, res) {
  // //   const intentId = req.params.id;

  // //   try { 
       
  // //     const paymentIntent = await PaymentModel.getPaymentIntentById(intentId);
  // //     console.log(paymentIntent,paymentIntent.status,intentId) 
  // //   if (paymentIntent.status === 'requires_capture') {
  // //     // Capture the PaymentIntent only if its status allows
  // //     const capturedIntent = await PaymentModel.capturePaymentIntent(intentId);
  // //     res.json({ message: 'PaymentIntent captured successfully', capturedIntent });
  // //   } else {
  // //     res.status(400).json({ error: 'Cannot capture PaymentIntent with current status' });
  // //   }
  // //   } catch (error) {
  // //     console.error(error);
  // //     res.status(500).json({ error: 'Failed to capture PaymentIntent' });
  // //   }
  // }
 
  static async capturePaymentIntent(req, res) {
    const intentId = req.params.id;

    try {
        const capturedIntent = await PaymentModel.capturePaymentIntent(intentId); 
        console.log(capturedIntent)
        res.json({ message: 'PaymentIntent captured successfully', intent: capturedIntent });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to capture PaymentIntent' });
    }
}
  static async createRefund(req, res) {
    const intentId = req.params.id;

    try {
      const refund = await PaymentModel.createRefund(intentId);
      res.json({ message: 'Refund created successfully', refund });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create refund' });
    }
  }

  static async getAllPaymentIntents(req, res) {
    try {
      const paymentIntents = await PaymentModel.getAllPaymentIntents();
      res.json({ message: 'List of PaymentIntents retrieved successfully', paymentIntents });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve PaymentIntents' });
    }
  }

  
}

module.exports = PaymentController;
