import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
const ClientAreaFour = () => {
  return (
    <div className="client-area-3">
      <div className="container">
        <div className="row gx-80 gy-4">
          <div className="col-lg-5">
            <div className="client3-wrap">
              <div className="title-area mb-0">
                <span className="sub-title">اشتركاش تاشترك اشترك</span>
                <h2 className="sec-title">اشت ركاش تاشتر كاشترك</h2>
                <p className="sec-text">
                  شتركاشتا شتركاشتركا شتركاشتاشتر كاشتركاشتر كاشتاشتر كاشتركاشت
                  ركاشتاشتركا شتركاشتركا تاشتر كاشترك اشتركاشتا شتركا شترك اشترك
                  اشتاش تركاشترك اشتركاشتاش تركاشترك اشتركاشتاشتركاشترك اشتر
                  كاشتاش تركاشترك اشتر كاشت اشترك اشترك اشتركا شتاشتركاشترك
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="client-slider3">
              <div className="row global-carousel slider1">
                <Swiper
                  navigation={{
                    nextEl: ".team-slider2-next",
                    prevEl: ".team-slider2-prev",
                  }}
                  spaceBetween={20}
                  slidesPerGroup={1}
                  speed={1000}
                  pagination={{ clickable: true }}
                  loop
                  autoplay={{
                    stopOnLastSlide: false,
                  }}
                  className="mySwiper"
                  modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                  breakpoints={{
                    0: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    992: {
                      slidesPerView: 4,
                    },
                    1200: {
                      slidesPerView: 4,
                    },
                    1400: {
                      slidesPerView: 5,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <a href="index.html">
                          <img
                            src="assets/img/update-img/client/1-1.png"
                            alt="img"
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <a href="index.html">
                          <img
                            src="assets/img/update-img/client/1-2.png"
                            alt="img"
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <a href="index.html">
                          <img
                            src="assets/img/update-img/client/1-3.png"
                            alt="img"
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <a href="index.html">
                          <img
                            src="assets/img/update-img/client/1-4.png"
                            alt="img"
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <a href="index.html">
                          <img
                            src="assets/img/update-img/client/1-5.png"
                            alt="img"
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <a href="index.html">
                          <img
                            src="assets/img/update-img/client/1-6.png"
                            alt="img"
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <a href="index.html">
                          <img
                            src="assets/img/update-img/client/1-7.png"
                            alt="img"
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="row global-carousel slider2">
                <Swiper
                  navigation={{
                    nextEl: ".team-slider2-next",
                    prevEl: ".team-slider2-prev",
                  }}
                  spaceBetween={20}
                  slidesPerGroup={1}
                  speed={1000}
                  pagination={{ clickable: true }}
                  loop
                  autoplay={{
                    stopOnLastSlide: false,
                  }}
                  className="mySwiper"
                  modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                  breakpoints={{
                    0: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    992: {
                      slidesPerView: 4,
                    },
                    1200: {
                      slidesPerView: 5,
                    },
                    1400: {
                      slidesPerView: 6,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <a href="index.html">
                          <img
                            src="assets/img/update-img/client/1-8.png"
                            alt="img"
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <a href="index.html">
                          <img
                            src="assets/img/update-img/client/1-9.png"
                            alt="img"
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <a href="index.html">
                          <img
                            src="assets/img/update-img/client/1-10.png"
                            alt="img"
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <a href="index.html">
                          <img
                            src="assets/img/update-img/client/1-11.png"
                            alt="img"
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <a href="index.html">
                          <img
                            src="assets/img/update-img/client/1-12.png"
                            alt="img"
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <a href="index.html">
                          <img
                            src="assets/img/update-img/client/1-13.png"
                            alt="img"
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="client-logo">
                        <a href="index.html">
                          <img
                            src="assets/img/update-img/client/1-14.png"
                            alt="img"
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientAreaFour;
