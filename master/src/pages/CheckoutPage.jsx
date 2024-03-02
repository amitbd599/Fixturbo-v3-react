import React from "react";
import HeaderOne from "../components/left-to-right/HeaderOne";

import FooterAreaOne from "../components/left-to-right/FooterAreaOne";
import Breadcrumb from "../components/left-to-right/Breadcrumb";
import SubscribeOne from "../components/left-to-right/SubscribeOne";
import Checkout from "../components/left-to-right/Checkout";

const CheckoutPage = () => {
  return (
    <>
      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Checkout"} />

      {/* Checkout */}
      <Checkout />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default CheckoutPage;
