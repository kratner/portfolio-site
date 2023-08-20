import React from "react";

interface Panel {
  imageSrc: string;
  imageAlt: string;
  category?: string;
  heading: string;
  subHeading?: string;
  bodyText: string;
  avatarImgSrc?: string;
  avatarImgAlt?: string;
  authorName?: string;
  postDate?: string;
  readingTime?: string;
  linkText: string;
  linkUrl: string;
}

interface Project {
  primaryHeading: string;
  subHeading?: string;
  bodyText: string;
  panels: Panel[];
}

interface ColumnarListProps {
  data: Project[];
}

const ColumnarList: React.FC<ColumnarListProps> = ({ data }) => {
  return (
    <div className="columnar-list">
      {data.map((project, index) => (
        <div className="columnar-item" key={index}>
          <div className="main-header">
            <h2>{project.primaryHeading}</h2>
            {project.subHeading && <h3>{project.subHeading}</h3>}
          </div>
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
                  {panel.category && <h6>{panel.category}</h6>}
                  <h4>{panel.heading}</h4>
                  {panel.subHeading && <h5>{panel.subHeading}</h5>}
                </div>
                <div className="panel-content">
                  <p>{panel.bodyText}</p>
                  <a href={panel.linkUrl}>{panel.linkText}</a>
                </div>
                {panel.authorName && (
                  <div className="panel-author-information">
                    {panel.avatarImgSrc && (
                      <div className="panel-author-avatar">
                        <img
                          src={process.env.PUBLIC_URL + panel.avatarImgSrc}
                          alt={panel.avatarImgAlt}
                        />
                      </div>
                    )}
                    <div className="panel-author-meta">
                      <p className="panel-author-name">{panel.authorName}</p>
                      <p>
                        <span className="panel-post-date">
                          {panel.postDate}
                        </span>{" "}
                        •{" "}
                        <span className="panel-reading-time">
                          {panel.readingTime}
                        </span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColumnarList;
