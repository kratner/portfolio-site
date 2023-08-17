import React from "react";
import SiteLogo from "../SiteLogo";
import NavigationMenu from "../NavigationMenu";

const Header = () => {
  const anchorProps = {
    href: "/portfolio-site",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Keith Ratner",
    className: "logo-link",
  };

  const imageProps = {
    src: "portfolio-site/images/keith_ratner_white.svg", // Use the imported logoImage directly
    alt: "Keith Ratner", // Empty string for decorative image
    width: 200,
    height: 100,
    className: "logo-image",
  };

  return (
    <header className="header-container">
      <SiteLogo anchorProps={anchorProps} imageProps={imageProps} />
      <NavigationMenu />
    </header>
  );
};

export default Header;
