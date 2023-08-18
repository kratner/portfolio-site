import React from "react";

interface PanelContent {
  heading: string;
  body: string;
  cta1: string;
  cta2: string;
}

interface FeaturesListProps {
  panels: PanelContent[];
}

const FeaturesList: React.FC<FeaturesListProps> = ({ panels }) => {
  return (
    <div className="features-list">
      {panels.map((panel, index) => (
        <div key={index} className="panel">
          <h2>{panel.heading}</h2>
          <p>{panel.body}</p>
          <button>{panel.cta1}</button>
          <button>{panel.cta2}</button>
        </div>
      ))}
    </div>
  );
};

export default FeaturesList;
