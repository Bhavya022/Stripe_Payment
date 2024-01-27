// app.js

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const paymentRoutes = require('./routes/paymentRoutes');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all routes
app.use(morgan('combined')); // Log HTTP requests

// Routes
app.use('/api/v1/payment', paymentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
