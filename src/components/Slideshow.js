import React, { useState, useEffect } from "react";
import Images from "./Images";

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    setImageList(Images());
    const intervalId = setInterval(() => {
      setCurrentImageIndex(nextImageIndex);
      setNextImageIndex((nextImageIndex + 1) % imageList.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [nextImageIndex, imageList]);

  return (
    <div className="slideshow">
      {imageList.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          style={{
            opacity:
              index === currentImageIndex || index === nextImageIndex ? 1 : 0,
            transition: "opacity 2s ease-in-out",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      ))}
    </div>
  );
};

export default Slideshow;
