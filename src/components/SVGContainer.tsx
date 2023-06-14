import React from "react";

interface SVGContainerProps {
  src: string | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
  alt?: string;
}

const SVGContainer: React.FC<SVGContainerProps> = ({ src, className, alt }) => {
  if (typeof src === "string") {
    return (
      <div className={className}>
        <img src={src} alt={alt} />
      </div>
    );
  }

  const SvgComponent = src;

  return (
    <div className={className}>
      <SvgComponent role="img" aria-label={alt} />
    </div>
  );
};

export default SVGContainer;
