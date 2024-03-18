import React from "react";

const HeroFour = () => {
  return (
    <div
      className="hero-wrapper hero-4"
      id="hero"
      style={{ backgroundImage: "url(assets/img/hero/banner1.png)" }}
    >
      <div className="hero-shape4-1">
        <img
          className="shape-position shape1"
          src="assets/img/hero/shape1.png"
          alt="img"
        />
        <img
          className="shape-position shape2"
          src="assets/img/hero/shape2.png"
          alt="img"
        />
        <img
          className="shape-position shape3"
          src="assets/img/hero/shape3.png"
          alt="img"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-5 col-lg-8">
            <div className="hero-style4">
              <span className="sub-title text-white">للحصول على</span>
              <h1 className="hero-title text-white">
                بارية لدينا للحصول على التحدي
              </h1>
              <p className="hero-text text-white">
                شترك في اشترك في النشرة الإخبارية لدينا للحصول على التحديثات
                اشترك في اشترك في النشرة الإخبارية
              </p>
              <div className="btn-group">
                <a href="about.html" className="btn">
                  على التحديثات
                </a>
                <a href="service.html" className="btn style-border">
                  للحصول على
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFour;
