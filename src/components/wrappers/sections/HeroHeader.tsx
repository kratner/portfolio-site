import React, { ImgHTMLAttributes } from "react";

interface HeroHeaderProps {
  headingText: string;
  bodyText: string;
  heroImage?: ImgHTMLAttributes<HTMLImageElement> & { alt: string };
}

/*

background-image: url("/portfolio-site/images/moeba-lr-1080p.jpg");
background-size: cover;
background-repeat: no-repeat;
background-position-x: left;
background-position-y: bottom;


*/

const HeroHeader: React.FC<HeroHeaderProps> = ({
  headingText,
  bodyText,
  heroImage,
}) => {
  // const { alt, ...imgProps } = heroImage;
  const { ...imgProps } = heroImage;
  return (
    <div
      className="hero-header-container"
      style={{
        backgroundImage: `url(${imgProps.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
      }}
    >
      <div className="hero-header-content">
        <span>
          <h2>{headingText}</h2>
          <p>{bodyText}</p>
        </span>
        {/* <span>
          <img {...imgProps} alt={alt} />
        </span> */}
      </div>
    </div>
  );
};

export default HeroHeader;
