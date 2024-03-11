import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const FaqAreaThree = () => {
  return (
    <section className="faq-area-2 space-bottom">
      <div className="container">
        <div className="row gx-60 flex-row-reverse">
          <div className="col-xl-6">
            <div className="faq-thumb2 mb-xl-0 mb-50">
              <div className="about-counter-grid jump">
                <img src="assets/img/icon/faq2-counter-icon-1.svg" alt="img" />
                <div className="media-right">
                  <h3 className="about-counter">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter-number">
                            +<CountUp delay={0} start={0} end={200} />
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h3>
                  <h4 className="about-counter-text"> في النشرة الإخبارية</h4>
                </div>
              </div>
              <img src="assets/img/normal/faq-thumb-3-1.png" alt="img" />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="title-area">
              <span className="sub-title"> في النشرة</span>
              <h2 className="sec-title">
                {" "}
                في النشرة الإخبارية <br /> النشرة الإخبارية
              </h2>
            </div>
            <div className="accordion-area accordion" id="faqAccordion">
              <div className="accordion-card style2 active">
                <div className="accordion-header" id="collapse-item-1">
                  <button
                    className="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="true"
                    aria-controls="collapse-1"
                  >
                    {" "}
                    في اشترك في اشترك في النشرة الإخبا
                  </button>
                </div>
                <div
                  id="collapse-1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="collapse-item-1"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      في اشترك في النشرة الإخبافي اشترك في النشرة الإخبافي اشترك
                      في النشرة الإخبافي اشترك في النشرة الإخبافي اشترك في
                      النشرة الإخبافي اشترك في النشرة الإخبا
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card style2">
                <div className="accordion-header" id="collapse-item-2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="false"
                    aria-controls="collapse-2"
                  >
                    {" "}
                    في اشترك في النشرة الإخبا في اشترك في النشرة الإخبا
                  </button>
                </div>
                <div
                  id="collapse-2"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-2"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      في اشترك في النشرة الإخبافي اشترك في النشرة الإخبافي اشترك
                      في النشرة الإخبافي اشترك في النشرة الإخبافي اشترك في
                      النشرة الإخبافي اشترك في النشرة الإخبا
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card style2">
                <div className="accordion-header" id="collapse-item-3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                  >
                    {" "}
                    في اشترك في النشرة الإخبافي اشترك فيا
                  </button>
                </div>
                <div
                  id="collapse-3"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-3"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      في اشترك في النشرة الإخبافي اشترك في النشرة الإخبافي اشترك
                      في النشرة الإخبافي اشترك في النشرة الإخبافي اشترك في
                      النشرة الإخبافي اشترك في النشرة الإخبا
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAreaThree;
