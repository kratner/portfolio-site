import React from "react";

interface Panel {
  imageSrc: string;
  imageAlt: string;
  heading: string;
  subHeading?: string;
  bodyText: string;
  linkText: string;
  linkUrl: string;
  cta1?: string;
  cta2?: string;
}

interface Project {
  primaryHeading?: string;
  subHeading?: string;
  bodyText?: string;
  panels: Panel[];
}

interface PortfolioListProps {
  data: Project[];
}

const PortfolioList: React.FC<PortfolioListProps> = ({ data }) => {
  return (
    <div className="portfolio-list">
      {data.map((project, index) => (
        <div className="portfolio-item" key={index}>
          {project.primaryHeading && (
            <div className="main-heading">
              <h2>{project.primaryHeading}</h2>
            </div>
          )}
          {project.subHeading && (
            <div className="main-subheading">
              <h3>{project.subHeading}</h3>
            </div>
          )}
          <div className="main-body-text">
            <p>{project.bodyText}</p>
          </div>
          <div className="panels">
            {project.panels.map((panel, panelIndex) => (
              <div className="panel" key={panelIndex}>
                <div className="panel-image">
                  <img
                    src={process.env.PUBLIC_URL + panel.imageSrc}
                    alt={panel.imageAlt}
                  />
                </div>
                <div className="panel-header">
                  <h4>{panel.heading}</h4>
                  {panel.subHeading && <h5>{panel.subHeading}</h5>}
                </div>
                <div className="panel-content">
                  <p>{panel.bodyText}</p>
                  <a href={panel.linkUrl}>{panel.linkText}</a>
                </div>
                {panel.cta1 || panel.cta2 ? (
                  <div className="cta">
                    {panel.cta1 && <button>{panel.cta1}</button>}
                    {panel.cta2 && <button>{panel.cta2}</button>}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioList;
