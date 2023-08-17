import React from "react";
import RemoteImageCrossFader from "./RemoteImageCrossFader";
import ImageCrossFader from "./ImageCrossFader";

const CrossFadeImages: React.FC = () => {
  const images = [
    {
      src: "https://kratner.github.io/portfolio-site/images/moeba-white.svg",
      alt: "Moeba",
    },
    {
      src: "https://kratner.github.io/portfolio-site/images/zipper.svg",
      alt: "Zipper",
    },
    {
      src: "https://kratner.github.io/portfolio-site/images/horn.svg",
      alt: "Horn",
    },
    {
      src: "https://kratner.github.io/portfolio-site/images/portal.svg",
      alt: "Portal",
    },
    {
      src: "https://kratner.github.io/portfolio-site/images/vampyre.svg",
      alt: "Vampyre",
    },
    {
      src: "https://kratner.github.io/portfolio-site/images/shaman.svg",
      alt: "Shaman",
    },
  ];

  return (
    <div>
      <RemoteImageCrossFader images={images} transitionDuration={1000} />
    </div>
  );
};

export default CrossFadeImages;
