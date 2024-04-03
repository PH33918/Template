import React from "react";
import data from "../../db.json";
type TProduct = {
  name: string;
  price: number;
  img : string;
};
const TProduct = {
   img : "./"
} 

// UI Component  = dumb component
const Product = (props: { product: TProduct }) => {
  return (
    <>
      <h2>{props.product.name}</h2>
      <p>{props.product.price}</p>

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
                  {data.OurProducts.map((anh) => (
                        <li>
                          <a href="index.html">
                            <div className="icon">
                              {anh.Title}
                              <img src={anh.Img} alt="" />
                            </div>                           
                             {anh.Name}
                          </a>
                        </li>
                      ))}
                    <span className="batch">
                      New
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <div className="product-content-three">
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
            <div className="shop-now-btn text-center mt-40">
              <a href="shop.html" className="btn">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
