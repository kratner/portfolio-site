import React, { useEffect, useState } from "react";

interface ImageData {
  src: string;
  alt: string;
}

interface SVGContainerMultifadeProps {
  images: ImageData[];
}

const SVGContainerMultifade: React.FC<SVGContainerMultifadeProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [fade, setFade] = useState(false);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setFade(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setNextIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  useEffect(() => {
    const loadImage = (src: string) => {
      const image = new Image();
      image.src = src;
      image.onload = () => {
        setLoadedImages((prevImages) => [...prevImages, src]);
      };
    };

    images.forEach((image) => {
      if (!loadedImages.includes(image.src)) {
        loadImage(image.src);
      }
    });
  }, [images, loadedImages]);

  return (
    <div className="svg-container-multifade">
      <div className={`fade ${fade ? "fade-out" : "fade-in"}`}>
        {loadedImages.includes(images[currentIndex].src) && (
          <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
        )}
      </div>
      <div className={`fade ${fade ? "fade-in" : "fade-out"}`}>
        {loadedImages.includes(images[nextIndex].src) && (
          <img src={images[nextIndex].src} alt={images[nextIndex].alt} />
        )}
      </div>
    </div>
  );
};

export default SVGContainerMultifade;
