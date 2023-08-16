// import Carousel from 'react-bootstrap/Carousel';
// import divfrom 'components/ExampleCarouselImage';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

function Slider() {
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
    <Slider {...settings}>
    <div className="banner-slide slide-one  ">
      {/* Slide 1 */}
      <div className="container-fluid">
      <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-text">
              <span
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                Slide 1 Title
              </span>

              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                Slide 1 Content
              </h1>

              <div
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <p>Slide 1 Description</p>
              </div>

              <div
                className="banner-btn"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <Link href="/contact">
                  <a className="default-btn">Get Started</a>
                </Link>

                <Link href="/contact">
                  <a className="default-btn active">Find An Agent</a>
                </Link>
              </div>
            </div>
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

    <div className="banner-slide">
      {/* Slide 2 */}
      <div className="container-fluid">
      <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-text">
              <span
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                Slide 2 Title
              </span>

              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                Slide 2 Content
              </h1>

              <div
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <p>Slide 2 Description</p>
              </div>

              <div
                className="banner-btn"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <Link href="/contact">
                  <a className="default-btn">Get Started</a>
                </Link>

                <Link href="/contact">
                  <a className="default-btn active">Find An Agent</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 pr-0">
            <div
              className="banner-img"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <img src="../../public/" alt="Image" />
            </div>
          </div>
        </div>            </div>
    </div>

    <div className="banner-slide">
      {/* Slide 3 */}
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-text">
              <span
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                Slide 3 Title
              </span>

              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                Slide 3 Content
              </h1>

              <div
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <p>Slide 3 Description</p>
              </div>

              <div
                className="banner-btn"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <Link href="/contact">
                  <a className="default-btn">Get Started</a>
                </Link>

                <Link href="/contact">
                  <a className="default-btn active">Find An Agent</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 pr-0">
            <div
              className="banner-img"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <img className="zfffttttt" src="https://picsum.photos/id/25/5000/3333" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Slider>
  );
}

export default Slider;