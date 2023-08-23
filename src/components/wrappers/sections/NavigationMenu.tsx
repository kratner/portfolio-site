import React, { useState, useEffect } from "react";

import {
  faYoutube,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faClose,
  faStore,
  faCode,
  faEnvelope,
  faMusic,
  faBlog,
  faDoorClosed,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import IconSize from "../../utils/IconSize";
import Target from "../../utils/Target";

interface NavigationMenuProps {
  iconSize: IconSize;
  links: Link[];
}

interface Link {
  icon?: IconProp | undefined;
  iconSize?: string;
  iconColor?: string;
  title: string;
  linktext: string;
  url: string;
  target?: Target;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ iconSize, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth > 768 /* Your breakpoint width */) {
      closeMenu();
    }
  };

  useEffect(() => {
    // Add event listener on component mount
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={`navigation-menu ${isOpen ? "open" : ""}`}>
      <div className="desktop-menu">
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url} title={link.title} target={link.target}>
                {link.linktext}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <button
          className="hamburger-button"
          onClick={toggleMenu}
          title={`${isOpen ? "Close Menu" : "Expand Menu"}`}
        >
          {/* {`${isOpen ? "×" : "☰"}`} */}
          {isOpen ? (
            <FontAwesomeIcon icon={faClose} size={iconSize} />
          ) : (
            <FontAwesomeIcon icon={faBars} size={iconSize} />
          )}
        </button>
        <ul className={`${isOpen ? "open" : ""}`}>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url} title={link.title} target={link.target}>
                <FontAwesomeIcon
                  icon={link.icon || faDoorClosed}
                  size={iconSize}
                  //   size={size as any}
                  //   style={{ color }}
                  aria-label={link.title}
                  className="nav-icon"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationMenu;
