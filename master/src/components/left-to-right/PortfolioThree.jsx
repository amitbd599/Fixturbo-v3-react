import React from "react";

const PortfolioThree = () => {
  return (
    <div className="portfolio-area-1 space overflow-hidden bg-smoke">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">Our Work</span>
              <h2 className="sec-title">Our Featured Gallery</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
          </div>
        </div>
        <div className="row gy-30">
          <div className="col-md-4">
            <div className="portfolio-thumb">
              <a
                className="popup-image icon-btn"
                href="assets/img/gallery/1.png"
              >
                <i className="far fa-eye" />
              </a>
              <img src="assets/img/gallery/1.png" alt="portfolio" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="portfolio-thumb">
              <a
                className="popup-image icon-btn"
                href="assets/img/gallery/2.png"
              >
                <i className="far fa-eye" />
              </a>
              <img src="assets/img/gallery/2.png" alt="portfolio" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="portfolio-thumb">
              <a
                className="popup-image icon-btn"
                href="assets/img/gallery/3.png"
              >
                <i className="far fa-eye" />
              </a>
              <img src="assets/img/gallery/3.png" alt="portfolio" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="portfolio-thumb">
              <a
                className="popup-image icon-btn"
                href="assets/img/gallery/4.png"
              >
                <i className="far fa-eye" />
              </a>
              <img src="assets/img/gallery/4.png" alt="portfolio" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="portfolio-thumb">
              <a
                className="popup-image icon-btn"
                href="assets/img/gallery/5.png"
              >
                <i className="far fa-eye" />
              </a>
              <img src="assets/img/gallery/5.png" alt="portfolio" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="portfolio-thumb">
              <a
                className="popup-image icon-btn"
                href="assets/img/gallery/6.png"
              >
                <i className="far fa-eye" />
              </a>
              <img src="assets/img/gallery/6.png" alt="portfolio" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioThree;
