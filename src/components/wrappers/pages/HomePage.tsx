import React from "react";
import QRCode from "react-qr-code";
import Section from "../Section";
import HeroHeader from "../sections/HeroHeader";
import IntersectionObserverComponent from "../../IntersectionObserverComponent";
import featuresData from "../sections/featuresData.json";
import servicesData from "../sections/servicesData.json";
import portfolioListData from "../sections/portfolioListData.json";
import ColumnarList from "../sections/ColumnarList";
import ContactInformation from "../sections/ContactInformation";
import contactData from "../sections/contactData.json";

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
        <ColumnarList data={featuresData} />
      </Section>
      <Section className="services">
        <ColumnarList data={servicesData} />
      </Section>
      <Section className="portfolio-list full-width">
        {/* <PortfolioList data={portfolioListData} /> */}
        <ColumnarList data={portfolioListData} />
      </Section>
      <Section className="qr-code">
        <QRCode value={siteUrl} size={100} />
      </Section>
      <Section className="contact-information">
        <ContactInformation data={contactData} />
      </Section>
      <IntersectionObserverComponent
        targetSelector="section.features-list, section.services .main-header, section.services .panel"
        className="visible"
        onIntersection={handleIntersection}
      />
      <IntersectionObserverComponent
        className="visible"
        targetSelector="section.portfolio-list .main-header, section.portfolio-list .panel"
        threshold={0.25}
        onIntersection={handleIntersection}
      />
    </React.Fragment>
  );
};

export default HomePage;
