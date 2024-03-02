import React from "react";

const HeaderTwo = () => {
  return (
    <header className="nav-header header-layout2">
      <div className="header-top">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
            <div className="col-auto d-none d-lg-block">
              <div className="header-logo">
                <a href="index.html">
                  <img src="assets/img/logo.svg" alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-auto">
              <div className="header-grid-info">
                <ul>
                  <li>
                    <div className="icon">
                      <i className="fas fa-clock" />
                    </div>
                    <div className="header-grid-info-details">
                      <p>Sunday - Friday:</p>
                      <h6>9 am - 8 pm</h6>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="header-grid-info-details">
                      <p>6391 Elgin St. Celina, Delaware</p>
                      <h6>Kentucky </h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky-wrapper">
        {/* Main Menu Area */}
        <div className="menu-area">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto header-navbar-logo">
                <div className="header-logo">
                  <a href="index.html">
                    <img src="assets/img/logo-white.svg" alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-auto">
                <nav className="main-menu d-none d-lg-inline-block">
                  <ul>
                    <li className="menu-item-has-children">
                      <a href="#">Home</a>
                      <ul className="sub-menu">
                        <li className="menu-item-has-children">
                          <a href="#">Multipage</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="index.html">Home 01</a>
                            </li>
                            <li>
                              <a href="home-2.html">Home 02</a>
                            </li>
                            <li>
                              <a href="home-3.html">Home 03</a>
                            </li>
                            <li>
                              <a href="home-4.html">Home 04</a>
                            </li>
                            <li>
                              <a href="home-5.html">Home 05</a>
                            </li>
                            <li>
                              <a href="home-6.html">Home 06</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">RTL</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="index-rtl.html">Home 01 (RTL)</a>
                            </li>
                            <li>
                              <a href="home-2-rtl.html">Home 02 (RTL)</a>
                            </li>
                            <li>
                              <a href="home-3-rtl.html">Home 03 (RTL)</a>
                            </li>
                            <li>
                              <a href="home-4-rtl.html">Home 04 (RTL)</a>
                            </li>
                            <li>
                              <a href="home-5-rtl.html">Home 05 (RTL)</a>
                            </li>
                            <li>
                              <a href="home-6-rtl.html">Home 06 (RTL)</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Services</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="service.html">Service</a>
                        </li>
                        <li>
                          <a href="service-details.html">Service Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Projects</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="project.html">Projects</a>
                        </li>
                        <li>
                          <a href="project-details.html">Projects Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Blog</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Pages</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="team.html">Team Page</a>
                        </li>
                        <li>
                          <a href="team-details.html">Team Details</a>
                        </li>
                        <li>
                          <a href="shop.html">Shop Page</a>
                        </li>
                        <li>
                          <a href="shop-details.html">Shop Details</a>
                        </li>
                        <li>
                          <a href="cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="wishlist.html">Wishlist</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
                <div className="navbar-right d-inline-flex d-lg-none">
                  <button type="button" className="menu-toggle icon-btn">
                    <i className="fas fa-bars" />
                  </button>
                </div>
              </div>
              <div className="col-auto d-xl-block d-none">
                <div className="social-links">
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://www.instagram.com/">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="https://www.twitter.com/">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="https://www.linkedin.com/">
                    <i className="fab fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTwo;
