import React from "react";

const HeroOne = () => {
  return (
    <div
      className="hero-wrapper hero-1"
      id="hero"
      style={{ backgroundImage: "url(assets/img/hero/hero_bg_1_1.png)" }}
    >
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-xl-6">
            <div className="hero-style1">
              <span className="sub-title text-white">مسرع النمو</span>
              <h1 className="hero-title text-white">
                استعد{" "}
                <span>
                  <img src="assets/img/hero/hero_shape_1.png" alt="img" />
                  لعظيم
                </span>{" "}
                جودة الخدمة
              </h1>
              <p className="hero-text text-white">
                الدهليز موريس الاتحاد الأوروبي العاقل لاكوس موريس الاتحاد
                الأوروبي العاقل لاكوس
              </p>
              <div className="btn-group">
                <a href="about.html" className="btn">
                  تعرف على المزيد عنا
                </a>
                <a href="service.html" className="btn style-border">
                  خدماتنا
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="hero-thumb text-center">
              <img src="assets/img/hero/hero_thumb_1_1.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
