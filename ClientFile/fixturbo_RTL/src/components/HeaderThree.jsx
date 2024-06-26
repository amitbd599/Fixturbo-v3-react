import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
                          <NavLink
                            to="/"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            الصفحة الرئيسية 01
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/home-2"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            الصفحة الرئيسية 02
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/home-3"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            الصفحة الرئيسية 03
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/home-4"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            الصفحة الرئيسية 04
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/home-5"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            الصفحة الرئيسية 05
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/home-6"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            الصفحة الرئيسية 06
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        عن
                      </NavLink>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="#">الصفحات</Link>
                      <ul className="sub-menu">
                        <li>
                          <NavLink
                            to="/team"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            فريق
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/team-details"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            تفاصيل الفريق
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/shop"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            محل
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/shop-details"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            تفاصيل المتجر
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/cart"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            عربة التسوق
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/checkout"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            الدفع
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/wishlist"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            قائمة الرغبات
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="#">المشاريع</Link>
                      <ul className="sub-menu">
                        <li>
                          <NavLink
                            to="/project"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            مشروع
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/project-details"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            تفاصيل المشروع
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="#">خدمات</Link>
                      <ul className="sub-menu">
                        <li>
                          <NavLink
                            to="/service"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            خدمة
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/service-details"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            تفاصيل الخدمة
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="#">مدونة</Link>
                      <ul className="sub-menu">
                        <li>
                          <NavLink
                            to="/blog"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            مدونة
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-details"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            تفاصيل المدونة
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        اتصال
                      </NavLink>
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
                <div className="header-button">
                  <div className="navbar-right-desc d-xxl-flex d-none">
                    <img src="assets/img/icon/chat.svg" alt="fixturbo_img" />
                    <div className="navbar-right-desc-details">
                      <h6 className="title">للحصول على ?</h6>
                      <a className="link" href="tel:+2590256215">
                        (307) 555-0133
                      </a>
                    </div>
                  </div>
                  <Link to="/about" className="btn style-border3">
                    للحصول على <i className="fas fa-arrow-left ms-2" />
                  </Link>
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
              <Link to="/">
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
                      <NavLink
                        to="/"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        الصفحة الرئيسية 01
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/home-2"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        الصفحة الرئيسية 02
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/home-3"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        الصفحة الرئيسية 03
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/home-4"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        الصفحة الرئيسية 04
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/home-5"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        الصفحة الرئيسية 05
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/home-6"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        الصفحة الرئيسية 06
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={(navData) => (navData.isActive ? "active" : "")}
                  >
                    عن
                  </NavLink>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link to="#">الصفحات</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <NavLink
                        to="/team"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        فريق
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/team-details"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        تفاصيل الفريق
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/shop"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        محل{" "}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/shop-details"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        تفاصيل المتجر
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/cart"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        عربة التسوق
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/checkout"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        الدفع
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/wishlist"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        قائمة الرغبات
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link to="#">المشاريع</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <NavLink
                        to="/project"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        مشروع
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/project-details"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        تفاصيل المشروع
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link to="#">خدمة</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <NavLink
                        to="/service"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        خدمة
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/service-details"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        تفاصيل الخدمة
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link to="#">محل</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <NavLink
                        to="/shop"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        محل
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/shop-details"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        تفاصيل المتجر
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/cart"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        عربة التسوق
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/checkout"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        الدفع
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/wishlist"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        قائمة الرغبات
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link to="#">مدونة</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <NavLink
                        to="/blog"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        مدونة
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog-details"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        تفاصيل المدونة
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={(navData) => (navData.isActive ? "active" : "")}
                  >
                    اتصال
                  </NavLink>
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
