# Stripe_Payment

# Stripe Payment Gateway Integration

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

This project implements backend APIs for Stripe Payment Gateway integration.

## Table of Contents

- [Setup](#setup)
- [Usage](#usage)
  - [Run the Application](#run-the-application)
  - [Docker](#docker)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Additional Information](#additional-information)
- [Bonus Features](#bonus-features)
- [Contributors](#contributors)
- [License](#license)

## Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/stripe-payment-gateway-mvc.git
    cd stripe-payment-gateway-mvc
    ```

2. **Install dependencies:**

    ```bash
    make setup
    ```

3. **Set up your environment variables:**

    Create a `.env` file in the project root and add the following:

    ```dotenv
    STRIPE_SECRET_KEY=your_stripe_secret_key
    PORT=3000
    ```

    Replace `your_stripe_secret_key` with your actual Stripe secret key.

## Usage

### Run the Application

```bash
make run
