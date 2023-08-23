import React from "react";
import SiteLogo from "../SiteLogo";
import NavigationMenu from "./sections/NavigationMenu";
import IconSize from "../utils/IconSize";
import { links } from "../../data/linkData";

const Header = () => {
  const anchorProps = {
    href: "/",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Keith Ratner",
    className: "logo-link",
  };

  const imageProps = {
    src: `${process.env.PUBLIC_URL}/images/keith_ratner_white.svg`, // Use the imported logoImage directly
    alt: "Keith Ratner", // Empty string for decorative image
    width: 200,
    height: 100,
    className: "logo-image",
  };

  return (
    <header className="header-container">
      <SiteLogo anchorProps={anchorProps} imageProps={imageProps} />
      <NavigationMenu iconSize={IconSize.TwoTimes} links={links} />
    </header>
  );
};

export default Header;
