import React from "react";

const CTAAreaOne = () => {
  return (
    <div className="cta-area-1">
      <div className="cta1-bg-thumb">
        <img src="assets/img/bg/cta-bg1-1.png" alt="img" />
      </div>
      <div className="container">
        <div className="cta-wrap1">
          <div className="row justify-content-md-between align-items-center">
            <div className="col-lg-6 col-md-8">
              <div className="title-area mb-md-0">
                <span className="sub-title style2 text-white">اتصل بنا</span>
                <h2 className="sec-title text-white mb-0">
                  حيث تزأر المحركات وترتفع المشاكل
                </h2>
              </div>
            </div>
            <div className="col-md-auto">
              <div className="title-area mb-0">
                <a className="btn" href="contact.html">
                  عرض المزيد <i className="fas fa-arrow-left ms-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAAreaOne;
