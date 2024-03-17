import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const ClientAreaOne = () => {
  return (
    <div
      className="client-bg-area"
      style={{ backgroundImage: "url(assets/img/bg/client-bg1-1.png)" }}
    >
      <div className="client-area-1 text-center">
        <div className="container">
          <div className="row global-carousel">
            <Swiper
              spaceBetween={20}
              slidesPerGroup={2}
              speed={1000}
              autoplay={{ delay: 6000 }}
              className="mySwiper"
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                500: {
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
                  slidesPerView: 5,
                },
              }}
            >
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <a href="index.html">
                      <img src="assets/img/client/1-1.png" alt="img" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <a href="index.html">
                      <img src="assets/img/client/1-2.png" alt="img" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <a href="index.html">
                      <img src="assets/img/client/1-3.png" alt="img" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <a href="index.html">
                      <img src="assets/img/client/1-4.png" alt="img" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <a href="index.html">
                      <img src="assets/img/client/1-5.png" alt="img" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <a href="index.html">
                      <img src="assets/img/client/1-1.png" alt="img" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <a href="index.html">
                      <img src="assets/img/client/1-2.png" alt="img" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <a href="index.html">
                      <img src="assets/img/client/1-3.png" alt="img" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <a href="index.html">
                      <img src="assets/img/client/1-4.png" alt="img" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <a href="index.html">
                      <img src="assets/img/client/1-5.png" alt="img" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/*==============================
    Appointment Area  
    ==============================*/}
      <div className="appointment-area-1 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="appointment-form-wrap bg-theme">
                <div className="title-area">
                  <span className="sub-title text-white">ارسل طلب</span>
                  <h2 className="sec-title text-white">
                    متجرنا الشامل لتصليح السيارات
                  </h2>
                </div>
                <form
                  action="mail.php"
                  method="POST"
                  className="appointment-form ajax-contact"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control style-border2"
                          name="name"
                          id="name"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control style-border2"
                          name="email"
                          id="email"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control style-border2"
                          name="number"
                          id="number"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select
                          name="subject"
                          id="subject"
                          className="form-select style-border2"
                        >
                          <option value="" disabled="" selected="" hidden="">
                            اختر خيارا
                          </option>
                          <option value="Construction">إصلاح تلقائي</option>
                          <option value="Real Estate">إصلاح السيارات</option>
                          <option value="Industry">السيارات</option>
                        </select>
                        <i className="fas fa-angle-down text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      placeholder="Message here.."
                      id="contactForm"
                      className="form-control style-border2"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-btn col-12">
                    <button className="btn style3">
                      الموعد الآن
                      <i className="fas fa-arrow-left ms-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="appointment-thumb-1">
          <img src="assets/img/normal/appointment-thumb-1-1.png" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default ClientAreaOne;
