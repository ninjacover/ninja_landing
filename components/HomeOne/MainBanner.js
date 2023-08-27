// MainBanner.js
import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";

const MainBanner = () => {
  const [slides, setSlides] = useState([
    { url: "/images/banner/desktop/ninjachatbot.png", title: "NinjaChatbot" },
    { url: "/images/banner/desktop/ninjainsurance.png", title: "NinjaInsurance" },
    { url: "/images/banner/desktop/ninjacontact.png", title: "NinjaContact" },
  ]);

  useEffect(() => {
    const newSlides = [
      { url: "/images/banner/mobile/ninjachatbot.png", title: "NinjaChatbot" },
      { url: "/images/banner/mobile/ninjainsurance.png", title: "NinjaInsurance" },
      { url: "/images/banner/mobile/ninjacontact.png", title: "NinjaContact" },
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
      </div>
    </div>
  );
};

export default MainBanner;