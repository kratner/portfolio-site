import React, { useState, useCallback } from "react";

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

  const goToPrevious = useCallback(() => {
    const newSlide = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(newSlide);
  }, [currentSlide, slides.length]);

  const goToNext = useCallback(() => {
    const newSlide = (currentSlide + 1) % slides.length;
    setCurrentSlide(newSlide);
  }, [currentSlide, slides.length]);

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
          <div className="arrow prev" onClick={goToPrevious}>
            <span>
              <FontAwesomeIcon icon={faCircleLeft} />
            </span>
          </div>
          <div className="slides-all">
            <div className="shadow-slides">
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
                      {slide.imgSrc && (
                        <div className="main-image">
                          <img
                            src={(PUBLIC_URL ?? "") + slide.imgSrc}
                            alt={slide.imgAltText ? slide.imgAltText : ""}
                          />
                        </div>
                      )}
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
                              slide.ctaButtonTarget ? slide.ctaButtonTarget : ""
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
                            alt={slide.avatarAltText ? slide.avatarAltText : ""}
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
                      {slide.imgSrc && (
                        <div className="main-image">
                          <img
                            src={(PUBLIC_URL ?? "") + slide.imgSrc}
                            alt={slide.imgAltText ? slide.imgAltText : ""}
                          />
                        </div>
                      )}
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
                              slide.ctaButtonTarget ? slide.ctaButtonTarget : ""
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
                            alt={slide.avatarAltText ? slide.avatarAltText : ""}
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
                );
              })}
            </div>
          </div>
          <div className="arrow next" onClick={goToNext}>
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
