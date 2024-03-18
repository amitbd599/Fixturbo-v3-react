import React from "react";
import HeaderOne from "../components/HeaderOne";

import FooterAreaOne from "../components/FooterAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import SubscribeOne from "../components/SubscribeOne";
import ProjectDetailsArea from "../components/ProjectDetailsArea";

const ProjectDetailsPage = () => {
  return (
    <>
      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"تفاصيل المشروع"} />

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
