import React from "react";

const PortfolioTwo = () => {
  return (
    <div className="portfolio-area-1 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-between align-items-end">
          <div className="col-xl-5 col-lg-6">
            <div className="title-area">
              <span className="sub-title">Our project</span>
              <h2 className="sec-title">
                Affordable Car Repair The Best Solutions{" "}
                <img
                  className="title-bg-shape"
                  src="assets/img/bg/title-bg-shape.png"
                  alt="img"
                />
              </h2>
            </div>
          </div>
          <div className="col-sm-auto">
            <div className="title-area">
              <div className="icon-box">
                <button
                  data-slick-prev=".portfolio-slider1"
                  className="slick-arrow default"
                >
                  <i className="fas fa-arrow-left" />
                </button>
                <button
                  data-slick-next=".portfolio-slider1"
                  className="slick-arrow default"
                >
                  <i className="fas fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        <div
          className="row global-carousel gx-30 portfolio-slider1"
          data-slide-show={1}
          data-center-mode="true"
          data-xl-center-mode="true"
          data-ml-center-mode="true"
          data-lg-center-mode="true"
          data-center-padding="578px"
          data-xl-center-padding="350px"
          data-ml-center-padding="300px"
          data-lg-center-padding="200px"
        >
          <div className="col-lg-6">
            <div className="portfolio-card style2">
              <div className="portfolio-card-thumb">
                <img src="assets/img/portfolio/2-1.png" alt="img" />
              </div>
              <div className="portfolio-card-details">
                <div className="media-left">
                  <h4 className="portfolio-card-details_title">
                    <a href="project-details.html">Innovate Grow Succeed</a>
                  </h4>
                  <span className="portfolio-card-details_subtitle">
                    VoIP Services
                  </span>
                </div>
                <a href="project-details.html" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="portfolio-card style2">
              <div className="portfolio-card-thumb">
                <img src="assets/img/portfolio/2-2.png" alt="img" />
              </div>
              <div className="portfolio-card-details">
                <div className="media-left">
                  <h4 className="portfolio-card-details_title">
                    <a href="project-details.html">Innovate Grow Succeed</a>
                  </h4>
                  <span className="portfolio-card-details_subtitle">
                    VoIP Services
                  </span>
                </div>
                <a href="project-details.html" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="portfolio-card style2">
              <div className="portfolio-card-thumb">
                <img src="assets/img/portfolio/2-3.png" alt="img" />
              </div>
              <div className="portfolio-card-details">
                <div className="media-left">
                  <h4 className="portfolio-card-details_title">
                    <a href="project-details.html">Innovate Grow Succeed</a>
                  </h4>
                  <span className="portfolio-card-details_subtitle">
                    VoIP Services
                  </span>
                </div>
                <a href="project-details.html" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTwo;
