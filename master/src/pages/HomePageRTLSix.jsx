import React from "react";
import HeaderFive from "../components/right-to-left/HeaderFive";
import HeroSix from "../components/right-to-left/HeroSix";
import CategoryAreaOne from "../components/right-to-left/CategoryAreaOne";
import ProductAreaOne from "../components/right-to-left/ProductAreaOne";
import CTAAreaTwo from "../components/right-to-left/CTAAreaTwo";
import ProductAreaTwo from "../components/right-to-left/ProductAreaTwo";
import FaqAreaThree from "../components/right-to-left/FaqAreaThree";
import ClientAreaFour from "../components/right-to-left/ClientAreaFour";
import BlogAreaTwo from "../components/right-to-left/BlogAreaTwo";
import SubscribeTwo from "../components/right-to-left/SubscribeTwo";
import FooterAreaFour from "../components/right-to-left/FooterAreaFour";

const HomePageRTLSix = () => {
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

      {/* Faq Area Three */}
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

export default HomePageRTLSix;
