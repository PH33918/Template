import { useEffect, useState } from "react";
import instance from "~/apis";
import { getAllProducts } from "~/apis/product";
import { TProduct } from "~/interfaces/Product";
import data from "../../db.json";

const ProductList = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  useEffect(() => {
    // Cach 1:
    // fetch('http://localhost:3000/products').then(res => res.json()).then(data => {setProducts(data)})

    // Cach 2:
    (async () => {
      const data = await getAllProducts();
      setProducts(data);
    })();

    // Cach 3:
    const getProducts = async () => {
      try {
        const { data } = await instance.get("/products");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  return (
    <div>
      <main>
        {/* slider-area */}

        {/* slider-area-end */}
        {/* about-area */}
        <section className="about-area tg-motion-effects">
          <div className="container">
            <div className="about-inner-wrap">
              <div className="row align-items-center">
                <div className="col-36">
                  <div className="about-content">
                    <div className="section-title mb-40">
                      <span className="sub-title">Customer Quotes</span>
                      <h2 className="title">
                        Organic Premium <span>Quality</span>
                      </h2>
                    </div>
                    <a href="about.html" className="btn">
                      More About
                    </a>
                    <div className="overly-content">
                      <h2 className="title">About</h2>
                    </div>
                  </div>
                </div>
                <div className="col-64">
                  <div className="about-cat-list">
                    <ul className="list-wrap">
                      {data.iconsanh.map((anh) => (
                        <li>
                          <a href="shop.html">
                            <div className="icon">
                              <img src={anh.Img} alt="" />
                            </div>
                            {anh.Name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-shape-wrap">
            <img
              src="assets/img/images/about_shape01.png"
              alt=""
              className="tg-motion-effects1"
            />
            <img
              src="assets/img/images/about_shape02.png"
              alt=""
              className="tg-motion-effects3"
            />
          </div>
        </section>
        {/* about-area-end */}
        {/* choose-area */}

        {/* choose-area-end */}
        {/* team-area */}
        <section
          className="team-area team-bg"
          data-background="assets/img/bg/team_bg.jpg"
        >
          <div className="container custom-container-two">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="team-content-wrap">
                  <div className="section-title white-title mb-50">
                    <span className="sub-title">Meet Our Team</span>
                    <h2 className="title">Our CREATIVE Team</h2>
                  </div>
                  <p>
                    BUY SMOKEY GRILLED meats and CHICKEN{" "}
                    <span>GET catling</span> FREE
                  </p>
                  <a href="shop.html" className="btn">
                    Shop Now
                  </a>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="team-item-wrap">
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-8">
                      <div className="team-item">
                        <div className="team-thumb">
                          <img
                            src="../../bemet/assets/img/team/team_img01.jpg"
                            alt=""
                          />
                          <a href="team-details.html" className="link-btn">
                            <i className="fas fa-plus" />
                          </a>
                        </div>
                        <div className="team-content">
                          <div
                            className="line"
                            data-background="assets/img/images/line.png"
                          />
                          <h4 className="title">
                            <a href="team-details.html">Alaxzender pilot</a>
                          </h4>
                          <span>stack expert</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-8">
                      <div className="team-item">
                        <div className="team-thumb">
                          <img
                            src="../../bemet/assets/img/team/team_img02.jpg"
                            alt=""
                          />
                          <a href="team-details.html" className="link-btn">
                            <i className="fas fa-plus" />
                          </a>
                        </div>
                        <div className="team-content">
                          <div
                            className="line"
                            data-background="assets/img/images/line.png"
                          />
                          <h4 className="title">
                            <a href="team-details.html">Starlee jonson</a>
                          </h4>
                          <span>stack expert</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-8">
                      <div className="team-item">
                        <div className="team-thumb">
                          <img
                            src="../../bemet/assets/img/team/team_img03.jpg"
                            alt=""
                          />
                          <a href="team-details.html" className="link-btn">
                            <i className="fas fa-plus" />
                          </a>
                        </div>
                        <div className="team-content">
                          <div
                            className="line"
                            data-background="assets/img/images/line.png"
                          />
                          <h4 className="title">
                            <a href="team-details.html">Alaxzender pilot</a>
                          </h4>
                          <span>stack expert</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* team-area-end */}
        {/* product-area */}
        <section
          className="product-area-three product-bg-three"
          data-background="assets/img/bg/h2_product_bg.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb-50">
                  <span className="sub-title">Organic Shop</span>
                  <h2 className="title">Our Organic Products</h2>
                  <div
                    className="title-shape"
                    data-background="assets/img/images/title_shape.png"
                  />
                </div>
              </div>
            </div>
            <div className="product-item-wrap-three">
              <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                  <div className="product-item-three">
                    <div className="product-thumb-three">
                      <a href="shop-details.html">
                        <img src="../../bemet/assets/img/product/h2_product01.png" alt="" />
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                  <div className="product-item-three">
                    <div className="product-thumb-three">
                      <a href="shop-details.html">
                        <img src="../../bemet/assets/img/product/h2_product02.png" alt="" />
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                  <div className="product-item-three">
                    <div className="product-thumb-three">
                      <a href="shop-details.html">
                        <img src="../../bemet/assets/img/product/h2_product03.png" alt="" />
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                  <div className="product-item-three">
                    <div className="product-thumb-three">
                      <a href="shop-details.html">
                        <img src="../../bemet/assets/img/product/h2_product04.png" alt="" />
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
              </div>
              <div className="shop-now-btn text-center mt-40  ">
                <a href="shop.html" className="btn">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* product-area-end */}
        {/* cta-area */}

        {/* <section className="cta-area position-relative">
          <div className="cta-bg" data-background="../../bemet/assets/img/bg/cta_bg.jpg" />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="cta-content">
                  <img src="../../bemet/assets/img/icons/cta_icon.png" alt="" />
                  <h2 className="title">Get a Free Quote</h2>
                  <div className="cta-bottom">
                    <a href="shop.html" className="btn">
                      buy now
                    </a>
                    <a href="tel:0123456789" className="btn call-btn">
                      <i className="fas fa-headphones-alt" />
                      make a call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        
        {/* cta-area-end */}
        {/* faq-area */}
        <section
          className="faq-area tg-motion-effects faq-bg"
          data-background="assets/img/bg/faq_bg.jpg"
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="faq-img-wrap">
                  <img
                    src="../../bemet/assets/img/images/faq_img01.png"
                    alt=""
                  />
                  <img
                    src="../../bemet/assets/img/images/faq_img02.png"
                    alt=""
                  />
                  <img
                    src="../../bemet/assets/img/images/faq_img03.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="section-title mb-60">
                    <span className="sub-title">Customer Quotes</span>
                    <h2 className="title">
                      Frequently <span>Asked</span> Questions.
                    </h2>
                  </div>
                  <div className="faq-wrap">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            hamburg Meat is animal flesh food.
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              Meat provide well shaped fresh and the organic
                              meat well animals is Humans have hunted schistoric
                              times
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Revolution allowed the of animals
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              Meat provide well shaped fresh and the organic
                              meat well animals is Humans have hunted schistoric
                              times
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Meat is animal flesh food.
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              Meat provide well shaped fresh and the organic
                              meat well animals is Humans have hunted schistoric
                              times
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-shape-wrap">
            <img
              src="../../bemet/assets/img/images/faq_shape01.png"
              alt=""
              className="tg-motion-effects3"
            />
            <img
              src="../../bemet/assets/img/images/faq_shape02.png"
              alt=""
              className="tg-motion-effects2"
            />
          </div>
        </section>
        {/* faq-area-end */}
      </main>
    </div>
  );
};

export default ProductList;
