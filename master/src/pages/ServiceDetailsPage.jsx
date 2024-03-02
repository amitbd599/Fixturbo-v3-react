import React from "react";
import HeaderOne from "../components/left-to-right/HeaderOne";

import FooterAreaOne from "../components/left-to-right/FooterAreaOne";
import Breadcrumb from "../components/left-to-right/Breadcrumb";
import SubscribeOne from "../components/left-to-right/SubscribeOne";
import ServiceDetails from "../components/left-to-right/ServiceDetails";

const ServiceDetailsPage = () => {
  return (
    <>
      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Service Details"} />

      {/* Service Details */}
      <ServiceDetails />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default ServiceDetailsPage;
