import React from "react";
import Link from "next/link";

import {FaHandshakeSimple,FaScaleUnbalancedFlip } from 'react-icons/fa6';
import{TbMessageChatbot} from 'react-icons/tb';
const WhyChooseUs = () => {
  return (
    <>
      <div className="choose-us-area mt-50 pb-70 ">
        <div className="container">
          <div className="section-title">
            <span className="about-area .about-content span">Services</span>
            <h2 style={{marginTop:'10px'}}>Beyond Insurance <br></br>
              We are here for you</h2>
            
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6" >
              <div
                className="single-choose" style={{height:'100%'}}
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                  <div style={{marginTop:'auto'}}></div>
                <span ><TbMessageChatbot/></span>
                <h3>ChatBOT for Insurance advice</h3>
              
              <h8>Meet our friendly Chat Bot – your 24/7 companion for insurance inquiries. Instant answers, personalized guidance, and real-time support</h8>
                <div>
                  <Link href="/insurance-details">
                    <a>
                      <i className="flaticon-right"></i>
                    </a>
                  </Link>
                </div>

                <span className="choose-icon flaticon-kindness"></span>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div
                className="single-choose" style={{height:'100%'}}
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <span ><FaScaleUnbalancedFlip/></span>
                <h3>Insurance comparison</h3>
                <h8>Navigate insurance options effortlessly with our Comparator. Uncover tailored solutions and make informed choices, all in one place. Your insurance journey, simplified.
</h8>
                <div>
                  <Link href="/insurance-details">
                    <a>
                      <i className="flaticon-right"></i>
                    </a>
                  </Link>
                </div>

                <span className="choose-icon flaticon-target"></span>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
              <div
                className="single-choose" style={{height:'100%'}}
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <span ><FaHandshakeSimple/></span>
                <h3>Broker to Broker</h3>
              <h8>Empower your brokerage with our Broker-to-Broker service. Streamline operations, access valuable insights, and enhance your offerings as we assist you every step of the way.
</h8>
                <div>
                  <Link href="/insurance-details">
                    <a>
                      <i className="flaticon-right"></i>
                    </a>
                  </Link>
                </div>

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
