import React, { useState } from "react";

const PopupWindow = ({
  linkText,
  linkTitle,
  popupContent: PopupContent,
  width,
  height,
  border,
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
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // backgroundColor: "#fff",
    // borderRadius: "8px",
    // padding: "20px",
    zIndex: 10000,
    border: border || "none",
  };

  const closeButtonStyle = {
    position: "fixed",
    right: "5%",
    top: "5%",
  };

  return (
    <div>
      <a href="#" title={linkTitle} onClick={openPopup}>
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
              title="Close"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupWindow;
