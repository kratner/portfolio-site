import React, { useState } from "react";

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
} from "@fortawesome/free-solid-svg-icons";

interface Link {
  icon?: any;
  title: string;
  linktext: string;
  url: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
}

// interface NavigationMenuProps {
//   links: Link[];
// }

const links: Link[] = [
  {
    title: "Follow me on Twitter",
    icon: faTwitter,
    url: "https://twitter.com/keithratner",
    target: "_blank",
    linktext: "Twitter",
  },
  {
    title: "View my Instagram",
    icon: faInstagram,
    url: "https://www.instagram.com/keithratner",
    target: "_blank",
    linktext: "Insta",
  },
  {
    title: "Visit My VBA Code Library",
    icon: faCode,
    url: "https://optionexplicit.live",
    target: "_blank",
    linktext: "VBA Code",
  },
  {
    title: "Shop for My Artwork!",
    icon: faStore,
    url: "https://keithratner.live/shop/",
    target: "_blank",
    linktext: "Shop",
  },
  {
    title: "View my LinkedIn Profile",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/keithratner",
    target: "_blank",
    linktext: "LinkedIn",
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navigation-menu ${isOpen ? "open" : ""}`}>
      <div className="desktop-menu">
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url} title={link.title}>
                {link.linktext}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <button className="hamburger-button" onClick={toggleMenu}>
          ☰
        </button>
        <button className="menu-close-button" onClick={toggleMenu}>
          X
        </button>
        {isOpen && (
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.url} title={link.title}>
                  {link.linktext}
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
