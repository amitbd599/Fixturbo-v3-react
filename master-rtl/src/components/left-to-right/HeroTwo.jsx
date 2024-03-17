import React from "react";

const HeroTwo = () => {
  return (
    <div
      className="hero-wrapper hero-2"
      id="hero"
      style={{ backgroundImage: "url(assets/img/hero/hero_bg_2_1.png)" }}
    >
      <div className="hero-shape2-1">
        <span className="hero-shape2-2" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-5 col-lg-8">
            <div className="hero-style2">
              <span className="sub-title text-white">Growth Accelerator</span>
              <h1 className="hero-title text-white">
                Crafting{" "}
                <span>
                  <img src="assets/img/hero/hero_shape_2.png" alt="img" />
                  Automotive
                </span>{" "}
                Excellence One Repair At Time
              </h1>
              <p className="hero-text text-white">
                Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien
                lacus. Etiam molestie justo neque, in convallis massa tempus in.
              </p>
              <div className="btn-group">
                <a href="about.html" className="btn">
                  Learn More
                </a>
                <div className="call-media-wrap">
                  <div className="icon">
                    <img src="assets/img/icon/phone-1.svg" alt="img" />
                  </div>
                  <div className="media-body">
                    <h6 className="title text-white">Requesting A Call:</h6>
                    <h4 className="link">
                      <a className="text-white" href="tel:6295550129">
                        (629) 555-0129
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
