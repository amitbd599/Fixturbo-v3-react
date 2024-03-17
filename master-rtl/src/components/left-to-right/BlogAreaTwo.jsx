import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const BlogAreaTwo = () => {
  return (
    <section className="blog-area space-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">Blog</span>
              <h2 className="sec-title">
                Strategic Solutions For A Thriving Future
              </h2>
            </div>
          </div>
        </div>
        <div className="row global-carousel blog-slider slider-shadow">
          <Swiper
            loop={true}
            navigation={{
              nextEl: ".testimonialOne-button-next",
              prevEl: ".testimonialOne-button-prev",
            }}
            spaceBetween={20}
            slidesPerGroup={1}
            speed={1000}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000 }}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div>
                <div className="blog-card style2">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_s2_1.png" alt="blog image" />
                    <div className="blog-date">
                      <a href="blog.html">
                        <span>17</span>Feb
                      </a>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fas fa-user" />
                        By admin
                      </a>
                      <a href="blog.html">
                        <i className="fas fa-comments" />
                        Comments (05)
                      </a>
                    </div>
                    <h3 className="blog-title">
                      <a href="blog-details.html">
                        Strategic Solutions for Sustainable Success
                      </a>
                    </h3>
                    <a className="link-btn style3" href="blog-details.html">
                      Read More <i className="fas fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="blog-card style2">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_s2_2.png" alt="blog image" />
                    <div className="blog-date">
                      <a href="blog.html">
                        <span>17</span>Feb
                      </a>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fas fa-user" />
                        By admin
                      </a>
                      <a href="blog.html">
                        <i className="fas fa-comments" />
                        Comments (05)
                      </a>
                    </div>
                    <h3 className="blog-title">
                      <a href="blog-details.html">
                        Empowering Businesses Fueling Growth
                      </a>
                    </h3>
                    <a className="link-btn style3" href="blog-details.html">
                      Read More <i className="fas fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="blog-card style2">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_s2_3.png" alt="blog image" />
                    <div className="blog-date">
                      <a href="blog.html">
                        <span>17</span>Feb
                      </a>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fas fa-user" />
                        By admin
                      </a>
                      <a href="blog.html">
                        <i className="fas fa-comments" />
                        Comments (05)
                      </a>
                    </div>
                    <h3 className="blog-title">
                      <a href="blog-details.html">
                        Strategic guidance for your business success
                      </a>
                    </h3>
                    <a className="link-btn style3" href="blog-details.html">
                      Read More <i className="fas fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="blog-card style2">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_s2_1.png" alt="blog image" />
                    <div className="blog-date">
                      <a href="blog.html">
                        <span>17</span>Feb
                      </a>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fas fa-user" />
                        By admin
                      </a>
                      <a href="blog.html">
                        <i className="fas fa-comments" />
                        Comments (05)
                      </a>
                    </div>
                    <h3 className="blog-title">
                      <a href="blog-details.html">
                        Strategic Solutions for Sustainable Success
                      </a>
                    </h3>
                    <a className="link-btn style3" href="blog-details.html">
                      Read More <i className="fas fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="blog-card style2">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_s2_2.png" alt="blog image" />
                    <div className="blog-date">
                      <a href="blog.html">
                        <span>17</span>Feb
                      </a>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fas fa-user" />
                        By admin
                      </a>
                      <a href="blog.html">
                        <i className="fas fa-comments" />
                        Comments (05)
                      </a>
                    </div>
                    <h3 className="blog-title">
                      <a href="blog-details.html">
                        Empowering Businesses Fueling Growth
                      </a>
                    </h3>
                    <a className="link-btn style3" href="blog-details.html">
                      Read More <i className="fas fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="blog-card style2">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_s2_3.png" alt="blog image" />
                    <div className="blog-date">
                      <a href="blog.html">
                        <span>17</span>Feb
                      </a>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fas fa-user" />
                        By admin
                      </a>
                      <a href="blog.html">
                        <i className="fas fa-comments" />
                        Comments (05)
                      </a>
                    </div>
                    <h3 className="blog-title">
                      <a href="blog-details.html">
                        Strategic guidance for your business success
                      </a>
                    </h3>
                    <a className="link-btn style3" href="blog-details.html">
                      Read More <i className="fas fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BlogAreaTwo;
