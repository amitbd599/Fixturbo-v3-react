import React from "react";
import HeaderOne from "../components/left-to-right/HeaderOne";

import FooterAreaOne from "../components/left-to-right/FooterAreaOne";
import Breadcrumb from "../components/left-to-right/Breadcrumb";
import SubscribeOne from "../components/left-to-right/SubscribeOne";
import ShopDetails from "../components/left-to-right/ShopDetails";

const ShopDetailsPage = () => {
  return (
    <>
      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Shop Details"} />

      {/* Shop Details */}
      <ShopDetails />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default ShopDetailsPage;
