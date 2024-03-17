import React from "react";

const FooterAreaTwo = () => {
  return (
    <footer
      className="footer-wrapper footer-layout2"
      style={{ backgroundImage: "url(assets/img/bg/footer-bg2-1.png)" }}
    >
      <div className="container">
        <div className="footer-top-2">
          <div className="footer-logo">
            <a href="index.html">
              <img src="assets/img/logo-white.svg" alt="Fixturbo" />
            </a>
          </div>
          <h3 className="footer-top-title text-white">
            اشترك في النشرة الإخبارية لدينا للحصول على التحديثات
          </h3>
          <form className="newsletter-form">
            <button type="submit" className="btn">
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
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget widget-about">
                <h3 className="widget_title">اشترك في</h3>
                <p className="footer-text mb-30">
                  اشترك في النشرة الإخبارية لدينا للحصول على التحديثات
                </p>
                <div className="social-btn style3">
                  <a href="https://www.instagram.com/" tabIndex={-1}>
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="https://linkedin.com/" tabIndex={-1}>
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="https://twitter.com/" tabIndex={-1}>
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="https://facebook.com/" tabIndex={-1}>
                    <i className="fab fa-facebook-f" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">اشترك </h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <a href="about.html">اشترك</a>
                    </li>
                    <li>
                      <a href="team.html">للحصول</a>
                    </li>
                    <li>
                      <a href="contact.html">النشرة</a>
                    </li>
                    <li>
                      <a href="contact.html">النشرة النشرة</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">النشرة للحصول</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <a href="service.html">للحصول النشرة</a>
                    </li>
                    <li>
                      <a href="service.html">التحديثات للحصول</a>
                    </li>
                    <li>
                      <a href="service.html">الإخبارية لدينا للحصول</a>
                    </li>
                    <li>
                      <a href="service.html">الإخبارية</a>
                    </li>
                    <li>
                      <a href="service.html">الإخبارية لدينا</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title"> لدينا</h3>
                <div className="widget-contact2">
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="contact-grid-details">
                      <p>الإخبارية</p>
                      <h6>
                        66 Broklyant, New York
                        <p />
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="contact-grid-details">
                      <p>الإخبارية لدينا</p>
                      <h6>
                        <a href="tel:888123456765">012 345 678 9101</a>
                        <p />
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="contact-grid-details">
                      <p>لدينا للحصول</p>
                      <h6>
                        <a href="mailto:infoname@mail.com">abcd@gmail.com</a>
                        <p />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-3 justify-content-md-between justify-content-center">
            <div className="col-auto align-self-center">
              <p className="copyright-text text-center">
                © <a href="#">Fixturbo</a> 2024 | اشترك في النشرة الإخبارية
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links">
                <a href="contact.html">اشترك في النشرة</a>
                <a href="contact.html">النشرة الإخبارية</a>
                <a href="contact.html">اشترك في الإخبارية</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAreaTwo;
