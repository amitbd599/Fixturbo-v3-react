import React from "react";

const FooterAreaFour = () => {
  return (
    <footer
      className="footer-wrapper footer-layout4"
      style={{ backgroundImage: "url(assets/img/bg/footer-bg2-1.png)" }}
    >
      <div className="container">
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget widget-about">
                <h3 className="widget_title">About Us</h3>
                <p className="footer-text mb-30">
                  It is a long established fact that a reader will be distracted
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
                <h3 className="widget_title">Company</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="team.html">Team</a>
                    </li>
                    <li>
                      <a href="contact.html">Faq</a>
                    </li>
                    <li>
                      <a href="contact.html">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Our Services</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <a href="service.html">Mechanic Masters</a>
                    </li>
                    <li>
                      <a href="service.html">Speedy Auto Repair</a>
                    </li>
                    <li>
                      <a href="service.html">Mobile Car Repair</a>
                    </li>
                    <li>
                      <a href="service.html">Pro Auto Fix</a>
                    </li>
                    <li>
                      <a href="service.html">Precision Auto Works</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Contact</h3>
                <div className="widget-contact2">
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="contact-grid-details">
                      <p>Address</p>
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
                      <p>Phone Number</p>
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
                      <p>Email Address</p>
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
                © <a href="#">Fixturbo</a> 2024 | All Rights Reserved
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links">
                <a href="contact.html">Tarms &amp; Condition</a>
                <a href="contact.html">Privacy Policy</a>
                <a href="contact.html">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAreaFour;
