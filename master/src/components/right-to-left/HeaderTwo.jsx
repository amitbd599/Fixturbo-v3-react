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
                      <p>الأحد - الجمعة :</p>
                      <h6>9 صباحًا - 8 مساءً</h6>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="header-grid-info-details">
                      <p>6391 شارع إلجين، سيلينا، ديلاوير</p>
                      <h6>كنتاكي </h6>
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
                      <a href="#">بيت</a>
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
                              <a href="index-rtl.html">بيت 01 (RTL)</a>
                            </li>
                            <li>
                              <a href="home-2-rtl.html">بيت 02 (RTL)</a>
                            </li>
                            <li>
                              <a href="home-3-rtl.html">بيت 03 (RTL)</a>
                            </li>
                            <li>
                              <a href="home-4-rtl.html">بيت 04 (RTL)</a>
                            </li>
                            <li>
                              <a href="home-5-rtl.html">بيت 05 (RTL)</a>
                            </li>
                            <li>
                              <a href="home-6-rtl.html">بيت 06 (RTL)</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html">عن</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">الصفحات</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="team.html">صفحة الفريق</a>
                        </li>
                        <li>
                          <a href="team-details.html">تفاصيل الفريق</a>
                        </li>
                        <li>
                          <a href="shop.html">صفحة المتجر</a>
                        </li>
                        <li>
                          <a href="shop-details.html">تفاصيل المتجر</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">مشروع</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="project.html">مشروع</a>
                        </li>
                        <li>
                          <a href="project-details.html">تفاصيل المشروع</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">خدمة</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="service.html">خدمة</a>
                        </li>
                        <li>
                          <a href="service-details.html">تفاصيل الخدمة</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">مدونة</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog.html">مدونة</a>
                        </li>
                        <li>
                          <a href="blog-details.html">تفاصيل المدونة</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">اتصال</a>
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