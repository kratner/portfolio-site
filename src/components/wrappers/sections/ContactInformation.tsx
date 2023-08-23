import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorClosed } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import IconSize from "../../utils/IconSize";

export interface ContactMethod {
  heading: string;
  linkText: string;
  linkTitle: string;
  linkURL: string;
  linkID: string;
  linkTarget?: string;
  icon?: IconProp | undefined;
  iconSize?: IconSize;
}

interface ContactInformationProps {
  primaryHeading: string;
  bodyText: string;
  contactMethods: ContactMethod[];
  iconSize?: IconSize;
}

const ContactInformation: React.FC<ContactInformationProps> = ({
  primaryHeading,
  bodyText,
  contactMethods,
  iconSize = "1x",
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
        {contactMethods.map((contactMethod, index) => (
          <div className="contact-method" key={index}>
            {contactMethod.icon && (
              <div className="contact-method-icon">
                <FontAwesomeIcon
                  icon={contactMethod.icon || faDoorClosed}
                  size={contactMethod.iconSize}
                  //   style={{ color }}
                  // aria-label={contactMethod.title}
                  className="nav-icon"
                />
              </div>
            )}
            <div className="contact-method-text">
              {contactMethod.heading && (
                <div className="contact-method-heading">
                  <h3>{contactMethod.heading}</h3>
                </div>
              )}
              {contactMethod.linkURL && (
                <div className="contact-method-link">
                  <a
                    href={contactMethod.linkURL}
                    title={contactMethod.linkTitle}
                    target={
                      contactMethod.linkTarget ? contactMethod.linkTarget : ""
                    }
                    rel="noopener noreferrer"
                    id={contactMethod.linkID}
                  >
                    {contactMethod.linkText}
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInformation;
