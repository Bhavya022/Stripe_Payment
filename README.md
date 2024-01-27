# Stripe Payment Integration

This project demonstrates the integration of Stripe for handling online payments. It provides endpoints for creating PaymentIntents, capturing PaymentIntents, creating refunds, and retrieving client secrets.

## Getting Started

### Prerequisites

- Node.js installed
- Stripe account (for API key)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Bhavya022/stripe-payment.git
Navigate to the project directory:

```bash
cd stripe-payment-integration
Install dependencies:

```bash
npm install
Set up your Stripe API key:

Create a .env file in the root directory and add your Stripe API key:

makefile
Copy code
STRIPE_API_KEY=your_stripe_api_key
Usage
Start the server:

bash
Copy code
npm start
Use an API testing tool (e.g., Thunder Client, Postman) to test the provided endpoints.

Endpoints
Create Payment Intent
Endpoint: POST /api/v1/payment/create_payment_intent

Request Body:


{
  "amount": 2000,
  "currency": "usd",
  "payment_method_types": ["card"],
  "metadata": {
    "order_id": "12345",
    "customer_name": "John Doe"
  }
}
Response:


{
  "payment_intent_id": "pi_1234567890",
  "payment_method_types": ["card"]
}
Get Client Secret
Endpoint: GET /api/v1/payment/get_client_secret/:id

Response:


{
  "client_secret": "pi_1234567890_secret_abcdefghijk"
}
Capture Payment Intent
Endpoint: POST /api/v1/payment/capture_payment_intent/:id

Response:


{
  "success": true,
  "payment_intent_id": "pi_1234567890",
  "status": "succeeded"
}
Create Refund
Endpoint: POST /api/v1/payment/create_refund/:id

Response:


{
  "message": "Refund created successfully",
  "refund": {
    // Refund details
  }
}
Get All Payment Intents
Endpoint: GET /api/v1/payment/get_all_payment_intents

Response:

json
Copy code
{
  "message": "List of PaymentIntents retrieved successfully",
  "paymentIntents": [
    // List of payment intents
  ]
}
License
This project is licensed under the MIT License - see the LICENSE file for details.

