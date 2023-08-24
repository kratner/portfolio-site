// linkData.ts
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faStore, faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Target from "../components/utils/Target";

export interface Link {
  icon?: IconDefinition;
  title: string;
  linktext: string;
  url: string;
  target?: Target;
}

export const links: Link[] = [
  {
    title: "View my LinkedIn Profile",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/keithratner",
    target: Target.Blank,
    linktext: "LinkedIn",
  },
  {
    title: "Visit My VBA Code Library",
    icon: faCode,
    url: "https://optionexplicit.live",
    target: Target.Blank,
    linktext: "VBA",
  },
  {
    title: "Shop for My Artwork!",
    icon: faStore,
    url: "https://keithratner.live/shop/",
    target: Target.Blank,
    linktext: "Shop",
  },
  {
    title: "Contact Me",
    icon: faEnvelope,
    url: "https://keithratner.live/about/#contactme",
    target: Target.Blank,
    linktext: "Contact",
  },
  {
    icon: faYoutube,
    title: "My Music Videos",
    url: "https://www.youtube.com/watch?v=CIPymPMCHdw&list=PLvqe7VuhXJoScsg_frwUsvMwQ6J_9hKOS&ab_channel=KeithRatner",
    target: Target.Blank,
    linktext: "Music",
  },
];
