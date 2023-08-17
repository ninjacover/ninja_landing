import React from "react";
import Link from "next/link";

import { FaHandshakeSimple, FaScaleUnbalancedFlip } from "react-icons/fa";
import { TbMessageChatbot } from "react-icons/tb";

const WhyChooseUs = () => {
  return (
    <>
      <div className="choose-us-area mt-50 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Beyond Insurance</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div
                className="single-choose"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <span>
                  <TbMessageChatbot />
                </span>
                <h3>ChatBOT for Insurance advice</h3>

                <Link href="/insurance-details">
                  <a>
                    <i className="flaticon-right"></i>
                  </a>
                </Link>

                <span className="choose-icon flaticon-kindness"></span>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div
                className="single-choose"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <span>
                  <FaScaleUnbalancedFlip />
                </span>
                <h3>Insurance comparison</h3>

                <Link href="/insurance-details">
                  <a>
                    <i className="flaticon-right"></i>
                  </a>
                </Link>

                <span className="choose-icon flaticon-target"></span>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
              <div
                className="single-choose"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <span>
                  <FaHandshakeSimple />
                </span>
                <h3>Broker to Broker</h3>

                <Link href="/insurance-details">
                  <a>
                    <i className="flaticon-right"></i>
                  </a>
                </Link>

                <span className="choose-icon flaticon-support"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;