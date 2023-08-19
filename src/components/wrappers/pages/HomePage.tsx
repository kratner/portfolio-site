import React from "react";
import Section from "../Section";
import HeroHeader from "../sections/HeroHeader";
import IntersectionObserverComponent from "../../IntersectionObserverComponent";
import FeaturesList from "../sections/FeaturesList";
import featuresData from "../sections/featuresData.json";
import servicesData from "../sections/servicesData.json";

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
      <Section className="features-list">
        <FeaturesList panels={featuresData[0].panels} />
      </Section>
      <Section className="services">
        <FeaturesList
          panels={servicesData[0].panels}
          initialHeading={servicesData[0].primaryHeading}
        />
      </Section>

      <IntersectionObserverComponent
        targetSelector=".features-list"
        className="visible"
      />
    </React.Fragment>
  );
};

export default HomePage;
