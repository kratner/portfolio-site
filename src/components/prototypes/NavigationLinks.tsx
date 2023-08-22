import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faCode,
  faEnvelope,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import PopupWindow from "../PopupWindow";
import YouTubePlaylist from "../YouTubePlaylist";

interface NavigationLinksProps {
  size: string;
  color?: string;
}

const NavigationLinks: React.FC<NavigationLinksProps> = ({ size, color }) => {
  return (
    <nav>
      <ul className="nav">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://keithratner.live/shop/"
            title="Shop for My Artwork!"
          >
            <FontAwesomeIcon
              icon={faStore}
              size={size as any}
              className="nav-icon"
            />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://optionexplicit.live"
            title="Visit My VBA Code Library"
          >
            <FontAwesomeIcon
              icon={faCode}
              size={size as any}
              className="nav-icon"
            />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://keithratner.live/about/#contactme"
            title="Contact Me"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              size={size as any}
              className="nav-icon"
            />
          </a>
        </li>
        <li>
          <PopupWindow
            linkText={
              <FontAwesomeIcon
                icon={faMusic}
                size={size as any}
                className="nav-icon"
              />
            }
            linkTitle="My Music Videos"
            popupContent={() => (
              <YouTubePlaylist
                playlistID="PLvqe7VuhXJoScsg_frwUsvMwQ6J_9hKOS"
                width={82}
                height={82}
                iframeHeight={82}
                iframeWidth={82}
                iframeBorder="#59594b solid .01em"
                background="dfdfd01c"
              />
            )}
            width="80vw"
            height="80vh"
            border="0.1em solid rgba(147, 77, 77, 0.53)"
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavigationLinks;
