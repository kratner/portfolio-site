import React, { useState, ReactNode, CSSProperties } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PopupWindowProps {
  linkText: string | ReactNode;
  linkTitle: string | undefined;
  popupContent: React.ComponentType;
  width?: string;
  height?: string;
  border?: string;
  background?: string;
  url?: string;
}

const PopupWindow: React.FC<PopupWindowProps> = ({
  linkText,
  linkTitle,
  popupContent: PopupContent,
  width,
  height,
  border,
  background,
  url,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const overlayStyle: CSSProperties = {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
  };

  const contentStyle: CSSProperties = {
    width: width || "auto",
    height: height || "auto",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 10000,
    border: border || "none",
  };

  const closeButtonStyle: CSSProperties = {
    position: "fixed",
    right: "2%",
    top: "2%",
  };

  return (
    <React.Fragment>
      <a href={url} title={linkTitle} onClick={openPopup}>
        {typeof linkText === "string" ? linkText : <span>{linkText}</span>}
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
    </React.Fragment>
  );
};

export default PopupWindow;
