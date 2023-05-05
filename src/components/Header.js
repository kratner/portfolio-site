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
          {/* <li>Home</li>
          <li>About</li>
          <li>Contact</li> */}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
