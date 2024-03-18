import React from "react";
import HeaderOne from "../components/HeaderOne";

import FooterAreaOne from "../components/FooterAreaOne";
import Breadcrumb from "../components/Breadcrumb";
import AboutTwo from "../components/AboutTwo";
import ProcessAreaOne from "../components/ProcessAreaOne";
import CTAAreaOne from "../components/CTAAreaOne";
import TestimonialOne from "../components/TestimonialOne";
import SubscribeOne from "../components/SubscribeOne";
import TeamAreaTwo from "../components/TeamAreaTwo";

const AboutPage = () => {
  return (
    <>
      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"معلومات عنا"} />

      {/* About Area */}
      <AboutTwo />

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
