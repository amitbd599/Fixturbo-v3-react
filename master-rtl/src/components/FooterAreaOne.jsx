import React from "react";

const FooterAreaOne = () => {
  return (
    <footer
      className="footer-wrapper footer-layout1"
      style={{ backgroundImage: "url(assets/img/bg/footer-bg1-1.png)" }}
    >
      <div className="container">
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">شركة</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <a href="about.html">عن</a>
                    </li>
                    <li>
                      <a href="team.html">الفريق</a>
                    </li>
                    <li>
                      <a href="contact.html">فجوة</a>
                    </li>
                    <li>
                      <a href="contact.html">سياسة الخصوصية</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">خدمات</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <a href="service.html">ماجستير ميكانيكا</a>
                    </li>
                    <li>
                      <a href="service.html">إصلاح السيارات السريع</a>
                    </li>
                    <li>
                      <a href="service.html">إصلاح شار المحمول</a>
                    </li>
                    <li>
                      <a href="service.html">الإصلاح التلقائي الاحترافي</a>
                    </li>
                    <li>
                      <a href="service.html">الدقة لأعمال السيارات</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">اتصال</h3>
                <div className="widget-contact">
                  <p>
                    <a href="tel:888123456765">(+888) 123 456 765</a>
                  </p>
                  <p>
                    <a href="mailto:infoname@mail.com">infoname@mail.com</a>
                  </p>
                  <p>
                    شارع المدينة القديمة، الولايات المتحدة
                    <br /> 1212 نيويورك-3500
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget widget-newsletter">
                <h3 className="widget_title">ابقى على تواصل</h3>
                <p className="footer-text mb-50">
                  لوريم إيبسوم بسيط هو دومياموي هو نص لوريم إيبسوم بسيط
                </p>
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
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-3 justify-content-md-between justify-content-center">
            <div className="col-auto align-self-center">
              <p className="copyright-text text-center">
                © <a href="#">فيكستوربو</a> 2024 | كل الحقوق محفوظة
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links">
                <a href="contact.html">البنود و الظروف</a>
                <a href="contact.html">سياسة الخصوصية</a>
                <a href="contact.html">اتصل بنا</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAreaOne;
