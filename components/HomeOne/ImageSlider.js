import React, { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(prevSlide);
  };

  const goToNextSlide = () => {
    const nextSlide = (currentSlide + 1) % slides.length;
    setCurrentSlide(nextSlide);
  };

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          className={index === currentSlide ? "slide active" : "slide"}
          key={index}
        >
          {index === currentSlide && (
            <>
              <img src={slide.url} alt={slide.title} className="slide-image" />
              <button
                className="slide-button"
                onClick={() => goToSlide(index)}
              >
                Button {index + 1}
              </button>
            </>
          )}
        </div>
      ))}
      <button className="slide-arrow prev-arrow" onClick={goToPrevSlide}>
        &#8249;
      </button>
      <button className="slide-arrow next-arrow" onClick={goToNextSlide}>
        &#8250;
      </button>
    </div>
  );
};

export default ImageSlider;
