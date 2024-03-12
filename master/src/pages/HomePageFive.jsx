import React from "react";
import HeaderFour from "../components/left-to-right/HeaderFour";
import HeroFive from "../components/left-to-right/HeroFive";
import ServiceAreaThree from "../components/left-to-right/ServiceAreaThree";
import AboutOne from "../components/left-to-right/AboutOne";
import ServiceAreaFour from "../components/left-to-right/ServiceAreaFour";
import WhyChooseUsTwo from "../components/left-to-right/WhyChooseUsTwo";
import PortfolioThree from "../components/left-to-right/PortfolioThree";
import IntroAreaTwo from "../components/left-to-right/IntroAreaTwo";
import TeamAreaFour from "../components/left-to-right/TeamAreaFour";
import ClientAreaThree from "../components/left-to-right/ClientAreaThree";
import BlogAreaTwo from "../components/left-to-right/BlogAreaTwo";
import FooterAreaThree from "../components/left-to-right/FooterAreaThree";

const HomePageFive = () => {
  return (
    <>
      {/* Header Four */}
      <HeaderFour />

      {/* Hero Five */}
      <HeroFive />

      {/* Service Area Three */}
      <ServiceAreaThree />

      {/* About One */}
      <AboutOne />

      {/* Service Area Four */}
      <ServiceAreaFour />

      {/* Why Choose Us Two */}
      <WhyChooseUsTwo />

      {/* Portfolio Three */}
      <PortfolioThree />

      {/* Intro Area Two */}
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

export default HomePageFive;
