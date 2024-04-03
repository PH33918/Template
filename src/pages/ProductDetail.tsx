import React from "react";

type Props = {};

const ProductDetail = (props: Props) => {
  return (
    <>
      {/* preloader */}
      <div id="preloader">
        <div id="loading-center">
          <div className="loader">
            <div className="loader-outter" />
            <div className="loader-inner" />
          </div>
        </div>
      </div>
      {/* preloader-end */}
      {/* Scroll-top */}
      <button className="scroll-top scroll-to-target" data-target="html">
        <i className="fas fa-angle-up" />
      </button>
      {/* Scroll-top-end*/}
      {/* header-area */}
      <header className="transparent-header">
        <div className="header-top-wrap">
          <div className="container custom-container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-8">
                <div className="header-top-left">
                  <ul className="list-wrap">
                    <li className="header-location">
                      <i className="fas fa-map-marker-alt" />
                      33M Sun Central. New York
                    </li>
                    <li>
                      <i className="fas fa-envelope" />
                      <a href="mailto:info@example.com">info@example.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-4">
                <div className="header-top-right">
                  <div className="header-top-menu">
                    <ul className="list-wrap">
                      <li>
                        <a href="contact.html">Help</a>
                      </li>
                      <li>
                        <a href="contact.html">Support</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
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
            </div>
          </div>
        </div>
        <div id="sticky-header" className="menu-area">
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="menu-wrap">
                  <div className="mobile-nav-toggler">
                    <i className="fas fa-bars" />
                  </div>
                  <nav className="menu-nav">
                    <div className="logo">
                      <a href="index.html">
                        <img src="assets/img/logo/logo.png" alt="Logo" />
                      </a>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        <li className="menu-item-has-children">
                          <a href="#">Home</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="index.html">Home One</a>
                            </li>
                            <li>
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
                        <li className="active menu-item-has-children">
                          <a href="#">PRODUCTS</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="shop.html">Shop One</a>
                            </li>
                            <li>
                              <a href="shop-2.html">Shop Two</a>
                            </li>
                            <li className="active">
                              <a href="shop-details.html">Shop Details</a>
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
                              <a href="services-details.html">
                                Services Details
                              </a>
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
                    <div className="header-action d-none d-md-block">
                      <ul className="list-wrap">
                        <li className="header-search">
                          <a href="#">
                            <i className="flaticon-search" />
                          </a>
                        </li>
                        <li className="header-shop-cart">
                          <a href="#">
                            <i className="flaticon-shopping-basket" />
                            <span>0</span>
                          </a>
                        </li>
                        <li className="header-btn">
                          <a href="tel:0123456789" className="btn">
                            +1 333 555 999
                          </a>
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
      {/* header-area-end */}
      {/* main-area */}
      <main>
        {/* breadcrumb-area */}
        <section
          className="breadcrumb-area tg-motion-effects breadcrumb-bg"
          data-background="assets/img/bg/breadcrumb_bg.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-content">
                  <h2 className="title">Shop Details</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Shop Details
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* shop-details-area */}
        <section className="shop-details-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="shop-details-images-wrap">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane show active"
                      id="itemOne-tab-pane"
                      role="tabpanel"
                      aria-labelledby="itemOne-tab"
                      tabIndex={0}
                    >
                      <a
                        href="assets/img/product/shop_details01.jpg"
                        className="popup-image"
                      >
                        <img
                          src="assets/img/product/shop_details01.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div
                      className="tab-pane"
                      id="itemTwo-tab-pane"
                      role="tabpanel"
                      aria-labelledby="itemTwo-tab"
                      tabIndex={0}
                    >
                      <a
                        href="assets/img/product/shop_details02.jpg"
                        className="popup-image"
                      >
                        <img
                          src="assets/img/product/shop_details02.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div
                      className="tab-pane"
                      id="itemThree-tab-pane"
                      role="tabpanel"
                      aria-labelledby="itemThree-tab"
                      tabIndex={0}
                    >
                      <a
                        href="assets/img/product/shop_details03.jpg"
                        className="popup-image"
                      >
                        <img
                          src="assets/img/product/shop_details03.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="itemOne-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#itemOne-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="itemOne-tab-pane"
                        aria-selected="true"
                      >
                        <img
                          src="assets/img/product/shop_nav_img01.jpg"
                          alt=""
                        />
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="itemTwo-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#itemTwo-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="itemTwo-tab-pane"
                        aria-selected="false"
                      >
                        <img
                          src="assets/img/product/shop_nav_img02.jpg"
                          alt=""
                        />
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="itemThree-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#itemThree-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="itemThree-tab-pane"
                        aria-selected="false"
                      >
                        <img
                          src="assets/img/product/shop_nav_img03.jpg"
                          alt=""
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="shop-details-content">
                  <h2 className="title">Necessary Human Body</h2>
                  <div className="review-wrap">
                    <div className="rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <span>(4 customer reviews)</span>
                  </div>
                  <h3 className="price">
                    $8.50 <span>- In stock</span>
                  </h3>
                  <div className="product-count-wrap">
                    <span className="title">Hurry Up! Sale ends in:</span>
                    <div className="coming-time" data-countdown="2024/7/6" />
                  </div>
                  <p>
                    Meat provide well shaped fresh and the organic meat well
                    animals is Humans have hunted schistoric times meat, the
                    flesh
                  </p>
                  <div className="shop-details-qty">
                    <span className="title">Quantity :</span>
                    <div className="shop-details-qty-inner">
                      <form action="#">
                        <div className="cart-plus-minus">
                          <input type="text" defaultValue={1} />
                        </div>
                      </form>
                      <button className="purchase-btn">PURCHASE</button>
                    </div>
                  </div>
                  <a href="#" className="buy-btn">
                    Buy it now
                  </a>
                  <div className="payment-method-wrap">
                    <span className="title">GUARANTEED SAFE CHECKOUT:</span>
                    <img src="assets/img/product/payment_method.png" alt="" />
                  </div>
                  <div className="shop-add-Wishlist">
                    <a href="#">
                      <i className="far fa-heart" />
                      Add to Wishlist
                    </a>
                  </div>
                  <div className="sd-sku">
                    <span className="title">SKU:</span>
                    <a href="#">002</a>
                  </div>
                  <div className="sd-category">
                    <span className="title">CATEGORY:</span>
                    <ul className="list-wrap">
                      <li>
                        <a href="#">lipstick</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="product-desc-wrap">
                  <ul
                    className="nav nav-tabs"
                    id="descriptionTab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="description-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#description-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="description-tab-pane"
                        aria-selected="true"
                      >
                        Description
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="reviews-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#reviews-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="reviews-tab-pane"
                        aria-selected="false"
                      >
                        Reviews (0)
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="descriptionTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="description-tab-pane"
                      role="tabpanel"
                      aria-labelledby="description-tab"
                      tabIndex={0}
                    >
                      <div className="product-description-content">
                        <p>
                          committed are products that have been produced using
                          sustainable fibers or processes, reducing their
                          environmental impact. Umino’s goal is to support the
                          implementation of practices more committed to the
                          environment. I am like a freight train. Working on the
                          details, twisting and playing with them over the
                          years, but always staying on the same track I design
                          from instinct. It’s the only way I know how to live.
                        </p>
                        <ul className="list-wrap">
                          <li>
                            Committed are products that have been produced
                          </li>
                          <li>It’s the only way I know how to live.</li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="reviews-tab-pane"
                      role="tabpanel"
                      aria-labelledby="reviews-tab"
                      tabIndex={0}
                    >
                      <div className="product-desc-review">
                        <div className="product-desc-review-title mb-15">
                          <h5 className="title">Customer Reviews (0)</h5>
                        </div>
                        <div className="left-rc">
                          <p>No reviews yet</p>
                        </div>
                        <div className="right-rc">
                          <a href="#">Write a review</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* shop-details-area-end */}
        {/* product-area */}
        <section className="related-product-area pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb-50">
                  <span className="sub-title">Organic Shop</span>
                  <h2 className="title">Related Products</h2>
                  <div
                    className="title-shape"
                    data-background="assets/img/images/title_shape.png"
                  />
                </div>
              </div>
            </div>
            <div className="product-item-wrap-three">
              <div className="row justify-content-center rp-active">
                <div className="col-xl-3">
                  <div className="product-item-three inner-product-item">
                    <div className="product-thumb-three">
                      <a href="shop-details.html">
                        <img
                          src="assets/img/product/inner_product01.png"
                          alt=""
                        />
                      </a>
                      <span className="batch">
                        New
                        <i className="fas fa-star" />
                      </span>
                    </div>
                    <div className="product-content-three">
                      <a href="shop.html" className="tag">
                        organic
                      </a>
                      <h2 className="title">
                        <a href="shop-details.html">roast chicken</a>
                      </h2>
                      <h2 className="price">$4.99</h2>
                      <div className="product-cart-wrap">
                        <form action="#">
                          <div className="cart-plus-minus">
                            <input type="text" defaultValue={1} />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="product-shape-two">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 303 445"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M319,3802H602c5.523,0,10,5.24,10,11.71l-10,421.58c0,6.47-4.477,11.71-10,11.71H329c-5.523,0-10-5.24-10-11.71l-10-421.58C309,3807.24,313.477,3802,319,3802Z"
                          transform="translate(-309 -3802)"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">
                  <div className="product-item-three inner-product-item">
                    <div className="product-thumb-three">
                      <a href="shop-details.html">
                        <img
                          src="assets/img/product/inner_product02.png"
                          alt=""
                        />
                      </a>
                      <span className="batch">
                        New
                        <i className="fas fa-star" />
                      </span>
                    </div>
                    <div className="product-content-three">
                      <a href="shop.html" className="tag">
                        organic
                      </a>
                      <h2 className="title">
                        <a href="shop-details.html">Venison meat</a>
                      </h2>
                      <h2 className="price">$4.99</h2>
                      <div className="product-cart-wrap">
                        <form action="#">
                          <div className="cart-plus-minus">
                            <input type="text" defaultValue={1} />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="product-shape-two">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 303 445"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M319,3802H602c5.523,0,10,5.24,10,11.71l-10,421.58c0,6.47-4.477,11.71-10,11.71H329c-5.523,0-10-5.24-10-11.71l-10-421.58C309,3807.24,313.477,3802,319,3802Z"
                          transform="translate(-309 -3802)"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">
                  <div className="product-item-three inner-product-item">
                    <div className="product-thumb-three">
                      <a href="shop-details.html">
                        <img
                          src="assets/img/product/inner_product03.png"
                          alt=""
                        />
                      </a>
                      <span className="batch">
                        New
                        <i className="fas fa-star" />
                      </span>
                    </div>
                    <div className="product-content-three">
                      <a href="shop.html" className="tag">
                        organic
                      </a>
                      <h2 className="title">
                        <a href="shop-details.html">processed meat</a>
                      </h2>
                      <h2 className="price">$4.99</h2>
                      <div className="product-cart-wrap">
                        <form action="#">
                          <div className="cart-plus-minus">
                            <input type="text" defaultValue={1} />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="product-shape-two">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 303 445"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M319,3802H602c5.523,0,10,5.24,10,11.71l-10,421.58c0,6.47-4.477,11.71-10,11.71H329c-5.523,0-10-5.24-10-11.71l-10-421.58C309,3807.24,313.477,3802,319,3802Z"
                          transform="translate(-309 -3802)"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">
                  <div className="product-item-three inner-product-item">
                    <div className="product-thumb-three">
                      <a href="shop-details.html">
                        <img
                          src="assets/img/product/inner_product04.png"
                          alt=""
                        />
                      </a>
                      <span className="batch">
                        New
                        <i className="fas fa-star" />
                      </span>
                    </div>
                    <div className="product-content-three">
                      <a href="shop.html" className="tag">
                        organic
                      </a>
                      <h2 className="title">
                        <a href="shop-details.html">roast chicken</a>
                      </h2>
                      <h2 className="price">$4.99</h2>
                      <div className="product-cart-wrap">
                        <form action="#">
                          <div className="cart-plus-minus">
                            <input type="text" defaultValue={1} />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="product-shape-two">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 303 445"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M319,3802H602c5.523,0,10,5.24,10,11.71l-10,421.58c0,6.47-4.477,11.71-10,11.71H329c-5.523,0-10-5.24-10-11.71l-10-421.58C309,3807.24,313.477,3802,319,3802Z"
                          transform="translate(-309 -3802)"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">
                  <div className="product-item-three inner-product-item">
                    <div className="product-thumb-three">
                      <a href="shop-details.html">
                        <img
                          src="assets/img/product/inner_product05.png"
                          alt=""
                        />
                      </a>
                      <span className="batch">
                        New
                        <i className="fas fa-star" />
                      </span>
                    </div>
                    <div className="product-content-three">
                      <a href="shop.html" className="tag">
                        organic
                      </a>
                      <h2 className="title">
                        <a href="shop-details.html">Venison meat</a>
                      </h2>
                      <h2 className="price">$4.99</h2>
                      <div className="product-cart-wrap">
                        <form action="#">
                          <div className="cart-plus-minus">
                            <input type="text" defaultValue={1} />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="product-shape-two">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 303 445"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M319,3802H602c5.523,0,10,5.24,10,11.71l-10,421.58c0,6.47-4.477,11.71-10,11.71H329c-5.523,0-10-5.24-10-11.71l-10-421.58C309,3807.24,313.477,3802,319,3802Z"
                          transform="translate(-309 -3802)"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* product-area-end */}
      </main>
      {/* main-area-end */}
      {/* footer-area */}
      <footer>
        <div className="footer-area">
          <div className="footer-logo-area">
            <div className="container">
              <div className="footer-logo-wrap">
                <ul className="list-wrap">
                  <li className="order-0 order-lg-2">
                    <div className="footer-logo">
                      <a href="index.html">
                        <img src="assets/img/logo/w_logo.png" alt="" />
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
                        <li>Centerl Park West La, New York</li>
                        <li>
                          <a href="tel:0123456789">+0 333 999 8899</a>
                        </li>
                        <li>
                          <a href="mailto:info@bemet.com">info@bemet.com</a>
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
                              src="assets/img/images/footer_insta01.jpg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/img/images/footer_insta02.jpg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/img/images/footer_insta03.jpg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/img/images/footer_insta04.jpg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/img/images/footer_insta05.jpg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/img/images/footer_insta06.jpg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/img/images/footer_insta07.jpg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/img/images/footer_insta08.jpg"
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
      {/* footer-area-end */}
      {/* JS here */}
    </>
  );
};

export default ProductDetail;
