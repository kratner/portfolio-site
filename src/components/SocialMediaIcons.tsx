import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

interface SocialMediaLink {
  name: string;
  icon: any;
  url: string;
}

const socialMediaLinks: SocialMediaLink[] = [
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

interface SocialMediaIconsProps {
  size: string;
  color: string;
}

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({ size, color }) => {
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
            size={size as any}
            style={{ color }}
            aria-label={link.name}
            className="socialMediaIcon"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
