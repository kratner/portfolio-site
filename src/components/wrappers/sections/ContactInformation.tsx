import React from "react";

export interface ContactMethod {
  heading: string;
  linkText: string;
  linkTitle: string;
  linkURL: string;
  linkID: string;
  linkTarget?: string;
}

interface ContactInformationProps {
  primaryHeading: string;
  bodyText: string;
  panels: ContactMethod[];
}

const ContactInformation: React.FC<ContactInformationProps> = ({
  primaryHeading,
  bodyText,
  panels,
}) => {
  return (
    <div className="contact-information">
      <div className="contact-meta">
        <div className="primary-heading">
          <h2>{primaryHeading}</h2>
        </div>
        <div className="body-text">
          <p>{bodyText}</p>
        </div>
      </div>
      <div className="contact-methods">
        {panels.map((panel, index) => (
          <div className="panel" key={index}>
            {panel.heading && (
              <div className="panel-heading">
                <h3>{panel.heading}</h3>
              </div>
            )}
            {panel.linkURL && (
              <div className="panel-content">
                <a
                  href={panel.linkURL}
                  title={panel.linkTitle}
                  target={panel.linkTarget ? panel.linkTarget : ""}
                  rel="noopener noreferrer"
                  id={panel.linkID}
                >
                  {panel.linkText}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInformation;
