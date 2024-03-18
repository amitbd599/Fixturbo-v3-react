import React from "react";
import { Link } from "react-router-dom";

const TeamAreaOne = () => {
  return (
    <div className="team-area-1 space-bottom">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-7 col-md-8">
            <div className="title-area">
              <span className="sub-title style2">أعضاء الفريق</span>
              <h2 className="sec-title">
                إصلاح سريع وفعال للسيارة، سيارة يُعتمد عليها
              </h2>
            </div>
          </div>
          <div className="col-md-auto">
            <div className="title-area">
              <Link className="btn style2" to="/team">
                عرض المزيد <i className="fas fa-arrow-left ms-2" />
              </Link>
            </div>
          </div>
        </div>
        <div className="row gy-30">
          <div className="col-lg-12">
            <div className="team-card">
              <div className="team-card_content">
                <h4 className="team-card_title">
                  <Link to="/team-details">بيسي كوبر</Link>
                </h4>
                <span className="team-card_desig">مهندس معماري يو اكس</span>
              </div>
              <div className="team-card_text">
                <p>
                  إصلاح السيارة هي خدمة مقدمة لإصلاح أي مشاكل أو أضرار مع رجلك
                </p>
              </div>
              <div className="team-card_img">
                <img src="assets/img/team/team-1-1.png" alt="fixturbo_img" />
              </div>
              <div className="team-social_wrap">
                <div className="social-btn style2">
                  <Link to="https://linkedin.com/">
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link to="https://www.instagram.com/">
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link to="https://facebook.com/">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link to="https://twitter.com/">
                    <i className="fab fa-twitter" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="team-card">
              <div className="team-card_content">
                <h4 className="team-card_title">
                  <Link to="/team-details">استير هوارد</Link>
                </h4>
                <span className="team-card_desig">رئيس المبيعات</span>
              </div>
              <div className="team-card_text">
                <p>
                  إصلاح السيارة هي خدمة مقدمة لإصلاح أي مشاكل أو أضرار مع رجلك
                </p>
              </div>
              <div className="team-card_img">
                <img src="assets/img/team/team-1-2.png" alt="fixturbo_img" />
              </div>
              <div className="team-social_wrap">
                <div className="social-btn style2">
                  <Link to="https://linkedin.com/">
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link to="https://www.instagram.com/">
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link to="https://facebook.com/">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link to="https://twitter.com/">
                    <i className="fab fa-twitter" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="team-card">
              <div className="team-card_content">
                <h4 className="team-card_title">
                  <Link to="/team-details">ديفون لين</Link>
                </h4>
                <span className="team-card_desig">منسق التسويق</span>
              </div>
              <div className="team-card_text">
                <p>
                  إصلاح السيارة هي خدمة مقدمة لإصلاح أي مشاكل أو أضرار مع رجلك
                </p>
              </div>
              <div className="team-card_img">
                <img src="assets/img/team/team-1-3.png" alt="fixturbo_img" />
              </div>
              <div className="team-social_wrap">
                <div className="social-btn style2">
                  <Link to="https://linkedin.com/">
                    <i className="fab fa-linkedin-in" />
                  </Link>
                  <Link to="https://www.instagram.com/">
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link to="https://facebook.com/">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link to="https://twitter.com/">
                    <i className="fab fa-twitter" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamAreaOne;
