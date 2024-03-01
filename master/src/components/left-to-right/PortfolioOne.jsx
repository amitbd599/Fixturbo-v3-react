import React, { useEffect, useState } from "react";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
const PortfolioOne = () => {
  const isotope = React.useRef(Isotope | null);
  const [active, setActive] = useState(1);

  // handling filter key change
  useEffect(() => {
    const imgLoad = imagesLoaded(document.querySelectorAll(".image-container"));

    imgLoad.on("done", () => {
      isotope.current = new Isotope(".filter-container", {
        itemSelector: ".filter-item",
        layoutMode: "masonry",
        percentPosition: true,
      });

      return () => isotope.current?.destroy();
    });

    return () => imgLoad.off("done");
  }, []);

  const handleFilterKeyChange = (key, index) => {
    setActive(index);
    isotope.current?.arrange({ filter: `${key}` });
  };
  return (
    <div className="portfolio-area-1 space">
      <div className="portfolio-shape-img shape-mockup d-lg-block d-none">
        <img
          className="about1-shape-img-1 spin"
          src="assets/img/normal/about_shape1-2.svg"
          alt="img"
        />
        <img
          className="about1-shape-img-2 spin2"
          src="assets/img/normal/about_shape1-1.svg"
          alt="img"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="title-area text-center">
              <span className="sub-title">Latest Portfolio</span>
              <h2 className="sec-title">Where Expertise Meets Every Engine</h2>
            </div>
          </div>
          <div className="col-12">
            <div className="portfolio-tab-1 mb-60">
              <div className="filter-menu-active text-center">
                <button
                  className={`${active === 1 && "active"}  btn style-border3`}
                  type="button"
                  onClick={() => handleFilterKeyChange("*", 1)}
                >
                  All Project
                </button>
                <button
                  className={`${active === 2 && "active"}  btn style-border3`}
                  type="button"
                  onClick={() => handleFilterKeyChange(".pro1", 2)}
                >
                  Auto Fixers
                </button>
                <button
                  className={`${active === 3 && "active"}  btn style-border3`}
                  type="button"
                  onClick={() => handleFilterKeyChange(".pro2", 3)}
                >
                  Car Care Clinic
                </button>
                <button
                  className={`${active === 4 && "active"}  btn style-border3`}
                  type="button"
                  onClick={() => handleFilterKeyChange(".pro3", 4)}
                >
                  Car Fix
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-30 gx-30  filter-container">
          <div className="col-lg-4 filter-item  pro1 pro3">
            <div className="portfolio-card image-container">
              <div className="portfolio-card-thumb">
                <img src="assets/img/portfolio/1-3.png" alt="img" />
              </div>
              <div className="portfolio-card-details">
                <div className="media-left">
                  <span className="portfolio-card-details_subtitle">
                    Our Projects
                  </span>
                  <h4 className="portfolio-card-details_title">
                    <a href="project-details.html">Women Entrepreneurs3</a>
                  </h4>
                </div>
                <a href="project-details.html" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 filter-item  pro2 pro4">
            <div className="portfolio-card image-container">
              <div className="portfolio-card-thumb">
                <img src="assets/img/portfolio/1-3.png" alt="img" />
              </div>
              <div className="portfolio-card-details">
                <div className="media-left">
                  <span className="portfolio-card-details_subtitle">
                    Our Projects
                  </span>
                  <h4 className="portfolio-card-details_title">
                    <a href="project-details.html">Women Entrepreneurs3</a>
                  </h4>
                </div>
                <a href="project-details.html" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 filter-item pro3 pro1">
            <div className="portfolio-card image-container">
              <div className="portfolio-card-thumb">
                <img src="assets/img/portfolio/1-4.png" alt="img" />
              </div>
              <div className="portfolio-card-details">
                <div className="media-left">
                  <span className="portfolio-card-details_subtitle">
                    Our Projects
                  </span>
                  <h4 className="portfolio-card-details_title">
                    <a href="project-details.html">Women Entrepreneurs4</a>
                  </h4>
                </div>
                <a href="project-details.html" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 filter-item pro4 pro2">
            <div className="portfolio-card image-container">
              <div className="portfolio-card-thumb">
                <img src="assets/img/portfolio/1-4.png" alt="img" />
              </div>
              <div className="portfolio-card-details">
                <div className="media-left">
                  <span className="portfolio-card-details_subtitle">
                    Our Projects
                  </span>
                  <h4 className="portfolio-card-details_title">
                    <a href="project-details.html">Women Entrepreneurs4</a>
                  </h4>
                </div>
                <a href="project-details.html" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 filter-item pro4 pro1">
            <div className="portfolio-card image-container">
              <div className="portfolio-card-thumb">
                <img src="assets/img/portfolio/1-4.png" alt="img" />
              </div>
              <div className="portfolio-card-details">
                <div className="media-left">
                  <span className="portfolio-card-details_subtitle">
                    Our Projects
                  </span>
                  <h4 className="portfolio-card-details_title">
                    <a href="project-details.html">Women Entrepreneurs4</a>
                  </h4>
                </div>
                <a href="project-details.html" className="icon-btn">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 filter-item pro4 pro2 pro3">
            <div className="portfolio-card image-container">
              <div className="portfolio-card-thumb">
                <img src="assets/img/portfolio/1-4.png" alt="img" />
              </div>
              <div className="portfolio-card-details">
                <div className="media-left">
                  <span className="portfolio-card-details_subtitle">
                    Our Projects
                  </span>
                  <h4 className="portfolio-card-details_title">
                    <a href="project-details.html">Women Entrepreneurs4</a>
                  </h4>
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

export default PortfolioOne;
