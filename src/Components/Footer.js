/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <ul className="nav nav-tabs text-white mb-3">
                <li className="nav-item country-btn">
                  <button
                    aria-label="country-button"
                    id="ind_add_btn"
                    data-countryaddressclass="ind-address"
                    className="nav-link active country-address-tab"
                  >
                    <img
                      src="images/ind-flag.png"
                      alt="India Flag"
                      className="f-flag"
                    />{" "}
                    INDIA
                  </button>
                </li>
              </ul>
              <div className="ind-address country-address-className">
                <div className="row">
                  <div className="col-sm-4">
                    <ul className="list-group-item list-group-flush bg-transparent p-0 address-btn">
                      <li
                        id="srt_add_btn"
                        data-stateaddressclass="surat-add"
                        className="list-group-item state-address-tab active"
                      >
                        Bangalore
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-8 footer-link">
                    <div className="surat-add state-address-className">
                      <div className="address h-130 d-flex mb-1">
                        <span className="mr-3">
                          <i className="fa fa-home text-white"></i>
                        </span>
                        <p>
                          E-city Phase-1, <br /> Banagalore,
                          <br /> Karnataka, <br />
                          560100
                        </p>
                      </div>
                      <div className="address d-flex mb-1 align-items-center">
                        <span className="mr-3">
                          <i className="fa fa-envelope text-white"></i>
                        </span>
                        <p>support@masteritservices.com</p>
                      </div>
                      <div className="address d-flex mb-1 align-items-center">
                        <span className="mr-3">
                          <i className="fa fa-phone-alt text-white"></i>
                        </span>
                        <p>+91-903-541-6166</p>
                      </div>
                      <div className="address d-flex mb-1 align-items-center">
                        <span className="mr-3">
                          <i className="fa fa-phone-alt text-white"></i>
                        </span>
                        <p>+91-966-689-2449</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 text-white mb-3 mb-md-0">
              <div className="mb-3">
                <h2>Our Services</h2>
              </div>
              <div className="pt-0 pt-md-3 footer-link">
                <p>
                  <a href="azure-development.html">
                    Microsoft Azure Development
                  </a>
                </p>
                <p>
                  <a href="sharepoint-development.html">
                    SharePoint Development
                  </a>
                </p>
                <p>
                  <a href="web-development.html">Web Development</a>
                </p>
                <p>
                  <a href="microsoft-power-platform-development.html">
                    Power Platform Development
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 text-white">
              <div className="mb-3">
                <h2>Useful Link</h2>
              </div>
              <div className="d-flex row mt-3 pt-0 pt-md-3 footer-link">
                <div className="col">
                  <p>
                    <a href="index.html">Home</a>
                  </p>
                  <p>
                    <a href="aboutus.html">About Us</a>
                  </p>
                  <p>
                    <a href="case-study.html">Case Study</a>
                  </p>
                  <p>
                    <a href="portfolio.html">Portfolio</a>
                  </p>
                </div>
                <div className="col">
                  <p>
                    <a href="quality-policy.html">Quality Policy</a>
                  </p>
                  <p>
                    <a href="career.html">Career</a>
                  </p>
                  <p>
                    <a href="" target="_blank" rel="noopener">
                      Blog
                    </a>
                  </p>
                  <p>
                    <a href="contact-us.html">Contact Us</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-3">
          <div className="d-flex flex-nowrap justify-content-center">
            <div className="header-icon-box">
              <a
                href="skype:bde02_trimantra?chat"
                rel="noopener"
                aria-label="Skype"
              >
                <i className="fab fa-skype"></i>
              </a>
            </div>
            <div className="header-icon-box">
              <a href="" target="_blank" rel="noopener" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
            <div className="header-icon-box">
              <a href="" target="_blank" rel="noopener" aria-label="instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="header-icon-box">
              <a href="" target="_blank" rel="noopener" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <div className="header-icon-box">
              <a href="" target="_blank" rel="noopener" aria-label="Linkedin">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="container text-center text-white">
          <p>
            Copyright &copy; 2023{" "}
            <span className="text-orange">
              MasterIT Software Solutions & Services Pvt Ltd.
            </span>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
      <a href="#top" className="go-to-top d-none" aria-label="Go to Top">
        <i className="fa fa-chevron-circle-up"></i>
      </a>
    </footer>
  );
};

export default Footer;
