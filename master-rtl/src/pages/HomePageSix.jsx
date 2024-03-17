import React from "react";
import HeaderFive from "../components/left-to-right/HeaderFive";
import HeroSix from "../components/left-to-right/HeroSix";
import CategoryAreaOne from "../components/left-to-right/CategoryAreaOne";
import ProductAreaOne from "../components/left-to-right/ProductAreaOne";
import CTAAreaTwo from "../components/left-to-right/CTAAreaTwo";
import ProductAreaTwo from "../components/left-to-right/ProductAreaTwo";
import FaqAreaThree from "../components/left-to-right/FaqAreaThree";
import ClientAreaFour from "../components/left-to-right/ClientAreaFour";
import BlogAreaTwo from "../components/left-to-right/BlogAreaTwo";
import SubscribeTwo from "../components/left-to-right/SubscribeTwo";
import FooterAreaFour from "../components/left-to-right/FooterAreaFour";

const HomePageSix = () => {
  return (
    <>
      {/* Header Five */}
      <HeaderFive />

      {/* Hero Six */}
      <HeroSix />

      {/* Category Area One */}
      <CategoryAreaOne />

      {/* Product Area One */}
      <ProductAreaOne />

      {/* CTA Area Two */}
      <CTAAreaTwo />

      {/* Product Area Two */}
      <ProductAreaTwo />

      {/* Faq Area three */}
      <FaqAreaThree />

      {/* Client Area Four */}
      <ClientAreaFour />

      {/* Blog Area Two */}
      <div className="space-top">
        <BlogAreaTwo />
      </div>

      {/* Subscribe Two */}
      <SubscribeTwo />

      {/* Footer Area Four */}
      <FooterAreaFour />
    </>
  );
};

export default HomePageSix;
