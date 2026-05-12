# Portfolio Backend

This backend receives contact form submissions and forwards them as email.

## Setup

1. Copy `.env.example` to `.env`.
2. Fill in your SMTP details and the destination email address.
3. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
4. Start the backend:
   ```bash
   npm start
   ```

## API

- POST `/contact`
  - JSON body: `{ name, email, message }`
  - Sends an email to `RECEIVER_EMAIL`.

## Notes

- Use a Gmail app password if you have 2FA enabled on your account.
- Make sure the frontend is running on the URL in `FRONTEND_ORIGIN`.
