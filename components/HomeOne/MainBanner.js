import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="main-banner-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-text">
          

              

                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  
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
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape">
        </div>
        <div className="banner-shape-right">
          <img src="/images/banner/banner-shape-right.png" alt="Image" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
