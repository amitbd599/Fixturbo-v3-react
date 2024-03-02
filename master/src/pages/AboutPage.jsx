import React from "react";
import HeaderOne from "../components/left-to-right/HeaderOne";

import FooterAreaOne from "../components/left-to-right/FooterAreaOne";
import Breadcrumb from "../components/left-to-right/Breadcrumb";
import AboutArea from "../components/left-to-right/AboutArea";
import ProcessAreaOne from "../components/left-to-right/ProcessAreaOne";
import CTAAreaOne from "../components/left-to-right/CTAAreaOne";
import TestimonialOne from "../components/left-to-right/TestimonialOne";
import SubscribeOne from "../components/left-to-right/SubscribeOne";
import TeamAreaTwo from "../components/left-to-right/TeamAreaTwo";

const AboutPage = () => {
  return (
    <>
      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"About Us"} />

      {/* About Area */}
      <AboutArea />

      {/* Process Area One */}
      <ProcessAreaOne />

      {/* CTA Area One */}
      <CTAAreaOne />

      {/* Testimonial One */}
      <TestimonialOne />

      {/* Team Area Two */}
      <TeamAreaTwo />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default AboutPage;
