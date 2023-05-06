import React from "react";

const SvgContainer = ({ src, alt, className }) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default SvgContainer;
