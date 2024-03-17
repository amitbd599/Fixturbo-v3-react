import React from "react";

const SubscribeTwo = () => {
  return (
    <div className="container">
      <div className="footer-top-3">
        <div className="footer-logo">
          <a href="index.html">
            <img src="assets/img/logo-white.svg" alt="Fixturbo" />
          </a>
        </div>
        <h3 className="footer-top-title text-white">
          اشترك في النشرة الإخبارية لدينا للحصول على التحديثات
        </h3>
        <form className="newsletter-form">
          <button type="submit" className="btn style5">
            <i className="fas fa-arrow-right" />
          </button>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              placeholder="Your Email Address"
              required=""
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscribeTwo;
