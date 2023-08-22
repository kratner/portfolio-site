import React, { useState, useEffect } from "react";

import {
  faYoutube,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faStore,
  faCode,
  faEnvelope,
  faMusic,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Link {
  icon?: any;
  iconSize?: string;
  iconColor?: string;
  title: string;
  linktext: string;
  url: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
}

// interface NavigationMenuProps {
//   links: Link[];
// }
const ICON_SIZE = "2x";

const links: Link[] = [
  {
    title: "View my LinkedIn Profile",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/keithratner",
    target: "_blank",
    linktext: "LinkedIn",
  },
  {
    title: "Blog",
    icon: faBlog,
    url: "https://keithratner.live",
    target: "_blank",
    linktext: "KeithRatner.Live",
  },
  {
    title: "Visit My VBA Code Library",
    icon: faCode,
    url: "https://optionexplicit.live",
    target: "_blank",
    linktext: "VBA",
  },
  {
    title: "Shop for My Artwork!",
    icon: faStore,
    url: "https://keithratner.live/shop/",
    target: "_blank",
    linktext: "Shop",
  },
  {
    title: "Contact Me",
    icon: faEnvelope,
    url: "https://keithratner.live/about/#contactme",
    target: "_blank",
    linktext: "Contact",
  },
  {
    icon: faMusic,
    title: "My Music Videos",
    url: "https://www.youtube.com/watch?v=CIPymPMCHdw&list=PLvqe7VuhXJoScsg_frwUsvMwQ6J_9hKOS&ab_channel=KeithRatner",
    target: "_blank",
    linktext: "Music",
  },
];

const NavigationMenu: React.FC = () => {
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
          {`${isOpen ? "×" : "☰"}`}
        </button>
        {isOpen && (
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.url} title={link.title} target={link.target}>
                  <FontAwesomeIcon
                    icon={link.icon}
                    // size={ICON_SIZE}
                    size="1x"
                    //   size={size as any}
                    //   style={{ color }}
                    aria-label={link.title}
                    className="nav-icon"
                  />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavigationMenu;
