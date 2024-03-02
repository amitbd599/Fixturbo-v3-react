import React from "react";

const ServiceAreaTwo = () => {
  return (
    <div className="service-area-2 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">Our Services</span>
              <h2 className="sec-title">
                Trusted Car Repair the Professionals{" "}
                <img
                  className="title-bg-shape shape-center"
                  src="assets/img/bg/title-bg-shape.png"
                  alt="img"
                />
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(assets/img/service/service-2-1.png)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img src="assets/img/icon/service-icon_1-1.svg" alt="img" />
                  </div>
                  <h4 className="service-card_title h5">
                    <a href="service-details.html">Mechanic Masters</a>
                  </h4>
                  <p className="service-card_text">
                    Customer satisfaction is crucial for amohlo di business as
                    it leads to customer loyalty.{" "}
                  </p>
                </div>
              </div>
              <a href="service-details.html" className="btn style4">
                Read More <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(assets/img/service/service-2-2.png)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img src="assets/img/icon/service-icon_1-2.svg" alt="img" />
                  </div>
                  <h4 className="service-card_title h5">
                    <a href="service-details.html">Speedy Auto Repair</a>
                  </h4>
                  <p className="service-card_text">
                    Customer satisfaction is crucial for amohlo di business as
                    it leads to customer loyalty.{" "}
                  </p>
                </div>
              </div>
              <a href="service-details.html" className="btn style4">
                Read More <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: "url(assets/img/service/service-2-3.png)",
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <img src="assets/img/icon/service-icon_1-3.svg" alt="img" />
                  </div>
                  <h4 className="service-card_title h5">
                    <a href="service-details.html">Precision Auto Works</a>
                  </h4>
                  <p className="service-card_text">
                    Customer satisfaction is crucial for amohlo di business as
                    it leads to customer loyalty.{" "}
                  </p>
                </div>
              </div>
              <a href="service-details.html" className="btn style4">
                Read More <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaTwo;
