import React from "react";
import HeaderOne from "../components/left-to-right/HeaderOne";

import FooterAreaOne from "../components/left-to-right/FooterAreaOne";
import Breadcrumb from "../components/left-to-right/Breadcrumb";
import SubscribeOne from "../components/left-to-right/SubscribeOne";
import ProjectDetailsArea from "../components/left-to-right/ProjectDetailsArea";

const ProjectDetailsPage = () => {
  return (
    <>
      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Project Details"} />

      {/* Project Details Area */}
      <ProjectDetailsArea />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default ProjectDetailsPage;
