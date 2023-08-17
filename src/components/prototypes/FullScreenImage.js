import React from "react";

const FullScreenImage = ({ imageUrl, altText }) => {
  return (
    <div
      className="fullscreen-image-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img
        alt={altText}
        className="fullscreen-image"
        src={imageUrl}
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
    </div>
  );
};

export default FullScreenImage;
