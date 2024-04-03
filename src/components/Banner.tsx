import React from "react";
import banner from "../../bemet/assets/img/slider/slider_bg01.jpg"
type Props = {};

const Banner = (props: Props) => {
  return (
    <div>
      <section className="slider-area">
        <div className="slider-active">
          <div
            className="single-slider slider-bg banner"
            data-background = {banner}
            
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="slider-content">
                    <div
                      className="slider-icon"
                      data-animation-in="fadeInUp"
                      data-delay-in=".2"
                      data-duration-in=".6"
                    >
                      <img src="../../bemet/assets/img/icons/slider_icon.png" alt="" />
                    </div>
                    <h2
                      className="title"
                      data-animation-in="fadeInUp"
                      data-delay-in=".4"
                      data-duration-in=".6"
                    >
                      Fresh Meat
                    </h2>
                    <span
                      className="sub-title"
                      data-animation-in="fadeInUp"
                      data-delay-in=".6"
                      data-duration-in=".6"
                    >
                      Butcher &amp; Meat shop
                    </span>
                    <a
                      href="shop.html"
                      className="btn"
                      data-animation-in="fadeInUp"
                      data-delay-in=".8"
                      data-duration-in=".6"
                    >
                      order now
                    </a>
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

export default Banner;
