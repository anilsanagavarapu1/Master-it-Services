import React from "react";

const Menu = () => {
  return (
    <div className="mega-menu-overlay">
      <div className="close-icon-box">
        <i className="fa fa-times-circle fa-2x"></i>
      </div>
      <div className="container-fluid position-relative pt-4 pt-md-5 d-lg-none">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
              <div className="contact-box">
                <div className="contact-icon-box">
                  <i className="fa fa-envelope"></i>
                </div>
                <p>
                  <a href="mailto:support@masteritservices.com">
                    support@masteritservices.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
              <div className="contact-box">
                <div className="contact-icon-box">
                  <i className="fa fa-phone-alt"></i>
                </div>
                <p>
                  <a href="tel:+919035416166">+91-903-541-6166</a>
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
              <div className="contact-box">
                <div className="contact-icon-box">
                  <i className="fa fa-pencil-alt"></i>
                </div>
                <p>
                  <a href="contact-us.html">Request Quote</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-100 d-flex">
        <div className="conntainer-fluid w-100 h-100">
          <div className="container h-100">
            <div className="row menu-row align-items-md-start align-items-lg-center">
              <div className="col-md-6 col-lg-3 menu-column">
                <div className="contact-box">
                  <div className="contact-icon-box">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <p>
                    <a href="mailto:support@masteritservices.com">
                      support@masteritservices.com
                    </a>
                  </p>
                </div>
                <h4 className="text-orange font-weight-bold">Our Services</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item b-0">
                    <a className="list-link" href="azure-development.html">
                      Microsoft Azure Development
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="sharepoint-development.html">
                      SharePoint Development
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="web-development.html">Web Development</a>
                  </li>
                  <li className="list-group-item">
                    <a href="microsoft-power-platform-development.html">
                      Microsoft Power Platform Development
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-3 menu-column">
                <div className="contact-box">
                  <div className="contact-icon-box">
                    <i className="fa fa-phone-alt"></i>
                  </div>
                  <p>
                    <a href="tel:+919035416166">+91-903-541-6166</a>
                  </p>
                </div>
                <h4 className="text-orange font-weight-bold">Solutions</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item b-0">
                    <a className="list-link" href="solutions/hrms.html">
                      HRMS
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="solutions/it-asset-management.html">
                      IT Asset Management
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-3 menu-column effectline">
                <ul className="special-menu">
                  <li>
                    <a href="contact-us.html"> Contact Us </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
