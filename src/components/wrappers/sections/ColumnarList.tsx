import React from "react";

interface ImageWithSrc extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

interface Panel {
  image?: ImageWithSrc;
  imageSrc?: string;
  imageAlt?: string;
  category?: string;
  heading: string;
  subHeading?: string;
  bodyText: string;
  avatarImgSrc?: string;
  avatarImgAlt?: string;
  authorName?: string;
  postDate?: string;
  readingTime?: string;
  linkText?: string;
  linkUrl?: string;
}

interface Project {
  primaryHeading?: string;
  subHeading?: string;
  bodyText?: string;
  panels?: Panel[];
}

interface ColumnarListProps {
  data: Project[];
}

const ColumnarList: React.FC<ColumnarListProps> = ({ data }) => {
  const PUBLIC_URL = process.env.PUBLIC_URL;
  return (
    <div className="columnar-list">
      {data.map((project, index) => (
        <div className="columnar-item" key={index}>
          {project.primaryHeading || project.subHeading ? (
            <div className="main-header">
              {project.primaryHeading && <h2>{project.primaryHeading}</h2>}
              {project.subHeading && <h3>{project.subHeading}</h3>}
            </div>
          ) : null}
          {project.bodyText && (
            <div className="main-body-text">
              <p>{project.bodyText}</p>
            </div>
          )}
          {project.panels && (
            <div className="panels">
              {project.panels.map((panel, panelIndex) => (
                <div className="panel" key={panelIndex}>
                  {panel.image?.alt || panel.image?.src ? (
                    <div className="panel-image">
                      <img
                        src={(PUBLIC_URL ?? "") + (panel.image.src ?? "")}
                        alt={panel.imageAlt}
                      />
                    </div>
                  ) : null}
                  {panel.category && (
                    <div className="panel-category">
                      <h6>{panel.category}</h6>
                    </div>
                  )}
                  {panel.heading && (
                    <div className="panel-heading">
                      <h3 className="panel-heading">{panel.heading}</h3>
                    </div>
                  )}
                  {panel.subHeading && (
                    <div className="panel-subheading">
                      <h5>{panel.subHeading}</h5>
                    </div>
                  )}
                  {panel.bodyText && (
                    <div className="panel-content">
                      <p>{panel.bodyText}</p>
                    </div>
                  )}
                  {panel.linkUrl && (
                    <div className="panel-links">
                      <p>
                        <a href={panel.linkUrl}>{panel.linkText}</a>
                      </p>
                    </div>
                  )}
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
                      {panel.authorName ||
                      panel.postDate ||
                      panel.readingTime ? (
                        <div className="panel-author-meta">
                          {panel.authorName && (
                            <p className="panel-author-name">
                              {panel.authorName}
                            </p>
                          )}
                          {panel.postDate || panel.readingTime ? (
                            <p>
                              {panel.postDate && (
                                <span className="panel-post-date">
                                  {panel.postDate + " • "}
                                </span>
                              )}
                              {panel.readingTime && (
                                <span className="panel-reading-time">
                                  {panel.readingTime}
                                </span>
                              )}
                            </p>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ColumnarList;
