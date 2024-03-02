import React from "react";
import HeaderTwo from "../components/left-to-right/HeaderTwo";
import HeroTwo from "../components/left-to-right/HeroTwo";
import ServiceAreaTwo from "../components/left-to-right/ServiceAreaTwo";
import AboutTwo from "../components/left-to-right/AboutTwo";
import CounterTwo from "../components/left-to-right/CounterTwo";
import PortfolioTwo from "../components/left-to-right/PortfolioTwo";

const HomePageTwo = () => {
  return (
    <>
      {/* Header Two */}
      <HeaderTwo />

      {/* Hero Two */}
      <HeroTwo />

      {/* Service Area Two */}
      <ServiceAreaTwo />

      {/* About Two */}
      <div className="about-area-2 bg-smoke">
        <AboutTwo />
      </div>

      {/* Counter Two */}
      <CounterTwo />

      {/* Portfolio Two */}
      <PortfolioTwo />
    </>
  );
};

export default HomePageTwo;
