import Head from "next/head";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import GlobalStyles from "./GlobalStyles";

const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);

const Layout = ({ children, title }) => {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Elements stripe={stripePromise}>{children}</Elements>
    </>
  );
};

export default Layout;
