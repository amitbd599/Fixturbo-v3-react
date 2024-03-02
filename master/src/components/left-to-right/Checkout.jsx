import React from "react";

const Checkout = () => {
  return (
    <div className="space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="shipping-area">
              <h3 className="page-title">Payment Details</h3>
              <form className="checkout-form">
                <div className="form-group">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    <img
                      src="assets/img/update-img/payment-method/03.png"
                      alt="#"
                    />
                  </label>
                </div>
                <div className="form-group mb-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    defaultChecked=""
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Credit Card
                  </label>
                </div>
                <ul className="footer-currency currency-area">
                  <li>
                    <a href="#">
                      <img
                        src="assets/img/update-img/payment-method/01.png"
                        alt="img"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="assets/img/update-img/payment-method/02.png"
                        alt="img"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="assets/img/update-img/payment-method/04.png"
                        alt="img"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="assets/img/update-img/payment-method/05.png"
                        alt="img"
                      />
                    </a>
                  </li>
                </ul>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <label>Full name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label>Card Number</label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="form-group">
                      <label>Expire Date</label>
                      <select className="form-control">
                        <option>April</option>
                        <option>March</option>
                        <option>February</option>
                        <option selected="selected">January</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="form-group">
                      <label>Year</label>
                      <select className="form-control">
                        <option>2023</option>
                        <option>2022</option>
                        <option>2020</option>
                        <option selected="selected">2021</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="form-group">
                      <label>CCV</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                    defaultChecked=""
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault3"
                  >
                    Cash on Delivery
                  </label>
                </div>
                <button type="submit" className="btn style2">
                  Checkout
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
