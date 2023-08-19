import React from "react";

interface PanelContent {
  heading: string;
  body: string;
  cta1?: string; // Mark cta1 and cta2 as optional
  cta2?: string;
}

interface FeaturesListProps {
  panels: PanelContent[];
}

const FeaturesList: React.FC<FeaturesListProps> = ({ panels }) => {
  return (
    <div className="features-list">
      {panels.map((panel, index) => (
        <div key={index} className="panel">
          <h2 className="panel-heading">{panel.heading}</h2>
          <p className="panel-body">{panel.body}</p>
          {panel.cta1 || panel.cta2 ? ( // Render CTAs div only if at least one CTA is provided
            <div className="cta">
              {panel.cta1 && <button>{panel.cta1}</button>}{" "}
              {/* Render CTA1 button if provided */}
              {panel.cta2 && <button>{panel.cta2}</button>}{" "}
              {/* Render CTA2 button if provided */}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default FeaturesList;
