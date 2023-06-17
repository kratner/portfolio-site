import React, { useEffect, useRef, useState } from "react";

interface ImageCrossFaderProps {
  images: { src: string; alt: string }[];
  transitionDuration: number;
}

const ImageCrossFader: React.FC<ImageCrossFaderProps> = ({ images, transitionDuration }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [isFading, setIsFading] = useState(false);
  const initialRenderRef = useRef(true);
  const nextImageIndex = (currentImageIndex + 1) % images.length;
  const currentImage = images[currentImageIndex];
  const nextImage = images[nextImageIndex];
  const fadeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((image) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.src = process.env.PUBLIC_URL + "/images/" + image.src;
        });
      });

      try {
        await Promise.all(imagePromises);
        setLoadedImages(images.map((image) => image.src));
      } catch (error) {
        console.error("Failed to preload images", error);
      }
    };

    preloadImages();
  }, [images]);

  useEffect(() => {
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      return;
    }

    const fadeTimeout = window.setTimeout(() => {
      setIsFading(true);
      fadeTimeoutRef.current = window.setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setIsFading(false);
      }, transitionDuration);
    }, transitionDuration);

    return () => {
      clearTimeout(fadeTimeout);
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, [currentImageIndex, nextImageIndex, transitionDuration]);

  if (loadedImages.length === 0) {
    return null; // Return null or a loading indicator while images are being loaded
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
    >
      {loadedImages.map((image, index) => (
        <img
          key={index}
          src={process.env.PUBLIC_URL + "/images/" + image}
          alt={images[index].alt}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            opacity: isFading
              ? index === currentImageIndex || index === nextImageIndex
                ? 1
                : 0
              : index === currentImageIndex
              ? 1
              : 0,
            transition: `opacity ${transitionDuration}ms ease-in-out`,
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            objectFit: "cover",
            zIndex: index === currentImageIndex ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
};

export default ImageCrossFader;
