
// ImageSlider.js
import React, { useState, useEffect } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   goToNext();
    // }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="slider">
      <div>
        <div className="left-arrow" onClick={goToPrevious}>
          ❰
        </div>
        <div className="right-arrow" onClick={goToNext}>
          ❱
        </div>
      </div>
      <div
        className="slide"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      >
<button className={`default-btn ${slides[currentIndex].buttonClass}`}>
  {slides[currentIndex].button}</button>
      </div>
      <div className="dots-container">
        {slides.map((slide, slideIndex) => (
          <div
            className="dot"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;