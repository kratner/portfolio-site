import React, { useEffect, useState } from "react";
import { useImage } from "react-image";

interface SVGImageFaderProps {
  images: { src: string; alt: string }[];
  fadeDuration: number;
  preloaderSize: number;
  imageDirectory: string;
}

const SVGImageFader: React.FC<SVGImageFaderProps> = ({
  images,
  fadeDuration,
  preloaderSize,
  imageDirectory,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>([]);

  useEffect(() => {
    setLoaded(images.map(() => false));
  }, [images]);

  const handleImageLoad = (index: number) => {
    setLoaded((prevLoaded) => {
      const newLoaded = [...prevLoaded];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  const getNextIndex = () => {
    return (currentIndex + 1) % images.length;
  };

  const getNextImage = () => {
    const nextIndex = getNextIndex();
    return (
      <img
        src={`${imageDirectory}/${images[nextIndex].src}`}
        alt={images[nextIndex].alt}
        onLoad={() => handleImageLoad(nextIndex)}
      />
    );
  };

  const currentImage = loaded[currentIndex] ? (
    <img
      src={`${imageDirectory}/${images[currentIndex].src}`}
      alt={images[currentIndex].alt}
      onLoad={() => handleImageLoad(currentIndex)}
      className="fade-in"
    />
  ) : null;

  const nextImage = loaded[getNextIndex()] ? getNextImage() : null;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(getNextIndex());
    }, fadeDuration);
    return () => clearInterval(interval);
  }, [currentIndex, getNextIndex, fadeDuration]);

  return (
    <div className="svg-image-fader">
      <div
        className="preloader"
        style={{
          width: `${preloaderSize}px`,
          height: `${preloaderSize}px`,
        }}
      />
      <div className="image-container">
        {currentImage}
        {nextImage}
      </div>
    </div>
  );
};

export default SVGImageFader;
