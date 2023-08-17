import React, { ImgHTMLAttributes } from "react";

interface HeroHeaderProps {
  headingText: string;
  bodyText: string;
  heroImage: ImgHTMLAttributes<HTMLImageElement> & { alt: string };
}

const HeroHeader: React.FC<HeroHeaderProps> = ({
  headingText,
  bodyText,
  heroImage,
}) => {
  const { alt, ...imgProps } = heroImage;
  return (
    <React.Fragment>
      <span>
        <h2>{headingText}</h2>
        <p>{bodyText}</p>
      </span>
      <span>
        <img {...imgProps} alt={alt} />
      </span>
    </React.Fragment>
  );
};

export default HeroHeader;
