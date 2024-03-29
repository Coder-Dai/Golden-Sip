import { useState } from "react";
import "./imageSlider.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="slider">
      <div
        className="slide"
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
        }}
      >
        <div className="slider-buttons">
          <div onClick={goToPrevious} className="left-arrow">
            ❰
          </div>
          <div onClick={goToNext} className="right-arrow">
            ❱
          </div>
        </div>
      </div>
      <div className="dot-container">
        {slides.map((slide, slideIndex) => (
          <div
            className="dot"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            {slideIndex === currentIndex ? (
              <p className="dot-selected-item">●</p>
            ) : (
              <p>●</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
