import React from "react";

const FullScreenImage = ({ imageUrl }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img src={imageUrl} style={{ maxWidth: "100%", maxHeight: "100%" }} />
    </div>
  );
};

export default FullScreenImage;
