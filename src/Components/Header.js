/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Header = () => {
  return (
    <>
      <Menu />
      <div className="container-fluid header-top">
        <div className="container py-2 d-flex flex-wrap align-items-center">
          <div className="text-white pl-1 col-12 col-sm-6 col-lg-4 align-items-center">
            <i className="fa fa-envelope mr-2"></i>
            support@masteritservices.com
          </div>
          <div
            className="text-white col-12 col-sm-6 col-lg-4 d-none d-lg-flex align-items-center"
            style={{
              justifyContent: "space-between",
              fontSize: "14px",
              padding: 0,
            }}
          >
            <span>+91-966-689-2449</span>
            <span>+91-903-541-6166</span>
          </div>
          <div className="ml-auto d-none d-md-flex">
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
      </div>
      <header className="container-fluid bg-white shadow-sm ti-header">
        <nav className="container navbar navbar-light navbar-expand">
          <Link to="/">
            <img
              src="images/Mitlogo.svg"
              alt="MasterIT"
              className="masterit-logo"
            />
          </Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item d-none d-md-flex">
              <a href="" target="_blank" rel="noopener" className="nav-link">
                <img
                  className="ms-logo-link"
                  src="images/microsoft-logo-black.png"
                  alt="Silver Microsoft Partner"
                  width="125"
                  height="24"
                />
              </a>
            </li>
            <li className="nav-item d-none d-md-flex">
              <Link to="/career" className="nav-link">
                Career
              </Link>
            </li>
            <li className="nav-item d-none d-md-flex">
              <Link to="contact" className="nav-link">
                Contact Us
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center">
              <div className="burger-menu-btn">
                <div className="bar-1 w-50 mb-auto"></div>
                <div className="bar-2"></div>
                <div className="bar-3 w-50 ml-auto mt-auto"></div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
