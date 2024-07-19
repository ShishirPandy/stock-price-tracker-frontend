This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Stock Price Tracker Frontend

## Overview
This is the frontend application for the Stock Price Tracker. It fetches and displays real-time data for specified stocks or cryptocurrencies from the backend API.

## Features
- Fetch real-time stock or cryptocurrency data.
- Display the data in a dynamic table.
- Allow switching between different stocks or cryptocurrencies.

## Technologies Used
- Next.js
- React
- Redux Toolkit
- TypeScript
- Axios

## Prerequisites
- Node.js (version 14.x or higher)

## Setup

1. **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd stock-price-tracker-frontend
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Configure API Proxy:**
    Ensure the `next.config.js` file is set up to proxy API requests to the backend:
    ```javascript
    module.exports = {
      async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://localhost:5000/api/:path*', // Proxy to Backend
          },
        ];
      },
    };
    ```

4. **Run the development server:**
    ```bash
    npm run dev
    ```

## Directory Structure
stock-price-tracker-frontend/
├── public/
├── src/
│ ├── features/
│ │ └── stockSlice.ts
│ ├── pages/
│ │ └── _app.tsx
│ │ └── index.tsx
│ ├── store/
│ │ └── index.ts
│ ├── styles/
│ │ └── globals.css
├── next.config.js
├── package.json
├── tsconfig.json
└── node_modules/




## Usage
- Open your browser and navigate to `http://localhost:3000`.
- Use the dropdown to switch between different stocks or cryptocurrencies.
- The table will display and update the most recent 20 entries for the selected symbol.

## Troubleshooting
- Ensure the backend server is running and accessible.
- Check the browser console and terminal for any errors.
