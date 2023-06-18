import React from "react";
import GlowingText from "../GlowingText";
import NavigationLinks from "../NavigationLinks";

function Header() {
  return (
    <header>
      <GlowingText textContent="Keith Ratner" />
      <NavigationLinks size={"2x"} />
    </header>
  );
}

export default Header;
