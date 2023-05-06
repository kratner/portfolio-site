import React from "react";
import GlowingText from "./GlowingText";
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
              About
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
        </ul>
      </nav>
    </header>
  );
}
export default Header;
