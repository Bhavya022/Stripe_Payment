

const express = require('express');
const PaymentController = require('../controllers/paymentController');

const router = express.Router();

router.post('/create_payment_intent', PaymentController.createPaymentIntent);
router.get('/get_client_secret/:id', PaymentController.getClientSecret);
router.post('/capture_payment_intent/:id', PaymentController.capturePaymentIntent);
router.post('/create_refund/:id', PaymentController.createRefund);
router.get('/get_all_payment_intents', PaymentController.getAllPaymentIntents);

module.exports = router;
