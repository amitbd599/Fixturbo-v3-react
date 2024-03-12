import React from "react";
import HeaderFour from "../components/right-to-left/HeaderFour";
import HeroFive from "../components/right-to-left/HeroFive";
import ServiceAreaThree from "../components/right-to-left/ServiceAreaThree";
import AboutOne from "../components/right-to-left/AboutOne";
import ServiceAreaFour from "../components/right-to-left/ServiceAreaFour";
import WhyChooseUsTwo from "../components/right-to-left/WhyChooseUsTwo";
import PortfolioThree from "../components/right-to-left/PortfolioThree";
import IntroAreaTwo from "../components/right-to-left/IntroAreaTwo";
import TeamAreaFour from "../components/right-to-left/TeamAreaFour";
import ClientAreaThree from "../components/right-to-left/ClientAreaThree";
import BlogAreaTwo from "../components/right-to-left/BlogAreaTwo";
import FooterAreaThree from "../components/right-to-left/FooterAreaThree";

const HomePageRTLFive = () => {
  return (
    <>
      {/* Header Four */}
      <HeaderFour />

      {/* Hero Five */}
      <HeroFive />

      {/* Service Area Three */}
      <ServiceAreaThree />

      {/* AboutOne */}
      <AboutOne />

      {/* Service Area Four */}
      <ServiceAreaFour />

      {/* Why Choose Us Two */}
      <WhyChooseUsTwo />

      {/* PortfolioThree */}
      <PortfolioThree />

      {/* IntroAreaTwo */}
      <IntroAreaTwo />

      {/* Team Area Four */}
      <TeamAreaFour />

      {/* ClientAreaThree */}
      <ClientAreaThree />

      {/* BlogAreaTwo */}
      <div className="space-top">
        <BlogAreaTwo />
      </div>

      {/* Footer Area Three */}
      <FooterAreaThree />
    </>
  );
};

export default HomePageRTLFive;
