import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
const BlogAreaOne = () => {
  return (
    <>
      <section className="blog-area-1 space-bottom position-relative">
        <div className="blog-shape-img1 shape-mockup d-lg-block d-none">
          <img
            className="about1-shape-img-1 spin"
            src="assets/img/normal/about_shape1-2.svg"
            alt="fixturbo_img"
          />
          <img
            className="about1-shape-img-2 spin2"
            src="assets/img/normal/about_shape1-1.svg"
            alt="fixturbo_img"
          />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="title-area text-center">
                <span className="sub-title">أحدث بلوق</span>
                <h2 className="sec-title">حلول استراتيجية لمستقبل مزدهر</h2>
              </div>
            </div>
          </div>
          <div className="row global-carousel blog-slider slider-shadow">
            <Swiper
              loop={true}
              spaceBetween={30}
              slidesPerView={2}
              slidesPerGroup={1}
              speed={1000}
              pagination={{ clickable: true }}
              autoplay={{ delay: 6000 }}
              className="mySwiper"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                992: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 2,
                },
                1400: {
                  slidesPerView: 2,
                },
              }}
            >
              <SwiperSlide>
                <div>
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_s1_3.png"
                        alt="fixturbo_img"
                      />
                      <div className="blog-date">
                        <Link to="/blog">
                          <span>17</span>رائع
                        </Link>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <Link to="/blog">
                          <i className="fas fa-user" />
                          ب. المشرف
                        </Link>
                        <Link to="/blog">
                          <i className="fas fa-comments"></i>تعليقات (05)
                        </Link>
                      </div>
                      <h3 className="blog-title">
                        <Link to="/blog-details">
                          حلول إصلاح شار التي يمكن الاعتماد عليها خدمات إصلاح
                          شار الاحترافية
                        </Link>
                      </h3>
                      <Link className="btn style-border3" to="/blog-details">
                        اقرأ أكثر <i className="fas fa-arrow-left ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_s1_1.png"
                        alt="fixturbo_img"
                      />
                      <div className="blog-date">
                        <Link to="/blog">
                          <span>17</span>رائع
                        </Link>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <Link to="/blog">
                          <i className="fas fa-user"></i>ب. المشرف
                        </Link>
                        <Link to="/blog">
                          <i className="fas fa-comments"></i>تعليقات (05)
                        </Link>
                      </div>
                      <h3 className="blog-title">
                        <Link to="/blog-details">
                          حلول الفرامل الأوتوماتيكية الدقيقة خدمات إصلاح شار
                          الاحترافية
                        </Link>
                      </h3>
                      <Link className="btn style-border3" to="/blog-details">
                        اقرأ أكثر<i className="fas fa-arrow-left ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_s1_3.png"
                        alt="fixturbo_img"
                      />
                      <div className="blog-date">
                        <Link to="/blog">
                          <span>17</span>رائع
                        </Link>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <Link to="/blog">
                          <i className="fas fa-user"></i>ب. المشرف
                        </Link>
                        <Link to="/blog">
                          <i className="fas fa-comments"></i>تعليقات (05)
                        </Link>
                      </div>
                      <h3 className="blog-title">
                        <Link to="/blog-details">
                          حلول إصلاح شار التي يمكن الاعتماد عليها خدمات إصلاح
                          شار الاحترافية
                        </Link>
                      </h3>
                      <Link className="btn style-border3" to="/blog-details">
                        اقرأ أكثر <i className="fas fa-arrow-left ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_s1_1.png"
                        alt="fixturbo_img"
                      />
                      <div className="blog-date">
                        <Link to="/blog">
                          <span>17</span>رائع
                        </Link>
                      </div>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <Link to="/blog">
                          <i className="fas fa-user" />
                          ب. المشرف
                        </Link>
                        <Link to="/blog">
                          <i className="fas fa-comments" />
                          تعليقات (05)
                        </Link>
                      </div>
                      <h3 className="blog-title">
                        <Link to="/blog-details">
                          حلول الفرامل الأوتوماتيكية الدقيقة خدمات إصلاح شار
                          الاحترافية
                        </Link>
                      </h3>
                      <Link className="btn style-border3" to="/blog-details">
                        اقرأ أكثر <i className="fas fa-arrow-left ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogAreaOne;
