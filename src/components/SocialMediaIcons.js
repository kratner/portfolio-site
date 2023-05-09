import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  //   faFacebook,
  faYoutube,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const socialMediaLinks = [
  //   {
  //     name: "Facebook",
  //     icon: faFacebook,
  //     url: "https://www.facebook.com/",
  //   },
  {
    name: "Follow me on Twitter",
    icon: faTwitter,
    url: "https://twitter.com/keithratner",
  },
  {
    name: "View my Instagram",
    icon: faInstagram,
    url: "https://www.instagram.com/keithratner",
  },
  {
    name: "Watch my Music Videos",
    icon: faYoutube,
    url: "https://youtube.com/playlist?list=PLvqe7VuhXJoScsg_frwUsvMwQ6J_9hKOS",
  },
  {
    name: "View my LinkedIn Profile",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/keithratner",
  },
  // Add more social media links here
];

const SocialMediaIcons = ({ size, color }) => {
  return (
    <div className="social-media-icons">
      {socialMediaLinks.map((link) => (
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          key={link.name}
          title={link.name}
        >
          <FontAwesomeIcon
            icon={link.icon}
            size={size}
            style={{ color: color }}
            aria-label={link.name}
            className="socialMediaIcon"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
