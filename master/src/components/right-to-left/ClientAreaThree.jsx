import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const ClientAreaThree = () => {
  return (
    <div
      className="client-bg-area-2"
      style={{ backgroundImage: "url(assets/img/bg/client-bg2-1.png)" }}
    >
      <div className="client-area-2 space text-center">
        <div className="container">
          <div className="row gy-40 justify-content-between">
            <div className="col-sm-6 col-lg-auto">
              <div className="counter-card style2">
                <div className="counter-card_icon">
                  <img src="assets/img/icon/counter-icon_2-1.svg" alt="icon" />
                </div>
                <div className="media-body">
                  <h2 className="counter-card_number">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter-number">
                            <CountUp delay={0} start={0} end={2540} />+
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <p className="counter-card_text">على التحديثات</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-auto">
              <div className="counter-card style2">
                <div className="counter-card_icon">
                  <img src="assets/img/icon/counter-icon_2-2.svg" alt="icon" />
                </div>
                <div className="media-body">
                  <h2 className="counter-card_number">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter-number">
                            <CountUp delay={0} start={0} end={100} />+
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <p className="counter-card_text">الإخبارية لدينا</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-auto">
              <div className="counter-card style2">
                <div className="counter-card_icon">
                  <img src="assets/img/icon/counter-icon_2-3.svg" alt="icon" />
                </div>
                <div className="media-body">
                  <h2 className="counter-card_number">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter-number">
                            <CountUp delay={0} start={0} end={10} />+
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <p className="counter-card_text">لدينا للحصول</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-auto">
              <div className="counter-card style2">
                <div className="counter-card_icon">
                  <img src="assets/img/icon/counter-icon_2-4.svg" alt="icon" />
                </div>
                <div className="media-body">
                  <h2 className="counter-card_number">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter-number">
                            <CountUp delay={0} start={0} end={8255} />+
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <p className="counter-card_text">شرة الإخبارية</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-area-2 overflow-hidden">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-7">
              <div className="testiomonial-wrap-2 bg-title">
                <div className="title-area">
                  <span className="sub-title">جيمس أندرسون</span>
                  <h2 className="sec-title text-white">مهندس برمجيات</h2>
                </div>
                <div className="quote-icon">
                  <img src="assets/img/icon/quote2-1.svg" alt="img" />
                </div>
                <div className="row global-carousel testi-slider-2">
                  <Swiper
                    loop={true}
                    navigation={{
                      nextEl: ".next",
                      prevEl: ".prev",
                    }}
                    spaceBetween={20}
                    slidesPerGroup={1}
                    speed={1000}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 6000 }}
                    modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                    className="mySwiper"
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 1,
                      },
                      992: {
                        slidesPerView: 1,
                      },
                      1200: {
                        slidesPerView: 1,
                      },
                      1400: {
                        slidesPerView: 1,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <div>
                        <div className="testi-card style2">
                          <div className="testi-card_content">
                            <div className="testi-card-profile">
                              <div className="testi-profile_thumb">
                                <img
                                  src="assets/img/testimonial/testimonial-2-1.png"
                                  alt="img"
                                />
                              </div>
                              <div className="testi-card-profile-details">
                                <h4 className="testi-profile-title">
                                  جيمس أندرسون
                                </h4>
                                <span className="testi-profile-desig">
                                  مهندس برمجيات
                                </span>
                              </div>
                            </div>
                            <p className="testi-card_text">
                              قد كان العمل مع هذه الشركة بمثابة تغيير في قواعد
                              اللعبة بالنسبة لعملي. لقد ساعدتنا خبرتهم ونهجهم
                              المبتكر على تحقيق إنجازات رائعة
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                        <div className="testi-card style2">
                          <div className="testi-card_content">
                            <div className="testi-card-profile">
                              <div className="testi-profile_thumb">
                                <img
                                  src="assets/img/testimonial/testimonial-2-1.png"
                                  alt="img"
                                />
                              </div>
                              <div className="testi-card-profile-details">
                                <h4 className="testi-profile-title">
                                  جيمس أندرسون
                                </h4>
                                <span className="testi-profile-desig">
                                  مهندس برمجيات
                                </span>
                              </div>
                            </div>
                            <p className="testi-card_text">
                              قد كان العمل مع هذه الشركة بمثابة تغيير في قواعد
                              اللعبة بالنسبة لعملي. لقد ساعدتنا خبرتهم ونهجهم
                              المبتكر على تحقيق إنجازات رائعة
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                        <div className="testi-card style2">
                          <div className="testi-card_content">
                            <div className="testi-card-profile">
                              <div className="testi-profile_thumb">
                                <img
                                  src="assets/img/testimonial/testimonial-2-1.png"
                                  alt="img"
                                />
                              </div>
                              <div className="testi-card-profile-details">
                                <h4 className="testi-profile-title">
                                  جيمس أندرسون
                                </h4>
                                <span className="testi-profile-desig">
                                  مهندس برمجيات
                                </span>
                              </div>
                            </div>
                            <p className="testi-card_text">
                              قد كان العمل مع هذه الشركة بمثابة تغيير في قواعد
                              اللعبة بالنسبة لعملي. لقد ساعدتنا خبرتهم ونهجهم
                              المبتكر على تحقيق إنجازات رائعة
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                        <div className="testi-card style2">
                          <div className="testi-card_content">
                            <div className="testi-card-profile">
                              <div className="testi-profile_thumb">
                                <img
                                  src="assets/img/testimonial/testimonial-2-1.png"
                                  alt="img"
                                />
                              </div>
                              <div className="testi-card-profile-details">
                                <h4 className="testi-profile-title">
                                  جيمس أندرسون
                                </h4>
                                <span className="testi-profile-desig">
                                  مهندس برمجيات
                                </span>
                              </div>
                            </div>
                            <p className="testi-card_text">
                              قد كان العمل مع هذه الشركة بمثابة تغيير في قواعد
                              اللعبة بالنسبة لعملي. لقد ساعدتنا خبرتهم ونهجهم
                              المبتكر على تحقيق إنجازات رائعة
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="icon-box">
                  <button
                    data-slick-prev=".testi-slider-2"
                    className="slick-arrow style3 default next"
                  >
                    <i className="fas fa-arrow-right" />
                  </button>
                  <button
                    data-slick-next=".testi-slider-2"
                    className="slick-arrow style3 default prev"
                  >
                    <i className="fas fa-arrow-left" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-thumb-2">
          <img src="assets/img/testimonial/2.png" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default ClientAreaThree;
