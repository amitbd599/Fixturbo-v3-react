import React from "react";

const HeroSix = () => {
  return (
    <div className="hero-wrapper" id="hero">
      <div className="container">
        <div className="hero-6" style={{ backgroundColor: "#EAE1D6" }}>
          <div className="row flex-row-reverse align-items-center">
            <div className="col-md-6">
              <div className="hero-thumb text-center">
                <img src="assets/img/update-img/hero6-1.png" alt="img" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="hero-style6">
                <span className="sub-title">Featured Product</span>
                <h1 className="hero-title">Engine pistons</h1>
                <div className="btn-group">
                  <a href="shop.html" className="btn style2 style-radius">
                    Shop Now
                  </a>
                  <span className="offer-tag">Up to 20% Off</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*==============================
        Intro Area  
        ==============================*/}
        <div className="row gx-30 gy-30">
          <div className="col-lg-4 col-md-6">
            <div
              className="hero-intro-card"
              style={{ backgroundColor: "#F2F2EF" }}
            >
              <div className="intro-card-img">
                <img src="assets/img/update-img/hero6-2.png" alt="img" />
              </div>
              <div className="intro-card-details">
                <h6 className="intro-card-subtitle">save up to $5.00</h6>
                <h4 className="intro-card-title">
                  <a href="#">Engine pistons and cog</a>
                </h4>
                <a href="shop.html" className="btn style5 style-radius">
                  Shop Now
                  <i className="fas fa-arrow-right ms-2" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="hero-intro-card"
              style={{ backgroundColor: "rgba(221, 76, 100, 0.3)" }}
            >
              <div className="intro-card-img">
                <img src="assets/img/update-img/hero6-3.png" alt="img" />
              </div>
              <div className="intro-card-details">
                <h6 className="intro-card-subtitle">save up to $5.00</h6>
                <h4 className="intro-card-title">
                  <a href="#">Engine pistons and cog</a>
                </h4>
                <a href="shop.html" className="btn style5 style-radius">
                  Shop Now
                  <i className="fas fa-arrow-right ms-2" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="hero-intro-card bg-theme">
              <div className="intro-card-img">
                <img src="assets/img/update-img/hero6-4.png" alt="img" />
              </div>
              <div className="intro-card-details">
                <h6 className="intro-card-subtitle text-white">
                  save up to $5.00
                </h6>
                <h4 className="intro-card-title text-white">
                  <a href="#">Engine pistons and cog</a>
                </h4>
                <a href="shop.html" className="btn style5 style-radius">
                  Shop Now
                  <i className="fas fa-arrow-right ms-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSix;
