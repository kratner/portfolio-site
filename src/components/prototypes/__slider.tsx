import React, { useState, useCallback, useEffect } from "react";

import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Slide {
  imgSrc?: string;
  imgAltText?: string;
  heading?: string;
  subheading?: string;
  bodyText?: string;
  avatarSrc?: string;
  avatarAltText?: string;
  avatarHeading?: string;
  avatarSubheading?: string;
  avatarBodyText?: string;
  ctaButtonText?: string;
  ctaButtonURL?: string;
  ctaButtonTitle?: string;
  ctaButtonTarget?: string;
}

interface SliderProps {
  slides: Slide[];
  sliderHeading?: string;
  sliderSubheading?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const Slider: React.FC<SliderProps> = ({
  slides,
  autoPlay = false,
  autoPlayInterval = 5000,
  sliderHeading,
  sliderSubheading,
}) => {
  const PUBLIC_URL = process.env.PUBLIC_URL;
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevious = () => {
    const newSlide = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(newSlide);
  };
  const goToNext = () => {
    const newSlide = (currentSlide + 1) % slides.length;
    setCurrentSlide(newSlide);
  };

  const handlePrevClick = () => {
    goToPrevious();
  };

  const handleNextClick = () => {
    goToNext();
  };

  if (autoPlay) {
    setInterval(() => {
      goToNext();
    }, autoPlayInterval);
  }

  return (
    <React.Fragment>
      <div className="slider">
        {sliderHeading && (
          <div className="slider-heading">
            <h2>{sliderHeading}</h2>
          </div>
        )}
        {sliderSubheading && (
          <div className="slider-subheading">
            <h3>{sliderSubheading}</h3>
          </div>
        )}
        <div className="slider-container">
          <div className="arrow prev" onClick={handlePrevClick}>
            <span>
              <FontAwesomeIcon icon={faCircleLeft} />
            </span>
          </div>
          <div className="slides-all">{/* slides go here */}</div>
          <div className="arrow next" onClick={handleNextClick}>
            <span>
              <FontAwesomeIcon icon={faCircleRight} />
            </span>
          </div>
        </div>
        <div className="slide-position">
          {slides.map((_, index) => {
            return (
              <div
                className={
                  "indicator" + (index === currentSlide ? " active" : "")
                }
                key={index}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Slider;
