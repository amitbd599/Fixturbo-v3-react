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
                  <a className="page-scroll pe-4" href="#demo">
                    العروض التوضيحية
                  </a>
                </li>
                <li>
                  <a className="page-scroll" href="#inner">
                    الصفحات الداخلية
                  </a>
                </li>
                <li>
                  <a className="page-scroll" href="#header">
                    رأس
                  </a>
                </li>
                <li>
                  <a className="page-scroll" href="#footer">
                    تذييل
                  </a>
                </li>
                <li>
                  <a className="page-scroll" href="#featured">
                    سمات
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
                    شراء الآن
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
            أضف إلى السلة
          </a>
          <a
            className="btn btn-white"
            href="https://themeforest.net/user/wowtheme7"
          >
            <i className="fa fa-cog" />
            الرابط التجريبي
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
                  Fixturbo - قالب Js لتصليح السيارات وخدمات السيارات
                </h1>
                <p className="me-5 mb-5">
                  Fixturbo هو قالب React Js لإصلاح السيارات وخدمات السيارات، وهو
                  مصمم لمجموعة من الخدمات مع وضع عدد من مؤسسات خدمة السيارات
                  وإصلاح السيارات في الاعتبار.
                </p>
                <div className="btn-area">
                  <a className="btn btn-border page-scroll" href="#demo">
                    جرب العروض التوضيحية
                  </a>
                  <a
                    className="btn btn-base me-0"
                    href="https://themeforest.net/user/wowtheme7"
                  >
                    اشتري الآن
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
                    <p>إجمالي الصفحات</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-counter-inner text-center">
                  <div className="details">
                    <h2>
                      <span className="counter">06</span>
                    </h2>
                    <p>مجموع المنازل</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-counter-inner text-center">
                  <div className="details">
                    <h2>
                      <span className="counter">14</span>+
                    </h2>
                    <p>الصفحات الداخلية</p>
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
                <h5 className="subtitle">عروض توضيحية رائعة</h5>
                <h2 className="title">الصفحات الرئيسية العظيمة</h2>
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
                  الصفحة الرئيسية V.1
                  <div className="item-title">إصلاح السيارات المنزلية</div>
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/index.html">
                    عرض حي
                  </a>
                  <a className="btn btn-base" href="demo/index-rtl.html">
                    عرض RTL
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
                  الصفحة الرئيسية V.2
                  <div className="item-title">الصفحة الرئيسية السيارات</div>
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/home-2.html">
                    عرض حي
                  </a>
                  <a className="btn btn-base" href="demo/home-2-rtl.html">
                    عرض RTL
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
                  الصفحة الرئيسية V.3
                  <div className="item-title">
                    الصفحة الرئيسية مصلحي السيارات
                  </div>
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/home-3.html">
                    عرض حي
                  </a>
                  <a className="btn btn-base" href="demo/home-3-rtl.html">
                    عرض RTL
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
                  الصفحة الرئيسية V.4
                  <div className="item-title">
                    الصفحة الرئيسية إحياء السيارات
                  </div>
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/home-4.html">
                    عرض حي
                  </a>
                  <a className="btn btn-base" href="demo/home-4-rtl.html">
                    عرض RTL
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
                  الصفحة الرئيسية V.5
                  <div className="item-title">العناية بالسيارات المنزلية</div>
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/home-5.html">
                    عرض حي
                  </a>
                  <a className="btn btn-base" href="demo/home-5-rtl.html">
                    عرض RTL
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
                  الصفحة الرئيسية V.6
                  <div className="item-title">
                    الصفحة الرئيسية لقطع غيار السيارات
                  </div>
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/home-6.html">
                    عرض حي
                  </a>
                  <a className="btn btn-base" href="demo/home-6-rtl.html">
                    عرض RTL
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
                  <span className="cm-soon-title">سآتي قريبا</span>
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
                <h2 className="title">الصفحات الداخلية العظيمة</h2>
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
                  حول الصفحة
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/about.html">
                    عرض حي
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
                  صفحة الخدمة
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/service.html">
                    عرض حي
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
                  تفاصيل الخدمة
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/service-details.html">
                    عرض حي
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
                  صفحة المشروع
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/project.html">
                    عرض حي
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
                  تفاصيل المشروع
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/project-details.html">
                    عرض حي
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
                  صفحة الفريق
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/team.html">
                    عرض حي
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
                  تفاصيل الفريق
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/team-details.html">
                    عرض حي
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
                  صفحة المدونة
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/blog.html">
                    عرض حي
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
                  تفاصيل المدونة
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/blog-details.html">
                    عرض حي
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
                  صفحة المتجر
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/shop.html">
                    عرض حي
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
                  تفاصيل المتجر
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/shop-details.html">
                    عرض حي
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
                  صفحة الاتصال
                </a>
                <div className="btn-group">
                  <a className="btn btn-base" href="demo/contact.html">
                    عرض حي
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
                  <span className="cm-soon-title">يأتي قريبا</span>
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
                <h2 className="title">نمط الرأس</h2>
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
                <h2 className="title">نمط التذييل</h2>
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
                <h2 className="title">الميزات الأساسية</h2>
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
                بوتستراب 5+
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <img src="assets/img/demo/featured/1.png" alt="img" />
                ساس
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.6s"
              >
                <img src="assets/img/demo/featured/4.png" alt="img" />
                الخط-رائع
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <img src="assets/img/demo/featured/2.png" alt="img" />
                سوايبر شبيبة
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <img src="assets/img/demo/featured/5.png" alt="img" />
                HTML5 جي إس إكس
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.6s"
              >
                <img src="assets/img/demo/featured/6.png" alt="img" />
                سي اس اس 3
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <img src="assets/img/demo/featured/8.png" alt="img" />
                التحقق من صحة W3C
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.6s"
              >
                <img src="assets/img/demo/featured/9.png" alt="img" />
                كود نظيف
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <img src="assets/img/demo/featured/12.png" alt="img" />
                استجابة 100%
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.6s"
              >
                <img src="assets/img/demo/featured/11.png" alt="img" />
                خطوط جوجل
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <img src="assets/img/demo/featured/14.png" alt="img" />
                وثق بشكل جيد
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="featured-item wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <img src="assets/img/demo/featured/15.png" alt="img" />
                مكافحة لأعلى
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
                  إنه قالب رد فعل حديث وجميل لإصلاح السيارات وخدمات السيارات.
                  إنه موقع ويب خاص بشركة إصلاح السيارات وخدمات السيارات.
                </h5>
                <a
                  className="btn btn-white"
                  href="https://themeforest.net/user/wowtheme7"
                >
                  شراء الآن
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center align-self-center">
                <p>حقوق الطبع والنشر بواسطة wowtheme7</p>
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
