import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faPhoneAlt,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import Target from "../components/utils/Target";

export interface ContactMethod {
  icon?: IconDefinition;
  heading: string;
  linkText: string;
  linkTitle: string;
  linkURL: string;
  linkID: string;
  linkTarget?: Target;
}

export const contactMethods: ContactMethod[] = [
  {
    icon: faEnvelope,
    heading: "Email",
    linkText: "keith.ratner@gmail.com",
    linkTitle: "Email Keith Ratner",
    linkURL: "mailto:keith.ratner@gmail.com",
    linkID: "email-link",
    linkTarget: Target.Blank,
  },
  {
    icon: faPhoneAlt,
    heading: "Phone",
    linkText: "+1 650-516-7281",
    linkTitle: "Call Keith Ratner",
    linkURL: "tel:+16505167281",
    linkID: "phone-link",
    linkTarget: Target.Blank,
  },
  {
    icon: faGlobe,
    heading: "Website",
    linkText: "https://kratner.github.io/portfolio-site",
    linkTitle: "Keith Ratner's Portfolio Site",
    linkURL: "https://kratner.github.io/portfolio-site",
    linkID: "website-link",
    linkTarget: Target.Blank,
  },
];
