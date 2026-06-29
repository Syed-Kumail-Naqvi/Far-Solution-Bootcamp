# Day 26 - React E-Commerce App

This project is a React-based e-commerce website built during Day 26 of the bootcamp. It demonstrates how to create a modern shopping experience with multiple pages, dynamic product fetching, category-based browsing, and cart functionality.

## Project Overview

The app includes:
- A home page with a banner, product categories, and popular products
- Category pages for browsing products by type
- A single product page with quantity selection and add-to-cart actions
- A cart system using React context
- Responsive UI styling with SCSS
- API integration for categories and products

## Main Features

- React Router navigation between pages
- Dynamic product and category data loading from an API
- Context API for global cart state
- Add/remove/update cart items
- Related products section on the single product page
- Newsletter and footer sections

## Tech Stack

- React
- React Router DOM
- Context API
- Axios
- SCSS
- Material UI
- React Icons
- Stripe-related packages

## Installation

1. Open the project folder:
   ```bash
   cd Day-26
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file and add the required environment variables:
   ```bash
   REACT_APP_DEV_URL=your_api_base_url
   REACT_APP_STRIPE_APP_KEY=your_stripe_key
   ```

## Run the App

```bash
npm start
```

The app will run at http://localhost:3000.

## Folder Structure

- src/components - UI components for header, home, products, cart, and product pages
- src/utils - API helper and global app context
- src/hooks - reusable custom hooks
- src/assets - static images and icons

## Learning Points

In this project, I learned:
- How to build multi-page apps with React Router
- How to manage shared state with Context API
- How to fetch and display data from an API
- How to create cart functionality with quantity updates
- How to structure a React project with reusable components and SCSS
