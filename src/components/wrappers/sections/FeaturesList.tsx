import React from "react";

interface PanelContent {
  heading?: string;
  body: string;
  cta1?: string;
  cta2?: string;
  image?: ImageWithSrc;
}

interface ImageWithSrc extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

interface FeaturesListProps {
  panels: PanelContent[];
  initialHeading?: string;
}

const FeaturesList: React.FC<FeaturesListProps> = ({
  panels,
  initialHeading,
}) => {
  const resolveImageUrl = (src: string) => {
    return `${process.env.PUBLIC_URL}${src}`;
  };

  return (
    <div className="features-list">
      {initialHeading && <h2 className="initial-heading">{initialHeading}</h2>}
      {panels.map((panel, index) => (
        <div key={index} className="panel">
          {panel.image && (
            <div className="panel-image">
              <img
                {...panel.image}
                src={resolveImageUrl(panel.image.src)}
                alt={panel.image.alt || `Panel ${index + 1}`}
              />
            </div>
          )}
          {panel.heading && <h3 className="panel-heading">{panel.heading}</h3>}
          <p className="panel-body">{panel.body}</p>
          {panel.cta1 || panel.cta2 ? (
            <div className="cta">
              {panel.cta1 && <button>{panel.cta1}</button>}
              {panel.cta2 && <button>{panel.cta2}</button>}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default FeaturesList;
