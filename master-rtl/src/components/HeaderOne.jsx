import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeaderOne = () => {
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
                    <Link to="mailto:info@example.com">info@example.com</Link>
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
                      <Link to="https://www.facebook.com/">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link to="https://www.instagram.com/">
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link to="https://www.twitter.com/">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link to="https://www.linkedin.com/">
                        <i className="fab fa-linkedin" />
                      </Link>
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
            <Link to="/">
              <img src="assets/img/logo-white.svg" alt="logo" />
            </Link>
          </div>
          <div className="container">
            <div className="row align-items-center justify-content-lg-start justify-content-between">
              <div className="col-auto d-xl-none d-block">
                <div className="header-logo">
                  <Link to="/">
                    <img src="assets/img/logo-white.svg" alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-auto">
                <nav className="main-menu d-none d-lg-inline-block">
                  <ul>
                    <li className="menu-item-has-children">
                      <Link to="#">بيت</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/home-1">الصفحة الرئيسية 01</Link>
                        </li>
                        <li>
                          <Link to="/home-2">الصفحة الرئيسية 02</Link>
                        </li>
                        <li>
                          <Link to="/home-3">الصفحة الرئيسية 03</Link>
                        </li>
                        <li>
                          <Link to="/home-4">الصفحة الرئيسية 04</Link>
                        </li>
                        <li>
                          <Link to="/home-5">الصفحة الرئيسية 05</Link>
                        </li>
                        <li>
                          <Link to="/home-6">الصفحة الرئيسية 06</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/about">عن</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="#">الصفحات</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/team">فريق</Link>
                        </li>
                        <li>
                          <Link to="/team-details">تفاصيل الفريق</Link>
                        </li>
                        <li>
                          <Link to="/shop">محل</Link>
                        </li>
                        <li>
                          <Link to="/shop-details">تفاصيل المتجر</Link>
                        </li>
                        <li>
                          <Link to="/cart">عربة التسوق</Link>
                        </li>
                        <li>
                          <Link to="/checkout">الدفع</Link>
                        </li>
                        <li>
                          <Link to="/wishlist">قائمة الرغبات</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="#">المشاريع</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/project">مشروع</Link>
                        </li>
                        <li>
                          <Link to="/project-details">تفاصيل المشروع</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="#">خدمات</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/service">خدمة</Link>
                        </li>
                        <li>
                          <Link to="/service-details">تفاصيل الخدمة</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="#">مدونة</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/blog">مدونة</Link>
                        </li>
                        <li>
                          <Link to="/blog-details">تفاصيل المدونة</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/contact">اتصال</Link>
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
              <div className="col-auto ms-auto d-xl-block d-none">
                <div className="navbar-right-desc">
                  <img src="assets/img/icon/chat.svg" alt="img" />
                  <div className="navbar-right-desc-details">
                    <h6 className="title">تحتاج مساعدة؟</h6>
                    <Link className="link" to="tel:+2590256215">
                      (307) 555-0133
                    </Link>
                  </div>
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
              <Link to="/index-1">
                <img src="assets/img/logo.svg" alt="Fixturbo" />
              </Link>
              <button className="menu-toggle" onClick={mobileMenu}>
                <i className="fa fa-times" />
              </button>
            </div>
            <div className="mobile-menu">
              <ul id="offcanvas-navigation">
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link to="#">بيت</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <Link to="/home-1">الصفحة الرئيسية 01</Link>
                    </li>
                    <li>
                      <Link to="/home-2">الصفحة الرئيسية 02</Link>
                    </li>
                    <li>
                      <Link to="/home-3">الصفحة الرئيسية 03</Link>
                    </li>
                    <li>
                      <Link to="home-4">الصفحة الرئيسية 04</Link>
                    </li>
                    <li>
                      <Link to="/home-5">الصفحة الرئيسية 05</Link>
                    </li>
                    <li>
                      <Link to="/home-6">الصفحة الرئيسية 06</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/about">عن</Link>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link to="#">الصفحات</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <Link to="/team">فريق</Link>
                    </li>
                    <li>
                      <Link to="/team-details">تفاصيل الفريق</Link>
                    </li>
                    <li>
                      <Link to="/shop">محل </Link>
                    </li>
                    <li>
                      <Link to="/shop-details">تفاصيل المتجر</Link>
                    </li>
                    <li>
                      <Link to="/cart">عربة التسوق</Link>
                    </li>
                    <li>
                      <Link to="/checkout">الدفع</Link>
                    </li>
                    <li>
                      <Link to="/wishlist">قائمة الرغبات</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link to="#">المشاريع</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <Link to="/project">مشروع</Link>
                    </li>
                    <li>
                      <Link to="/project-details">تفاصيل المشروع</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link to="#">خدمة</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <Link to="/service">خدمة</Link>
                    </li>
                    <li>
                      <Link to="/service-details">تفاصيل الخدمة</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link to="#">محل</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <Link to="/shop">محل</Link>
                    </li>
                    <li>
                      <Link to="/shop-details">تفاصيل المتجر</Link>
                    </li>
                    <li>
                      <Link to="/cart">عربة التسوق</Link>
                    </li>
                    <li>
                      <Link to="/checkout">الدفع</Link>
                    </li>
                    <li>
                      <Link to="/wishlist">قائمة الرغبات</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link to="#">مدونة</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <Link to="/blog">مدونة</Link>
                    </li>
                    <li>
                      <Link to="/blog-details">تفاصيل المدونة</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/contact">اتصال</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
