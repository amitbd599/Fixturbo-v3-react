import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeaderThree = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    var offCanvasNav = document.getElementById("offcanvas-navigation");
    var offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='mean-expand-class'>+</span>"
      );
    }

    var menuExpand = offCanvasNav.querySelectorAll(".mean-expand-class");
    var numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenu = () => {
    setActive(!active);
  };
  return (
    <header className="nav-header header-layout1">
      <div className="header-top">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
            <div className="col-auto d-none d-lg-block">
              <div className="header-links">
                <ul>
                  <li>
                    <i className="fas fa-envelope" />
                    <a href="mailto:info@example.com">info@example.com</a>
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt" />
                    6391 ش الجين، سيلينا، 10299
                  </li>
                  <li>
                    <i className="fas fa-clock" />
                    الأحد - الجمعة
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-auto">
              <div className="header-links ps-0">
                <ul>
                  <li>
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
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`sticky-wrapper ${scroll && "sticky"}`}>
        {/* Main Menu Area */}
        <div className="menu-area">
          <div className="header-navbar-logo">
            <a href="index.html">
              <img src="assets/img/logo-white.svg" alt="logo" />
            </a>
          </div>
          <div className="container">
            <div className="row align-items-center justify-content-lg-start justify-content-between">
              <div className="col-auto d-xl-none d-block">
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
                      <Link href="#">بيت</Link>
                      <ul className="sub-menu">
                        <li className="menu-item-has-children">
                          <Link href="#">Multipage</Link>
                          <ul className="sub-menu">
                            <li>
                              <a href="/home-1">Home 01</a>
                            </li>
                            <li>
                              <a href="/home-2">Home 02</a>
                            </li>
                            <li>
                              <a href="/home-3">Home 03</a>
                            </li>
                            <li>
                              <a href="/home-4">Home 04</a>
                            </li>
                            <li>
                              <a href="/home-5">Home 05</a>
                            </li>
                            <li>
                              <a href="/home-6">Home 06</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link href="#">RTL</Link>
                          <ul className="sub-menu">
                            <li>
                              <a href="/home-1-rtl">بيت 01 (RTL)</a>
                            </li>
                            <li>
                              <a href="/home-2-rtl">بيت 02 (RTL)</a>
                            </li>
                            <li>
                              <a href="/home-3-rtl">بيت 03 (RTL)</a>
                            </li>
                            <li>
                              <a href="/home-4-rtl">بيت 04 (RTL)</a>
                            </li>
                            <li>
                              <a href="/home-5-rtl">بيت 05 (RTL)</a>
                            </li>
                            <li>
                              <a href="/home-6-rtl">بيت 06 (RTL)</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/about">عن</a>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="#">الصفحات</Link>
                      <ul className="sub-menu">
                        <li>
                          <a href="/team">صفحة الفريق</a>
                        </li>
                        <li>
                          <a href="/team-details">تفاصيل الفريق</a>
                        </li>
                        <li>
                          <a href="/shop">صفحة المتجر</a>
                        </li>
                        <li>
                          <a href="/shop-details">تفاصيل المتجر</a>
                        </li>
                        <li>
                          <a href="/cart">تفاصيل</a>
                        </li>
                        <li>
                          <a href="/checkout">تفاصصفحة</a>
                        </li>
                        <li>
                          <a href="/wishlist">تفاصحة</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="#">مشروع</Link>
                      <ul className="sub-menu">
                        <li>
                          <a href="/project">مشروع</a>
                        </li>
                        <li>
                          <a href="/project-details">تفاصيل المشروع</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="#">خدمة</Link>
                      <ul className="sub-menu">
                        <li>
                          <a href="/service">خدمة</a>
                        </li>
                        <li>
                          <a href="/service-details">تفاصيل الخدمة</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="#">مدونة</Link>
                      <ul className="sub-menu">
                        <li>
                          <a href="/blog">مدونة</a>
                        </li>
                        <li>
                          <a href="/blog-details">تفاصيل المدونة</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/contact">اتصال</a>
                    </li>
                  </ul>
                </nav>
                <div className="navbar-right d-inline-flex d-lg-none">
                  <button
                    type="button"
                    className="menu-toggle icon-btn"
                    onClick={mobileMenu}
                  >
                    <i className="fas fa-bars" />
                  </button>
                </div>
              </div>
              <div className="col-auto me-auto d-xl-block d-none">
                <div className="header-button">
                  <div className="navbar-right-desc d-xxl-flex d-none">
                    <img src="assets/img/icon/chat.svg" alt="img" />
                    <div className="navbar-right-desc-details">
                      <h6 className="title">للحصول على ?</h6>
                      <a className="link" href="tel:+2590256215">
                        (307) 555-0133
                      </a>
                    </div>
                  </div>
                  <a href="about.html" className="btn style-border3">
                    للحصول على <i className="fas fa-arrow-left ms-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="logo-bg" />
        </div>
        {/* Mobile Menu */}
        <div className={`mobile-menu-wrapper rtl  ${active && "body-visible"}`}>
          <div className="mobile-menu-area">
            <div className="mobile-logo">
              <Link href="/index-1">
                <img src="assets/img/logo.svg" alt="Fixturbo" />
              </Link>
              <button className="menu-toggle" onClick={mobileMenu}>
                <i className="fa fa-times" />
              </button>
            </div>
            <div className="mobile-menu">
              <ul id="offcanvas-navigation">
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link href="#">Home</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <a href="/home-1">Home 01</a>
                    </li>
                    <li>
                      <a href="/home-2">Home 02</a>
                    </li>
                    <li>
                      <a href="/home-3">Home 03</a>
                    </li>
                    <li>
                      <a href="home-4">Home 04</a>
                    </li>
                    <li>
                      <a href="/home-5">Home 05</a>
                    </li>
                    <li>
                      <a href="/home-6">Home 06</a>
                    </li>
                    <li>
                      <a href="/index-rtl">Home 01 (RTL)</a>
                    </li>
                    <li>
                      <a href="/home-2-rtl">Home 02 (RTL)</a>
                    </li>
                    <li>
                      <a href="/home-3-rtl">Home 03 (RTL)</a>
                    </li>
                    <li>
                      <a href="/home-4-rtl">Home 04 (RTL)</a>
                    </li>
                    <li>
                      <a href="/home-5-rtl">Home 05 (RTL)</a>
                    </li>
                    <li>
                      <a href="/home-6-rtl">Home 06 (RTL)</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link href="#">Pages</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <a href="/team">Team Page</a>
                    </li>
                    <li>
                      <a href="/team-details">Team Details</a>
                    </li>
                    <li>
                      <a href="/shop">Shop Page</a>
                    </li>
                    <li>
                      <a href="/shop-details">Shop Details</a>
                    </li>
                    <li>
                      <a href="/cart">Cart</a>
                    </li>
                    <li>
                      <a href="/checkout">Checkout</a>
                    </li>
                    <li>
                      <a href="/wishlist">Wishlist</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link href="#">Project</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <a href="/project">Projects</a>
                    </li>
                    <li>
                      <a href="/project-details">Project Details</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link href="#">Service</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <a href="/service">Service</a>
                    </li>
                    <li>
                      <a href="/service-details">Service Details</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link href="#">Shop</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <a href="/shop">Shop</a>
                    </li>
                    <li>
                      <a href="/shop-details">Shop Details</a>
                    </li>
                    <li>
                      <a href="/cart">Cart</a>
                    </li>
                    <li>
                      <a href="/checkout">Checkout</a>
                    </li>
                    <li>
                      <a href="/wishlist">Wishlist</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link href="#">Blog</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <a href="/blog">Blog</a>
                    </li>
                    <li>
                      <a href="/blog-details">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderThree;
