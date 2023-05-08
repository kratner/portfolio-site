import React, { useState } from "react";

const PopupWindow = ({
  linkText,
  popupContent: PopupContent,
  width,
  height,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const overlayStyle = {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
  };

  const contentStyle = {
    width: width || "auto",
    height: height || "auto",
    position: "absolute",
    top: 0,
    left: 0,
    // transform: "translate(-50%, -50%)",
    // backgroundColor: "#fff",
    // borderRadius: "8px",
    // padding: "20px",
    zIndex: 10000,
  };

  const closeButtonStyle = {
    position: "fixed",
    right: "5%",
    top: "5%",
  };

  return (
    <div>
      <a href="#" onClick={openPopup}>
        {linkText}
      </a>

      {isOpen && (
        <div className="popup-container">
          <div style={overlayStyle} className="overlay" onClick={closePopup} />
          <div style={contentStyle} className="popup-content">
            <PopupContent />
            <button
              className="close-button"
              style={closeButtonStyle}
              onClick={closePopup}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupWindow;
