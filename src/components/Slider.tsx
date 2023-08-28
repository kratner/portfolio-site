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

  const goToNext = useCallback(() => {
    const newSlide = (currentSlide + 1) % slides.length;
    setCurrentSlide(newSlide);
  }, [currentSlide, slides.length]);

  const handlePrevClick = () => {
    goToPrevious();
  };

  const handleNextClick = () => {
    goToNext();
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    const handleAutoPlay = () => {
      intervalId = setInterval(goToNext, autoPlayInterval);
    };

    const clearAutoPlayInterval = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    if (autoPlay) {
      handleAutoPlay();
    }

    return () => {
      clearAutoPlayInterval();
    };
  }, [autoPlay, autoPlayInterval, goToNext]);

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
          <div className="slides-all">
            <div className="shadow-slides">
              {slides.map((slide, index) => {
                return (
                  // <div
                  //   className={
                  //     index === currentSlide
                  //       ? "slide-container active"
                  //       : "slide-container"
                  //   }
                  //   key={index}
                  // >
                  <div className="slide-container" key={index}>
                    <div className="slide">
                      <div className="slide-branding">
                        {slide.imgSrc && (
                          <div className="main-image">
                            <img
                              src={(PUBLIC_URL ?? "") + slide.imgSrc}
                              alt={slide.imgAltText ? slide.imgAltText : ""}
                            />
                          </div>
                        )}
                      </div>
                      <div className="slide-meta">
                        {slide.heading && (
                          <div className="slide-heading">
                            <h2>{slide.heading}</h2>
                          </div>
                        )}
                        {slide.subheading && (
                          <div className="slide-subheading">
                            <h3>{slide.subheading}</h3>
                          </div>
                        )}
                        {slide.bodyText && (
                          <div className="slide-bodyText">
                            <p>{slide.bodyText}</p>
                          </div>
                        )}
                        {(slide.ctaButtonText ||
                          slide.ctaButtonTitle ||
                          slide.ctaButtonURL) && (
                          <div className="slide-cta">
                            <a
                              href={slide.ctaButtonURL}
                              title={slide.ctaButtonTitle}
                              target={
                                slide.ctaButtonTarget
                                  ? slide.ctaButtonTarget
                                  : ""
                              }
                            >
                              {slide.ctaButtonText}
                            </a>
                          </div>
                        )}
                        {slide.avatarSrc && (
                          <div className="slide-avatar">
                            <img
                              src={(PUBLIC_URL ?? "") + slide.avatarSrc}
                              alt={
                                slide.avatarAltText ? slide.avatarAltText : ""
                              }
                            />
                          </div>
                        )}
                        {slide.avatarHeading && (
                          <div className="slide-avatar-heading">
                            <h2>{slide.avatarHeading}</h2>
                          </div>
                        )}
                        {slide.avatarSubheading && (
                          <div className="slide-avatar-subheading">
                            <h3>{slide.avatarSubheading}</h3>
                          </div>
                        )}
                        {slide.avatarBodyText && (
                          <div className="slide-avatar-subheading">
                            <h3>{slide.avatarBodyText}</h3>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="slides">
              {slides.map((slide, index) => {
                return (
                  <div
                    className={
                      index === currentSlide
                        ? "slide-container active"
                        : "slide-container"
                    }
                    key={index}
                  >
                    <div className="slide">
                      <div className="slide-branding">
                        {slide.imgSrc && (
                          <div className="main-image">
                            <img
                              src={(PUBLIC_URL ?? "") + slide.imgSrc}
                              alt={slide.imgAltText ? slide.imgAltText : ""}
                            />
                          </div>
                        )}
                      </div>
                      <div className="slide-meta">
                        {slide.heading && (
                          <div className="slide-heading">
                            <h2>{slide.heading}</h2>
                          </div>
                        )}
                        {slide.subheading && (
                          <div className="slide-subheading">
                            <h3>{slide.subheading}</h3>
                          </div>
                        )}
                        {slide.bodyText && (
                          <div className="slide-bodyText">
                            <p>{slide.bodyText}</p>
                          </div>
                        )}
                        {(slide.ctaButtonText ||
                          slide.ctaButtonTitle ||
                          slide.ctaButtonURL) && (
                          <div className="slide-cta">
                            <a
                              href={slide.ctaButtonURL}
                              title={slide.ctaButtonTitle}
                              target={
                                slide.ctaButtonTarget
                                  ? slide.ctaButtonTarget
                                  : ""
                              }
                            >
                              {slide.ctaButtonText}
                            </a>
                          </div>
                        )}
                        {slide.avatarSrc && (
                          <div className="slide-avatar">
                            <img
                              src={(PUBLIC_URL ?? "") + slide.avatarSrc}
                              alt={
                                slide.avatarAltText ? slide.avatarAltText : ""
                              }
                            />
                          </div>
                        )}
                        {slide.avatarHeading && (
                          <div className="slide-avatar-heading">
                            <h2>{slide.avatarHeading}</h2>
                          </div>
                        )}
                        {slide.avatarSubheading && (
                          <div className="slide-avatar-subheading">
                            <h3>{slide.avatarSubheading}</h3>
                          </div>
                        )}
                        {slide.avatarBodyText && (
                          <div className="slide-avatar-subheading">
                            <h3>{slide.avatarBodyText}</h3>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="arrow next" onClick={handleNextClick}>
            <span>
              <FontAwesomeIcon icon={faCircleRight} />
            </span>
          </div>
        </div>
        <div className="slide-position">
          {slides.map((_, index) => {
            const handleDotClick = () => {
              setCurrentSlide(index);
            };
            return (
              <div
                className={
                  "indicator" + (index === currentSlide ? " active" : "")
                }
                onClick={handleDotClick}
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
