import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import YouTubePlaylist from "./YouTubePlaylist";
import PopupWindow from "./PopupWindow";

interface PopupWindowProp {
  content?: React.ReactNode;
  iconSize?: string;
}

interface IconLink {
  icon?: any;
  url?: string;
  title?: string;
  popupWindow?: React.ReactNode;
  target?: "_self" | "_blank" | "_parent" | "_top";
}

const iconLinks: IconLink[] = [
  {
    title: "Follow me on Twitter",
    icon: faTwitter,
    url: "https://twitter.com/keithratner",
    target: "_blank",
  },
  {
    title: "View my Instagram",
    icon: faInstagram,
    url: "https://www.instagram.com/keithratner",
    target: "_blank",
  },
  {
    title: "Visit My VBA Code Library",
    icon: faCode,
    url: "https://optionexplicit.live",
    target: "_blank",
  },
  {
    title: "Shop for My Artwork!",
    icon: faStore,
    url: "https://keithratner.live/shop/",
    target: "_blank",
  },
  {
    title: "View my LinkedIn Profile",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/keithratner",
    target: "_blank",
  },
  {
    title: "Contact Me",
    icon: faEnvelope,
    url: "https://keithratner.live/about/#contactme",
    target: "_blank",
  },
  {
    icon: faMusic,
    title: "My Music Videos",
    popupWindow: (
      <PopupWindow
        linkText={
          <FontAwesomeIcon
            icon={faMusic}
            //   size={size}
            className="nav-icon"
          />
        }
        linkTitle="My Music Videos"
        popupContent={() => (
          <YouTubePlaylist
            playlistID="PLvqe7VuhXJoScsg_frwUsvMwQ6J_9hKOS"
            width={82}
            height={82}
            iframeHeight="82%"
            iframeWidth="82%"
            iframeBorder="#59594b solid .01em"
            background="dfdfd01c"
          />
        )}
        width="80vw"
        height="80vh"
        border="0.1em solid rgba(147, 77, 77, 0.53)"
      />
    ),
  },
  // ... (other links)
];

interface IconLinkProps {
  size: string;
  color?: string;
}

const IconLinks: React.FC<IconLinkProps> = ({ size, color }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className="nav">
      <input
        type="checkbox"
        id="nav-toggle"
        className="nav-toggle"
        checked={isNavOpen}
        onChange={toggleNav}
      />
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
      <ul className={`nav-list ${isNavOpen ? "show" : ""}`}>
        {iconLinks.map((link) => (
          <li key={link.title}>
            {link.popupWindow ? (
              <PopupWindow
                linkText={
                  <FontAwesomeIcon
                    icon={link.icon}
                    size={size as any}
                    className="nav-icon"
                  />
                }
                linkTitle={link.title}
                popupContent={() => (
                  <YouTubePlaylist
                    playlistID="PLvqe7VuhXJoScsg_frwUsvMwQ6J_9hKOS"
                    width={82}
                    height={82}
                    iframeHeight="82%"
                    iframeWidth="82%"
                    iframeBorder="#59594b solid .01em"
                    background="dfdfd01c"
                  />
                )}
                width="80vw"
                height="80vh"
                border="0.1em solid rgba(147, 77, 77, 0.53)"
              />
            ) : (
              <a
                href={link.url}
                rel="noopener noreferrer"
                target={link.target}
                title={link.title}
              >
                <FontAwesomeIcon
                  icon={link.icon}
                  size={size as any}
                  style={{ color }}
                  aria-label={link.title}
                  className="nav-icon"
                />
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default IconLinks;
