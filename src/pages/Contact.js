import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="main-page-title">
        <div className="d-flex align-items-center">
          <div className="container text-center py-5">
            <h1 className="page-title">Contact Us</h1>
            <p className="page-description">
              Let us work together Or Say hello
            </p>
          </div>
        </div>
      </div>
      {/* MAIN CONTENT */}
      <section className="wrapper bg-silver d-flex align-items-center">
        <div className="container-fluid">
          <h2 className="stroke-text">Contact Us</h2>
          <div className="container">
            <div className="row my-5">
              <div className="col-12">
                <h3 className="section-heading">
                  CONTACT <span className="text-highlight">FORM</span>
                </h3>
                <div className="section-heading-line"></div>
              </div>
            </div>

            <form
              data-ajax="true"
              data-ajax-method="post"
              data-ajax-success="ContactFormSuccess"
              data-ajax-failure="ContactFormFail"
              data-ajax-loading="#resultTarget"
              id="ContactForm"
              className="contact_us_form"
              action="https://www.masteritinfotech.com/ContactUs/ContactUs"
              method="post"
            >
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="FullName" className="form-label req">
                          Full Name
                        </label>
                        <div className="input-has-icon">
                          <input
                            className="form-control"
                            data-val="true"
                            data-val-required="Name is required."
                            id="FullName"
                            maxlength="100"
                            name="FullName"
                            type="text"
                            value=""
                          />
                          <div className="input-icon-box">
                            <i className="fa fa-user"></i>
                          </div>
                          <span
                            className="field-validation-valid error-msg"
                            data-valmsg-for="FullName"
                            data-valmsg-replace="true"
                          ></span>
                          <input
                            type="hidden"
                            className="form-control"
                            id="captcha"
                            name="captcha"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="Email" className="form-label req">
                          Email
                        </label>
                        <div className="input-has-icon">
                          <input
                            className="form-control"
                            data-val="true"
                            data-val-email="Please enter valid Email address"
                            data-val-regex="Please enter valid Email address"
                            data-val-regex-pattern="^([a-zA-Z0-9_\-\.]&#x2B;)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]&#x2B;\.)&#x2B;))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                            data-val-required="Email is required."
                            id="Email"
                            maxlength="150"
                            name="Email"
                            type="text"
                            value=""
                          />
                          <div className="input-icon-box">
                            <i className="fa fa-envelope"></i>
                          </div>
                          <span
                            className="field-validation-valid error-msg"
                            data-valmsg-for="Email"
                            data-valmsg-replace="true"
                          ></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="PhoneNumber" className="form-label req">
                          Phone Number
                        </label>
                        <div className="input-has-icon">
                          <input
                            className="form-control"
                            data-val="true"
                            data-val-length="Phone Number must be between 8 and 16 characters"
                            data-val-length-max="16"
                            data-val-length-min="8"
                            data-val-regex="Please enter valid Phone Number"
                            data-val-regex-pattern="^([\d-&#x2B;\s]&#x2B;)$"
                            data-val-required="Phone Number is required."
                            id="PhoneNumber"
                            maxlength="16"
                            name="PhoneNumber"
                            type="text"
                            value=""
                          />
                          <div className="input-icon-box">
                            <i className="fa fa-mobile-alt"></i>
                          </div>
                          <span
                            className="field-validation-valid error-msg"
                            data-valmsg-for="PhoneNumber"
                            data-valmsg-replace="true"
                          ></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="WebUrl" className="form-label">
                          Web URL
                        </label>
                        <div className="input-has-icon">
                          <input
                            className="form-control"
                            id="WebUrl"
                            maxlength="150"
                            name="WebUrl"
                            type="text"
                            value=""
                          />
                          <div className="input-icon-box">
                            <i className="fa fa-globe-asia"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label for="YourComment" className="form-label">
                          Your Comment
                        </label>
                        <textarea
                          cols="30"
                          rows="5"
                          id="YourComment"
                          name="YourComment"
                          maxlength="1000"
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="captcha-div">
                        <div
                          className="g-recaptcha"
                          data-sitekey="6Ldi6EEUAAAAAMVG9vluVssyI04rEnr0fUDEHYfg"
                        ></div>
                      </div>
                    </div>
                    <div className="col-md-6 text-right">
                      {/* <div
                        // style={{ display: "none" }}
                        id="resultTarget"
                        className="spinner-border text-orange spiner-size"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div> */}

                      <button
                        id="btnsubmit"
                        className="btn btn-regular my-4"
                        type="submit"
                      >
                        Submit
                        <span className="btn-effect"></span>
                        <span className="btn-arrow">
                          <i className="fa fa-chevron-right"></i>
                        </span>
                      </button>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <span id="msg"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <input name="__RequestVerificationToken" type="hidden" />
            </form>
          </div>
        </div>
      </section>
      <section className="container-fluid bg-silver py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <p className="section-heading">
                <span className="text-highlight">AWARDS</span> AND RECOGNITION
              </p>
              <div className="section-heading-line"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="row flex-column flex-md-row justify-content-around text-center text-md-left">
                <div className="awward-icon-option">
                  <a
                    className="d-inline-block"
                    href="https://www.microsoft.com/en-US/solution-providers/partnerdetails/masterit-infotech_a3a9072b-5c57-4c43-a842-6a1fa6fa438e/77ae9074-4916-4917-b86a-d15c01fc053bdotnet"
                    rel="noopener"
                  >
                    <img
                      src="images/siler-ms-logo.png"
                      alt="Silver Microsoft Partner"
                    />
                  </a>
                </div>
                <div className="awward-icon-option">
                  <img src="images/iso-logo.png" alt="ISO Logo" />
                </div>
                <div className="awward-icon-option">
                  <a
                    className="d-inline-block"
                    href="https://udyamregistration.gov.in/verifyudyambarcode.aspx?verifyudrn=NBzf+Jv+43B1s2YWeH5AHQ=="
                    rel="noopener"
                  >
                    <img src="images/msme-logo.png" alt="msme logo" />
                  </a>
                </div>
                <div>
                  <a href="https://clutch.co/profile/masterit" rel="noopener">
                    <div className="awward-icon">
                      <img src="images/clutch-logo.png" alt="Clutch Logo" />
                    </div>
                    <div className="rating">
                      <p className="text-dark">Clutch</p>
                      <div className="mt-2 text-orange">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-alt"></i>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-250">
        <div className="container-fluid our-location-bg py-5 position-relative">
          <div className="container">
            <div className="row my-5">
              <div className="col-12">
                <h2 className="section-heading text-white">
                  OUR OFFICE LOCATION
                </h2>
                <p className="text-white text-center mt-4">Reach out us</p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row" data-aos="fade-up">
              <div className="col-xl-8 offset-xl-2">
                <div className="office-slider owl-carousel owl-theme">
                  <div className="item">
                    <div className="test-card">
                      <div className="orange-quotes">
                        <i className="fa fa-map-marker-alt fa-2x"></i>
                      </div>
                      <div className="flag-box">
                        <img src="images/ind-flag.png" alt="India Flag" />
                      </div>
                      <p className="font-weight-bold mb-3">Bangalore Office</p>
                      <p>
                        {" "}
                        E-City
                        <br />
                        Phase-1
                        <br />
                        Bangalore
                        <br />
                        Karnataka - 560100
                      </p>
                      <p className="email-box mt-3">
                        <span className="icon-box">
                          <i className="fa fa-envelope"></i>
                        </span>
                        suppport@masteritservices.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
