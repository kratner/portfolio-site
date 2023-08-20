import React from "react";
import QRCode from "react-qr-code";
import Section from "../Section";
import HeroHeader from "../sections/HeroHeader";
import IntersectionObserverComponent from "../../IntersectionObserverComponent";
import FeaturesList from "../sections/FeaturesList";
import featuresData from "../sections/featuresData.json";
import servicesData from "../sections/servicesData.json";
import portfolioListData from "../sections/portfolioListData.json";
import PortfolioList from "../sections/PortfolioList";

const HomePage: React.FC = () => {
  const siteUrl = "https://kratner.github.io/portfolio-site/";
  const handleIntersection = (target: Element) => {
    target.classList.add("visible");
  };

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
      <Section className="portfolio-list">
        <PortfolioList data={portfolioListData} />
      </Section>
      <Section className="qr-code">
        <QRCode value={siteUrl} size={100} />
      </Section>
      <IntersectionObserverComponent
        targetSelector="section.features-list, section.services, section.portfolio-list .main-header"
        className="visible"
        onIntersection={handleIntersection}
      />
      <IntersectionObserverComponent
        className="visible"
        targetSelector="section.portfolio-list .panel"
        threshold={0.25}
        onIntersection={handleIntersection}
      />
    </React.Fragment>
  );
};

export default HomePage;
