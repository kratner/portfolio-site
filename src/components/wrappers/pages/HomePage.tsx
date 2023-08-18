import React from "react";
import Section from "../Section";
import HeroHeader from "../sections/HeroHeader";
import IntersectionObserverComponent from "../../IntersectionObserverComponent";

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <Section className="hero-header">
        <HeroHeader
          headingText="Transforming ideas into captivating experiences"
          bodyText="With a passion for creativity and a keen eye for detail, Keith Ratner brings a unique perspective to each and every new project."
          heroImage={{
            src: `${process.env.PUBLIC_URL}/images/moeba-lr-1080p.jpg`,
            alt: "Keith Ratner's Artwork",
            className: "hero-image",
          }}
        />
      </Section>

      <div
        className="target-item"
        style={{
          height: "400px",
          background: "#ccc",
        }}
      >
        panel 3
      </div>

      <IntersectionObserverComponent
        targetSelector=".target-item"
        className="visible"
      />
    </React.Fragment>
  );
};

export default HomePage;
