import React, { useEffect, useState } from "react";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
const ProductAreaOne = () => {
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
    <div className="product-area-1 space-top bg-smoke overflow-hidden">
      <div className="container">
        <div className="title-area text-center mb-20">
          <h3 className="sec-title">Featured Products</h3>
        </div>
        <div className="portfolio-tab-1 mb-45">
          <div className="filter-menu-active text-center">
            <button
              className={`${active === 1 && "active"}  btn style-border3`}
              type="button"
              onClick={() => handleFilterKeyChange("*", 1)}
            >
              Featured Products
            </button>
            <button
              className={`${active === 2 && "active"}  btn style-border3`}
              type="button"
              onClick={() => handleFilterKeyChange(".cat1", 2)}
            >
              Windshield{" "}
            </button>
            <button
              className={`${active === 3 && "active"}  btn style-border3`}
              type="button"
              onClick={() => handleFilterKeyChange(".cat2", 3)}
            >
              Engine pistons
            </button>
          </div>
        </div>
        <div className="row gy-30 gx-30 masonary-active filter-container">
          <div className="col-lg-3 col-sm-6 filter-item cat2">
            <div className="product-card image-container">
              <div className="product-img">
                <img
                  src="assets/img/update-img/product/1-1.png"
                  alt="Product Image"
                />
                <span className="tag">
                  <span className="product-tag">Hot</span>
                  <span className="offer-tag">-20%</span>
                </span>
              </div>
              <div className="product-content">
                <h3 className="product-title">
                  <a href="shop-details.html">Engine pistons and cog</a>
                </h3>
                <span className="star-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </span>
                <span className="price">
                  <del>$30</del> $25
                </span>
                <a href="#" className="link-btn">
                  Add to cart <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 filter-item cat1 ">
            <div className="product-card image-container">
              <div className="product-img">
                <img
                  src="assets/img/update-img/product/1-2.png"
                  alt="Product Image"
                />
              </div>
              <div className="product-content">
                <h3 className="product-title">
                  <a href="shop-details.html">Exhaust manifold</a>
                </h3>
                <span className="star-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </span>
                <span className="price">
                  <del>$30</del> $25
                </span>
                <a href="#" className="link-btn">
                  Add to cart <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 filter-item cat1 ">
            <div className="product-card image-container">
              <div className="product-img">
                <img
                  src="assets/img/update-img/product/1-3.png"
                  alt="Product Image"
                />
                <span className="tag">
                  <span className="offer-tag">-20%</span>
                </span>
              </div>
              <div className="product-content">
                <h3 className="product-title">
                  <a href="shop-details.html">Windshield wiper motor</a>
                </h3>
                <span className="star-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </span>
                <span className="price">
                  <del>$30</del> $25
                </span>
                <a href="#" className="link-btn">
                  Add to cart <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 filter-item cat2">
            <div className="product-card image-container">
              <div className="product-img">
                <img
                  src="assets/img/update-img/product/1-4.png"
                  alt="Product Image"
                />
              </div>
              <div className="product-content">
                <h3 className="product-title">
                  <a href="shop-details.html">Engine pistons and cog</a>
                </h3>
                <span className="star-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </span>
                <span className="price">
                  <del>$30</del> $25
                </span>
                <a href="#" className="link-btn">
                  Add to cart <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 filter-item cat1">
            <div className="product-card image-container">
              <div className="product-img">
                <img
                  src="assets/img/update-img/product/1-5.png"
                  alt="Product Image"
                />
              </div>
              <div className="product-content">
                <h3 className="product-title">
                  <a href="shop-details.html">Power steering pump</a>
                </h3>
                <span className="star-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </span>
                <span className="price">
                  <del>$30</del> $25
                </span>
                <a href="#" className="link-btn">
                  Add to cart <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 filter-item cat1">
            <div className="product-card image-container">
              <div className="product-img">
                <img
                  src="assets/img/update-img/product/1-6.png"
                  alt="Product Image"
                />
                <span className="tag">
                  <span className="product-tag">Hot</span>
                  <span className="offer-tag">-20%</span>
                </span>
              </div>
              <div className="product-content">
                <h3 className="product-title">
                  <a href="shop-details.html">Windshield wiper motor</a>
                </h3>
                <span className="star-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </span>
                <span className="price">
                  <del>$30</del> $25
                </span>
                <a href="#" className="link-btn">
                  Add to cart <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 filter-item cat2">
            <div className="product-card image-container">
              <div className="product-img">
                <img
                  src="assets/img/update-img/product/1-7.png"
                  alt="Product Image"
                />
              </div>
              <div className="product-content">
                <h3 className="product-title">
                  <a href="shop-details.html">Exhaust manifold</a>
                </h3>
                <span className="star-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </span>
                <span className="price">
                  <del>$30</del> $25
                </span>
                <a href="#" className="link-btn">
                  Add to cart <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 filter-item cat2">
            <div className="product-card image-container">
              <div className="product-img">
                <img
                  src="assets/img/update-img/product/1-8.png"
                  alt="Product Image"
                />
                <span className="tag">
                  <span className="product-tag">Hot</span>
                  <span className="offer-tag">-20%</span>
                </span>
              </div>
              <div className="product-content">
                <h3 className="product-title">
                  <a href="shop-details.html">Oil filter</a>
                </h3>
                <span className="star-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </span>
                <span className="price">
                  <del>$30</del> $25
                </span>
                <a href="#" className="link-btn">
                  Add to cart <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAreaOne;
