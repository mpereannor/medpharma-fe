MedPharma is a web application for managing consultations in a health facility. This repository contains the frontend application built with React and Vite.

Checkout Website : [[[MedPharmaFe](https://medpharma-fe.vercel.app/)]]

## Getting Started

To get started with the frontend of MedPharma, follow these steps:

1. Clone this repository to your local machine.
2. Install Node.js and npm if you haven't already.
3. Navigate to the `fe` directory in your terminal.
4. Install dependencies by running `npm install`.
5. Run the following command to spin up the application using Docker:
   ```
   docker compose up --build -d
   ```
6. Set up your environment variables by creating a `.env` file based on the `.env.example` file.
7.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in production mode.

### `npm run dev`

Runs the app in development mode using nodemon for hot reloading.

### `npm run build`

Builds the app for production deployment.

### `npm test`

## Environment Variables

Make sure to set the following environment variables in your .env file:

- `VITE_REST_API`: The URL of the backend API (e.g., http://localhost:8000).
- `VITE_AUTH0_DOMAIN`: Your Auth0 domain.
- `VITE_AUTH0_CLIENT_ID`: Your Auth0 client ID.
- `VITE_AUTH0_CALLBACK_URL`: The callback URL for Auth0 authentication.
- `VITE_AUTH0_AUDIENCE`: The audience for Auth0 authentication.
