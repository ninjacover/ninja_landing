// MainBanner.js
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ImageSlider from "./ImageSlider";

const MainBanner = () => {
  const [slides, setSlides] = useState([
    { url: "/images/ChatbotNinja.png", title: "chatbot" },
    { url: "/images/2.png", title: "boat" },
    { url: "/images/3.png", title: "forest" },
  ]);

  useEffect(() => {
    const newSlides = [
      { url: "/images/1.2.png", title: "chatbot" },
      { url: "/images/1.3.png", title: "boat" },
      { url: "/images/1.1.png", title: "forest" },
    ];

    const mediaQuery = window.matchMedia("(max-width:780px)");
    if (mediaQuery.matches) {
      setSlides(newSlides);
    }
  }, []);

  const containerStyles = {
    position: "relative",
    margin: "0 auto",
    display: "inline-block",
  };

  return (
    <div className="mainCon">
      <div className="childMain" style={containerStyles}>
        <ImageSlider slides={slides} />
        <div className="banner-text">
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1200"
            data-aos-once="true"
          ></div>

          <div
            className="banner-btn"
            style={{ marginTop: "40px", paddingLeft: "17%" }}
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1200"
            data-aos-once="true"
          >
            <Link href="/contact">
              <a
                className="default-btn"
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translate( -40%,-455%)",
                }}
              >
                Get Started
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;