import React from "react";

const ProcessAreaTwo = () => {
  return (
    <div
      className="process-area-2 space-top"
      style={{ backgroundImage: "url(assets/img/bg/process2-bg.png)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-7">
            <div className="title-area text-center">
              <h3 className="sub-title"> work process</h3>
              <h2 className="sec-title text-white">
                Miles Of Smiles, One Repair A Time{" "}
                <img
                  className="title-bg-shape shape-center"
                  src="assets/img/bg/title-bg-shape2.png"
                  alt="img"
                />
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 gx-90 justify-content-center">
          <div className="col-lg-4 col-md-6 process-card-wrap2">
            <div className="process-card style2">
              <div className="process-card-number">STEP 1</div>
              <h4 className="process-card-title">Quality Support</h4>
              <p className="process-card-text">
                Ut elementum et mollis eu sapien neque tempus. Tristique nisl
                nibh tincidunt proin sit dowm dkeleu
              </p>
              <a href="service-details.html" className="link-btn style2">
                Read More <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 process-card-wrap2">
            <div className="process-card style2">
              <div className="process-card-number">STEP 2</div>
              <h4 className="process-card-title">All Car Makes</h4>
              <p className="process-card-text">
                Ut elementum et mollis eu sapien neque tempus. Tristique nisl
                nibh tincidunt proin sit dowm dkeleu
              </p>
              <a href="service-details.html" className="link-btn style2">
                Read More <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 process-card-wrap2">
            <div className="process-card style2">
              <div className="process-card-number">STEP 3</div>
              <h4 className="process-card-title">Variety Services</h4>
              <p className="process-card-text">
                Ut elementum et mollis eu sapien neque tempus. Tristique nisl
                nibh tincidunt proin sit dowm dkeleu
              </p>
              <a href="service-details.html" className="link-btn style2">
                Read More <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessAreaTwo;
