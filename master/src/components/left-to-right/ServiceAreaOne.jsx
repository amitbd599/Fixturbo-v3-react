import React from "react";

const ServiceAreaOne = () => {
  return (
    <div className="service-area-1 space-top bg-smoke overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">Latest service</span>
              <h2 className="sec-title">
                Professional Car Repair The Best Services
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-1.svg" alt="img" />
                </div>
                <h4 className="service-card_title h5">
                  <a href="service-details.html">Auto Fixers</a>
                </h4>
                <p className="service-card_text">
                  A car repair is a service provided to fix any issues or
                  damages with your{" "}
                </p>
                <a href="service-details.html" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/service-1-1.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-2.svg" alt="img" />
                </div>
                <h4 className="service-card_title h5">
                  <a href="service-details.html">Mechanic Masters</a>
                </h4>
                <p className="service-card_text">
                  A car repair is a service provided to fix any issues or
                  damages with your{" "}
                </p>
                <a href="service-details.html" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/service-1-2.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img src="assets/img/icon/service-icon_1-3.svg" alt="img" />
                </div>
                <h4 className="service-card_title h5">
                  <a href="service-details.html">Drive-In Garage</a>
                </h4>
                <p className="service-card_text">
                  A car repair is a service provided to fix any issues or
                  damages with your{" "}
                </p>
                <a href="service-details.html" className="link-btn">
                  Read More <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/service-1-3.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaOne;
