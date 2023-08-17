import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const MainBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="main-banner-area">
        <Slider {...settings}>
          <div className="banner-slide slide-one  ">
            {/* Slide 1 */}
            <button className="btn">Expert Life advice</button>

            <div className="container-fluid">
            <div className="row align-items-center">

                <div className="col-lg-6 pr-0">
                  <div
                    className="banner-img"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-duration="1200"
                    data-aos-once="true"
                  >
                  </div>
                </div>
              </div>            </div>
          </div>

          <div
          
          className="banner-slide slide-two">
            {/* Slide 2 */}
            <button className="btn">Compare isnurance</button>

            <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-lg-6">
                  
                </div>

                <div className="col-lg-6 pr-0">
                  <div
                    className="banner-img"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-duration="1200"
                    data-aos-once="true"
                  >
                  </div>
                </div>
              </div>            </div>
          </div>

          <div className="banner-slide slide-three">
            {/* Slide 3 */}
            <button className="btn">Contact US</button>

            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6">
                 
                </div>

                <div className="col-lg-6 pr-0">
                  <div
                    className="banner-img"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-duration="1200"
                    data-aos-once="true"
                  >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default MainBanner;