import React from "react";
import logo from "../../assets/images/logo/test-logo.png";

type tProps = {};

const Header: React.FC<tProps> = () => {
  return (
    <header>
      <div className="main-header app-header text-white">
        <div className="logo-outer py-30 px-100 d-none d-lg-flex align-items-center">
          <div className="logo">
            <a href="/#">
              <img src={logo} alt="Logo" title="Logo" />
            </a>
          </div>
        </div>
        <div className="header-wrap align-self-center">
          <div className="header-upper">
            <div className="container-fluid clearfix">
              <div className="header-inner d-flex align-items-center">
                <div className="nav-outer clearfix d-flex align-items-center">
                  <nav className="main-menu navbar-expand-lg"></nav>
                  <div className="menu-btn">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
