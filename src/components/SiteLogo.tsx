import React from "react";

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  url?: string;
}

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt?: string; // Make the alt attribute optional
}

const SiteLogo: React.FC<{
  anchorProps: AnchorProps;
  imageProps: ImageProps;
}> = ({ anchorProps, imageProps }) => {
  return (
    <span className="site-logo">
      <a {...anchorProps}>
        <img {...imageProps} alt={imageProps.alt as string} />
      </a>
    </span>
  );
};

export default SiteLogo;
