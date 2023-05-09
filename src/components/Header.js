import React from "react";
import GlowingText from "./GlowingText";
import PopupWindow from "./PopupWindow";
import YouTubePlaylist from "./YouTubePlaylist";
// import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <GlowingText textContent="Keith Ratner" />
      {/* <div className="kr">Keith Ratner</div> */}
      <nav>
        <ul className="nav">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://keithratner.live/shop/"
              title="Shop for My Artwork!"
            >
              Store
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://optionexplicit.live"
              title="Visit My VBA Code Library"
            >
              VBA?!
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://keithratner.live/about/#contactme"
              title="Contact Me"
            >
              Contact
            </a>
          </li>
          <li>
            <PopupWindow
              linkText="Music!"
              linkTitle="My Music Videos"
              popupContent={() => (
                <YouTubePlaylist
                  playlistID="PLvqe7VuhXJoScsg_frwUsvMwQ6J_9hKOS"
                  width="80vw"
                  height="80vh"
                />
              )}
              width="80vw"
              height="80vh"
              border="#fff .1em solid"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
