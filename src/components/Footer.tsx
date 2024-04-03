import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <footer>
        <div className="footer-area">
          <div className="footer-logo-area">
            <div className="container">
              <div className="footer-logo-wrap">
                <ul className="list-wrap">
                  <li className="order-0 order-lg-2">
                    <div className="footer-logo">
                      <a href="index.html">
                        <img src="../../bemet/assets/img/logo/w_logo.png" alt="" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="footer-social">
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
                            <i className="fab fa-pinterest-p" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="order-lg-3">
                    <div className="footer-newsletter">
                      <h4 className="title">Our Newsletter</h4>
                      <form action="#">
                        <input type="email" placeholder="Enter your email..." />
                        <button type="submit">subscribe</button>
                      </form>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="footer-widget">
                    <h4 className="fw-title">about andspa</h4>
                    <div className="footer-contact">
                      <ul className="list-wrap">
                        <li>32/12 Nguyễn Đạo An</li>
                        <li>
                          <a href="tel:0123456789">+84 814 600 342</a>
                        </li>
                        <li>
                          <a href="mailto:info@bemet.com">Nguyenki571@gmail.com</a>
                        </li>
                      </ul>
                    </div>
                    <div className="footer-content">
                      <h4 className="title">Open Hours</h4>
                      <p>
                        Sunday to Friday <span>06:00-18:00</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="footer-widget">
                    <h4 className="fw-title">Important Links</h4>
                    <div className="footer-link">
                      <ul className="list-wrap">
                        <li>
                          <a href="contact.html">CURATION</a>
                        </li>
                        <li>
                          <a href="about.html">ABOUT US</a>
                        </li>
                        <li>
                          <a href="contact.html">MY ACCOUNT</a>
                        </li>
                        <li>
                          <a href="contact.html">CONTACT</a>
                        </li>
                        <li>
                          <a href="contact.html">SHIPPING &amp; RETURNS</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-4">
                  <div className="footer-widget">
                    <h4 className="fw-title">CATEGORIES</h4>
                    <div className="footer-link">
                      <ul className="list-wrap">
                        <li>
                          <a href="contact.html">How to Order</a>
                        </li>
                        <li>
                          <a href="contact.html">Delivery Info</a>
                        </li>
                        <li>
                          <a href="contact.html">FAQs</a>
                        </li>
                        <li>
                          <a href="contact.html">Terms</a>
                        </li>
                        <li>
                          <a href="contact.html">Privacy Policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <div className="footer-widget">
                    <h4 className="fw-title">instagram</h4>
                    <div className="footer-instagram">
                      <ul className="list-wrap">
                        <li>
                          <a href="#">
                            <img
                              src="../../bemet/assets/img/images/footer_insta01.jpg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="../../bemet/assets/img/images/footer_insta02.jpg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="../../bemet/assets/img/images/footer_insta03.jpg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="../../bemet/assets/img/images/footer_insta04.jpg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="../../bemet/assets/img/images/footer_insta05.jpg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="../../bemet/assets/img/images/footer_insta06.jpg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="../../bemet/assets/img/images/footer_insta07.jpg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="../../bemet/assets/img/images/footer_insta08.jpg"
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-7">
                  <div className="copyright-text">
                    <p>
                      © 2023 By <a href="index.html">Bemet</a>, All Rights
                      Reserved
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-5">
                  <div className="footer-card text-end">
                    <img src="assets/img/images/card.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
