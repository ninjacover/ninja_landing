// MainBanner.js
import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";

const MainBanner = () => {
  const [slides, setSlides] = useState([
    {
      url: "/images/banner/desktop/ninjachatbot.png",
      title: "NinjaChatbot",
      button: "Button 1",
      buttonClass: "slide-1-button",
    },
    {
      url: "/images/banner/desktop/ninjainsurance.png",
      title: "NinjaInsurance",
      button: "Button 2",
      buttonClass: "slide-2-button",

    },
    {
      url: "/images/banner/desktop/ninjacontact.png",
      title: "NinjaContact",
      button: "Button 3",
      buttonClass: "slide-3-button",

    },
  ]);

  useEffect(() => {
    const newSlides = [
      {
        url: "/images/banner/mobile/ninjachatbot.png",
        title: "NinjaChatbot",
        button: "Button 1",
        buttonClass: "slide-1-button",

      },
      {
        url: "/images/banner/mobile/ninjainsurance.png",
        title: "NinjaInsurance",
        button: "Button 2",
        buttonClass: "slide-2-button",

      },
      {
        url: "/images/banner/mobile/ninjacontact.png",
        title: "NinjaContact",
        button: "Button 3",
        buttonClass: "slide-3-button",

      },
    ];

    const mediaQuery = window.matchMedia("(max-width:780px)");
    if (mediaQuery.matches) {
      setSlides(newSlides);
    }
  }, []);

  return (
    <div className="mainCon">
      <div className="childMain">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default MainBanner;