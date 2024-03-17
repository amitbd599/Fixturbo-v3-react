import React from "react";

const IndexPage = () => {
  return (
    <section className="demo">
      {/* Navigation */}
      <header className="navbar-area">
        <nav className="navbar navbar-expand-lg navbar-default navbar-fixed-top">
          <div className="container nav-container">
            <div className="logo">
              <a className="main-logo" href="index.html">
                <img src="assets/img/demo/logo.svg" alt="img" />
              </a>
            </div>
            <div className="nav-right-part nav-right-part-mobile ms-auto"></div>
            <div className="collapse navbar-collapse" id="al_main_menu">
              <ul className="navbar-nav menu-open text-center m-auto">
                <li>
                  <a className="page-scroll" href="#demo">
                    Demos
                  </a>
                </li>
                <li>
                  <a className="page-scroll" href="#inner">
                    Inner Pages
                  </a>
                </li>
                <li>
                  <a className="page-scroll" href="#header">
                    Header
                  </a>
                </li>
                <li>
                  <a className="page-scroll" href="#footer">
                    Footer
                  </a>
                </li>
                <li>
                  <a className="page-scroll" href="#featured">
                    Features
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav-right-part nav-right-part-desktop">
              <ul>
                <li>
                  <a
                    href="https://themeforest.net/user/wowtheme7"
                    className="btn btn-base"
                  >
                    Purchase Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* Banner Area Start*/}
      <section id="banner" className="banner-area">
        <div className="sidebar-links">
          <a
            className="btn btn-white"
            href="https://themeforest.net/user/wowtheme7"
          >
            <i className="fa fa-cart-arrow-down" />
            Add To Cart
          </a>
          <a
            className="btn btn-white"
            href="https://themeforest.net/user/wowtheme7"
          >
            <i className="fa fa-cog" />
            Demo Link
          </a>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 align-self-center">
              <div className="banner-inner text-center">
                <img
                  className="banner-logo"
                  src="assets/img/demo/logo-big.png"
                  alt="logo"
                />
                <h1 className="mt-4">
                  Fixturbo - Car Repair &amp; Auto Services React Js Template
                </h1>
                <p className="me-5 mb-5">
                  Fixturbo is Car Repair &amp; Auto Services React Js Template
                  built for an array of services with a number of auto service
                  and car repair institutions in mind.
                </p>
                <div className="btn-area">
                  <a className="btn btn-border page-scroll" href="#demo">
                    Try Demos
                  </a>
                  <a
                    className="btn btn-base me-0"
                    href="https://themeforest.net/user/wowtheme7"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="hero-thumb-wrap">
            <div className="hero-thumb1">
              <img src="assets/img/demo/01.png" alt="img" />
            </div>
            <div className="hero-thumb2 jump">
              <img src="assets/img/demo/06.png" alt="img" />
            </div>
            <div className="hero-thumb3 jump">
              <img src="assets/img/demo/03.png" alt="img" />
            </div>
            <div className="hero-thumb4 jump-reverse">
              <img src="assets/img/demo/04.png" alt="img" />
            </div>
            <div className="hero-thumb5 jump-reverse">
              <img src="assets/img/demo/05.png" alt="img" />
            </div>
            <div className="hero-thumb6 jump-reverse">
              <img src="assets/img/demo/02.png" alt="img" />
            </div>
          </div>
        </div>
      </section>
      {/* Banner Area End */}
      {/* counter start */}
      <div className="counter-area pd-top-115 pd-bottom-90">
        <div className="container">
          <div
            className="counter-area-inner wow fadeInUp animated"
            data-wow-duration="1.5s"
            data-wow-delay="0.2s"
          >
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="single-counter-inner text-center">
                  <div className="details">
                    <h2>
                      <span className="counter">20</span>+
                    </h2>
                    <p>Total Pages</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-counter-inner text-center">
                  <div className="details">
                    <h2>
                      <span className="counter">06</span>
                    </h2>
                    <p>Total Homes</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-counter-inner text-center">
                  <div className="details">
                    <h2>
                      <span className="counter">14</span>+
                    </h2>
                    <p>Inner Pages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* counter end */}
      {/* demo Section */}
      <section id="demo" className="demo-section pd-top-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div
                className="section-title wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <h5 className="subtitle">AWESOME DEMOS</h5>
                <h2 className="title">Great Home Pages</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <a href="demo/index.html">
                  <span className="thumb">
                    <img src="assets/img/demo/1.png" alt="img" />
                  </span>
                  Home V.1
                  <div className="item-title">Home Auto Repair</div>
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/index.html">
                    Live Demo
                  </a>
                  <a className="btn btn-base" href="demo/index-rtl.html">
                    RTL Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                <a href="demo/home-2.html">
                  <span className="thumb">
                    <img src="assets/img/demo/2.png" alt="img" />
                  </span>
                  Home V.2
                  <div className="item-title">Home Automotive</div>
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/home-2.html">
                    Live Demo
                  </a>
                  <a className="btn btn-base" href="demo/home-2-rtl.html">
                    RTL Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <a href="demo/home-3.html">
                  <span className="thumb">
                    <img src="assets/img/demo/3.png" alt="img" />
                  </span>
                  Home V.3
                  <div className="item-title">Home Car Fixers</div>
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/home-3.html">
                    Live Demo
                  </a>
                  <a className="btn btn-base" href="demo/home-3-rtl.html">
                    RTL Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <a href="demo/home-4.html">
                  <span className="thumb">
                    <img src="assets/img/demo/4.png" alt="img" />
                  </span>
                  Home V.4
                  <div className="item-title">Home Auto Revive</div>
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/home-4.html">
                    Live Demo
                  </a>
                  <a className="btn btn-base" href="demo/home-4-rtl.html">
                    RTL Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <a href="demo/home-5.html">
                  <span className="thumb">
                    <img src="assets/img/demo/5.png" alt="img" />
                  </span>
                  Home V.5
                  <div className="item-title">Home Car Care</div>
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/home-5.html">
                    Live Demo
                  </a>
                  <a className="btn btn-base" href="demo/home-5-rtl.html">
                    RTL Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <a href="demo/home-6.html">
                  <span className="thumb">
                    <img src="assets/img/demo/6.png" alt="img" />
                  </span>
                  Home V.6
                  <div className="item-title">Home Auto Parts</div>
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/home-6.html">
                    Live Demo
                  </a>
                  <a className="btn btn-base" href="demo/home-6-rtl.html">
                    RTL Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp coming-soon"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <a href="#">
                  <span className="thumb">
                    <img src="assets/img/demo/4.png" alt="img" />
                  </span>
                  <span className="cm-soon-title">Comming Soon</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* inner Section */}
      <section id="inner" className="inner-section pd-top-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div
                className="section-title wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <h2 className="title">Great Inner Pages</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <a href="demo/about.html">
                  <span className="thumb">
                    <img src="assets/img/demo/about.png" alt="img" />
                  </span>
                  About Page
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/about.html">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <a href="demo/service.html">
                  <span className="thumb">
                    <img src="assets/img/demo/service.png" alt="img" />
                  </span>
                  Service Page
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/service.html">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <a href="demo/service-details.html">
                  <span className="thumb">
                    <img src="assets/img/demo/service-details.png" alt="img" />
                  </span>
                  Service Details
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/service-details.html">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <a href="demo/project.html">
                  <span className="thumb">
                    <img src="assets/img/demo/project.png" alt="img" />
                  </span>
                  Project Page
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/project.html">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <a href="demo/project-details.html">
                  <span className="thumb">
                    <img src="assets/img/demo/project-details.png" alt="img" />
                  </span>
                  Project Details
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/project-details.html">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <a href="demo/team.html">
                  <span className="thumb">
                    <img src="assets/img/demo/team.png" alt="img" />
                  </span>
                  Team Page
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/team.html">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <a href="demo/team-details.html">
                  <span className="thumb">
                    <img src="assets/img/demo/team-details.png" alt="img" />
                  </span>
                  Team Details
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/team-details.html">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <a href="demo/blog.html">
                  <span className="thumb">
                    <img src="assets/img/demo/blog.png" alt="img" />
                  </span>
                  Blog Page
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/blog.html">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <a href="demo/blog-details.html">
                  <span className="thumb">
                    <img src="assets/img/demo/blog-details.png" alt="img" />
                  </span>
                  Blog Details
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/blog-details.html">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <a href="demo/shop.html">
                  <span className="thumb">
                    <img src="assets/img/demo/shop.png" alt="img" />
                  </span>
                  Shop Page
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/shop.html">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <a href="demo/shop-details.html">
                  <span className="thumb">
                    <img src="assets/img/demo/shop-details.png" alt="img" />
                  </span>
                  Shop Details
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/shop-details.html">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <a href="demo/contact.html">
                  <span className="thumb">
                    <img src="assets/img/demo/contact.png" alt="img" />
                  </span>
                  Contact Page
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/contact.html">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="inner-item style-large wow animated fadeInUp coming-soon"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <a href="#">
                  <span className="thumb">
                    <img src="assets/img/demo/4.png" alt="img" />
                  </span>
                  <span className="cm-soon-title">Comming Soon</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* demo Section */}
      <section id="header" className="widget-section pd-top-87">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div
                className="section-title wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <h2 className="title">Header Style</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="header-item mb-4">
                <span className="thumb">
                  <img
                    className="w-100"
                    src="assets/img/demo/header.png"
                    alt="img"
                  />
                </span>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="header-item mb-4">
                <span className="thumb">
                  <img
                    className="w-100"
                    src="assets/img/demo/header2.png"
                    alt="img"
                  />
                </span>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="header-item mb-4">
                <span className="thumb">
                  <img
                    className="w-100"
                    src="assets/img/demo/header3.png"
                    alt="img"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* demo Section */}
      <section id="footer" className="widget-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center pd-top-130">
              <div className="section-title">
                <h2 className="title">Footer Style</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="header-item mb-4">
                <span className="thumb">
                  <img
                    className="w-100"
                    src="assets/img/demo/footer.png"
                    alt="img"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* inner Section */}
      <section
        id="featured"
        className="featured-section pd-top-87 pd-bottom-110"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div
                className="section-title wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <h2 className="title">Core Features</h2>
                {/* <p>We have created a new product that will help designers, developers and com-panies create websites for their startups quickly and easily.</p> */}
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <img src="assets/img/demo/featured/3.png" alt="img" />
                Bootstrap 5+
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <img src="assets/img/demo/featured/1.png" alt="img" />
                Sass
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.6s"
              >
                <img src="assets/img/demo/featured/4.png" alt="img" />
                Font-Awesome
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <img src="assets/img/demo/featured/2.png" alt="img" />
                Swiper js
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <img src="assets/img/demo/featured/5.png" alt="img" />
                HTML5 JSX
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.6s"
              >
                <img src="assets/img/demo/featured/6.png" alt="img" />
                CSS3
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <img src="assets/img/demo/featured/8.png" alt="img" />
                W3C Validation
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.6s"
              >
                <img src="assets/img/demo/featured/9.png" alt="img" />
                Clean Code
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <img src="assets/img/demo/featured/12.png" alt="img" />
                100% Responsive
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.6s"
              >
                <img src="assets/img/demo/featured/11.png" alt="img" />
                Google Fonts
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <img src="assets/img/demo/featured/14.png" alt="img" />
                Well Documented
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <img src="assets/img/demo/featured/15.png" alt="img" />
                Counter Up
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer area start */}
      <footer
        className="footer-area pd-top-100"
        style={{ backgroundImage: 'url("assets/img/demo/01.png")' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="footer-widget widget text-center pd-bottom-100">
                <a className="logo" href="index.html">
                  <img src="assets/img/demo/logo-white.svg" alt="#" />
                </a>
                <h5 className="text-white mb-5 mt-5 lh-base">
                  It is a modern &amp; beautiful Car Repair &amp; Auto Services
                  React Template. It's Specially Car Repair &amp; Auto Services
                  Company website.
                </h5>
                <a
                  className="btn btn-white"
                  href="https://themeforest.net/user/wowtheme7"
                >
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center align-self-center">
                <p>Copy Right by wowtheme7</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer area end */}
    </section>
  );
};

export default IndexPage;
