import Router from "next/router";

import Layout from "../components/Layout";
import Row from "../components/checkout/Row";
import ShopDetails from "../components/checkout/ShopDetails";
import CheckoutForm from "../components/CheckoutForm";

const MainPage = () => {
  const getPrice = (itemPrice) => itemPrice.toFixed(2);

  return (
    <Layout title="Make Payment">
      <Row>
        <ShopDetails/>
      </Row>
      <CheckoutForm
        price={getPrice(10.50)}
        onSuccessfulCheckout={() => Router.push("/success")}
      />
    </Layout>
  );
};

export default MainPage;
