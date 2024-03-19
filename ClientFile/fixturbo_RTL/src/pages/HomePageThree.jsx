import React, { useEffect, useState } from "react";
import HeaderOne from "../components/HeaderOne";
import HeroThree from "../components/HeroThree";
import FeatureAreaTwo from "../components/FeatureAreaTwo";
import AboutThree from "../components/AboutThree";
import IntroAreaOne from "../components/IntroAreaOne";
import ServiceAreaOne from "../components/ServiceAreaOne";
import PortfolioTwo from "../components/PortfolioTwo";
import FaqAreaThree from "../components/FaqAreaThree";
import MarqueeOne from "../components/MarqueeOne";
import TeamAreaThree from "../components/TeamAreaThree";
import CTAAreaOne from "../components/CTAAreaOne";
import TestimonialTwo from "../components/TestimonialTwo";
import BlogAreaThree from "../components/BlogAreaThree";
import SubscribeOne from "../components/SubscribeOne";
import FooterAreaOne from "../components/FooterAreaOne";
import Preloader from "../helper/Preloader";

const HomePageThree = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);
  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Header One */}
      <HeaderOne />

      {/* Hero Three */}
      <HeroThree />

      {/* Feature Area Two */}
      <FeatureAreaTwo />

      {/* About Three */}
      <AboutThree />

      {/* Intro Area One */}
      <IntroAreaOne />

      {/* Service Area One */}
      <ServiceAreaOne />

      {/* Portfolio One */}
      <PortfolioTwo />

      {/* Faq Area Two */}
      <FaqAreaThree />

      {/* Marquee One */}
      <MarqueeOne />

      {/* Team Area Three */}
      <TeamAreaThree />

      {/* CTA Area One */}
      <CTAAreaOne />

      {/* Testimonial  */}
      <TestimonialTwo />

      {/* Blog Area Three */}
      <BlogAreaThree />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default HomePageThree;
