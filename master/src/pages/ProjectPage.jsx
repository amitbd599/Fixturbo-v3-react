import React from "react";
import HeaderOne from "../components/left-to-right/HeaderOne";

import FooterAreaOne from "../components/left-to-right/FooterAreaOne";
import Breadcrumb from "../components/left-to-right/Breadcrumb";
import SubscribeOne from "../components/left-to-right/SubscribeOne";
import PortfolioOne from "../components/left-to-right/PortfolioOne";

const ProjectPage = () => {
  return (
    <>
      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Project"} />

      {/* Portfolio One */}
      <PortfolioOne />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default ProjectPage;
