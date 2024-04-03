import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../bemet/assets/img/logo/logo.png"

const Header = () => {
  return (
    <header className="transparent-header">
      <div className="header-top-wrap-two">
        <div className="container custom-container-three">
          <div className="header-top-wrap-inner">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="header-top-left-two">
                  <div className="header-lang">
                    <div className="dropdown">
                      <button
                        className="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        English
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <a className="dropdown-item" href="index.html">
                          Russia
                        </a>
                        <a className="dropdown-item" href="index.html">
                          Spanish
                        </a>
                        <a className="dropdown-item" href="index.html">
                          India
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="header-top-social">
                    <ul className="list-wrap">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="logo logo-two">
                  <a href="index.html">
                    <img src= {logo} alt="Logo" />
                    <div className="logo-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 284 122"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M818-1h284l-20,108a15,15,0,0,1-15,15H853a15,15,0,0,1-15-15Z"
                          transform="translate(-818)"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="header-top-right-two">
                  <div className="header-action d-none d-md-block">
                    <ul className="list-wrap">
                      <li className="header-account">
                        <a href="#">
                          <i className="fa fa-user" />
                        </a>
                      </li>
                      <li className="header-search">
                        <a href="#">  
                          <i className="fa fa-search" />
                        </a>
                      </li>
                      <li className="header-shop-cart">
                        <a href="#">
                          <i className="fa fa-shopping-basket" />
                        </a>
                      </li>
                      <li className="header-btn">
                        <a href="tel:0123456789" className="btn">
                          +84 814 600 342
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="sticky-header" className="menu-area menu-area-two">
        <div className="container custom-container-three">
          <div className="row">
            <div className="col-12">
              <div className="menu-wrap">
                <div className="mobile-nav-toggler">
                  <i className="fas fa-bars" />
                </div>
                <div className="logo d-none">
                  <a href="index.html">
                    <img src="assets/img/logo/w_logo.png" alt="Logo" />
                  </a>
                </div>
                <div className="logo sticky-logo d-none">
                  <a href="index.html">
                    <img src="assets/img/logo/logo.png" alt="Logo" />
                  </a>
                </div>
                <nav className="menu-nav">
                  <div className="navbar-wrap main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      <li className="active menu-item-has-children">
                        <a href="#">Home</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="index.html">Home One</a>
                          </li>
                          <li className="active">
                            <a href="index-2.html">Home Two</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home Three</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about.html">ABOUT US</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">PRODUCTS</a>
                        <ul className="sub-menu">
                          {/* <li>
                            <a href="shop.html">Shop One</a>
                          </li>
                          <li>
                            <a href="shop-2.html">Shop Two</a>
                          </li> */}
                          <li>
                             <NavLink to="/ProductDetail">shop_detail</NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">BLOG</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="blog.html">Our Blog</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">PAGES</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="services.html">Services Page</a>
                          </li>
                          <li>
                            <a href="services-details.html">Services Details</a>
                          </li>
                          <li>
                            <a href="team-details.html">Team Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              {/* Mobile Menu  */}
              <div className="mobile-menu">
                <nav className="menu-box">
                  <div className="close-btn">
                    <i className="fas fa-times" />
                  </div>
                  <div className="nav-logo">
                    <a href="index.html">
                      <img src="assets/img/logo/logo.png" alt="Logo" />
                    </a>
                  </div>
                  <div className="menu-outer">
                    {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                  </div>
                  <div className="social-links">
                    <ul className="clearfix list-wrap">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="menu-backdrop" />
              {/* End Mobile Menu */}
            </div>
          </div>
        </div>
      </div>
      {/* header-search */}
      <div
        className="search-popup-wrap"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="search-wrap text-center">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="search-form">
                  <form action="#">
                    <input type="text" placeholder="Enter your keyword..." />
                    <button className="search-btn">
                      <i className="flaticon-search" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search-backdrop" />
      {/* header-search-end */}
    </header>
  );
};

export default Header;
