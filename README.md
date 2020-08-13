# React Stripe.js Implementation Walk-through

### Getting Started

- Install the dependencies `npm install`
- Start develop server! `npm run dev`
- Visit the payment page on `http://localhost:3000`

### Eventual Requirements

- You will need to sign up for a Stripe account if you haven't already: [stripe.com/register](https://stripe.com/register)
- After logging in, click on `Developers` on the left panel of your dashboard. Ensure that the `Viewing test data` is switched on.
- Click on `API Keys` and copy your account's `Publishable key` and `Secret key`
- Paste keys into to the `.env` file of your project

### Usage

- Line 17 of `pages/index` page handles the price to be paid by the customer. You can use props to pass it in from the total cost of items that a customer is to purchase.
- After a successful payment, the customer is redirected to a page showing the success message. The page is `pages/success`. You can modify the success page to suite your use case.
- Visit `https://stripe.com/docs/testing#cards` to get a list cards to be used for testing purpose.
- After each payment, proceed to your stripe dashboard payments tab `https://dashboard.stripe.com/test/payments` to view the payments that have been made.
- Visit `https://www.npmjs.com/package/@stripe/stripe-js` and `https://www.npmjs.com/package/@stripe/react-stripe-js` to view more usage guide about these stripe packages that were used.