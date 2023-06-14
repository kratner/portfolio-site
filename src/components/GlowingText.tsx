import React from "react";
// import './GlowingText.css';

interface GlowingTextProps {
  textContent: string;
}

const GlowingText: React.FC<GlowingTextProps> = ({ textContent }) => {
  return <div className="glowing-text logo-text">{textContent}</div>;
};

export default GlowingText;
