import React from "react";
import QRCode from "react-qr-code";
import Section from "../Section";
import HeroHeader from "../sections/HeroHeader";
import IntersectionObserverComponent from "../../IntersectionObserverComponent";
import featuresData from "../../../data/featuresData.json";
import servicesData from "../../../data/servicesData.json";
import portfolioListData from "../../../data/portfolioListData.json";
import testimonialsSliderData from "../../../data/testimonialsSliderData.json";
import artworkSliderData from "../../../data/artworkSliderData.json";
import ColumnarList from "../sections/ColumnarList";
import ContactInformation from "../sections/ContactInformation";
import { contactMethods } from "../../../data/contactData";
import YouTubePlaylist from "../../YouTubePlaylist";
import Slider from "../../Slider";

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
      <Section className="portfolio-list">
        <ColumnarList data={portfolioListData} />
      </Section>
      <Section className="artwork-slider">
        <Slider
          sliderHeading="Digital Prints"
          slides={artworkSliderData}
          // autoPlay={true}
          // autoPlayInterval={3000}
        />
      </Section>
      <Section className="youtube-playlist">
        <YouTubePlaylist
          className="youtube-playlist"
          heading="Keith Ratner's Music"
          position="relative"
          playlistID="PLvqe7VuhXJoScsg_frwUsvMwQ6J_9hKOS"
        />
      </Section>
      <Section className="testimonials-slider">
        <Slider
          slides={testimonialsSliderData}
          sliderHeading="Testimonials"
          sliderSubheading="Hear what they're saying about Keith"
        />
      </Section>
      <Section className="contact-information">
        <ContactInformation
          primaryHeading="Get in Touch"
          bodyText="We'd love to hear from you. Contact us for any inquiries or collaborations."
          contactMethods={contactMethods}
        />
      </Section>
      <Section className="qr-code">
        <QRCode value={siteUrl} size={100} />
      </Section>
      <IntersectionObserverComponent
        targetSelector="section.features-list, section.services .main-header, section.portfolio-list .main-header"
        className="visible"
        onIntersection={handleIntersection}
      />
      <IntersectionObserverComponent
        targetSelector="section.services .panel"
        className="visible"
        onIntersection={handleIntersection}
        threshold={0.2}
      />
      <IntersectionObserverComponent
        className="visible"
        targetSelector="section.portfolio-list .main-header, section.portfolio-list .panel"
        threshold={0.1}
        onIntersection={handleIntersection}
      />
      {/* un-comment this after we fix the slider */}
      <IntersectionObserverComponent
        className="visible"
        targetSelector="section.artwork-slider .slider-heading, section.artwork-slider .slider-container"
        threshold={0.1}
        onIntersection={handleIntersection}
      />
      <IntersectionObserverComponent
        className="visible"
        targetSelector="section.youtube-playlist .panel-heading, section.youtube-playlist .panel-subheading, section.youtube-playlist .youtube-playlist-container"
        onIntersection={handleIntersection}
        threshold={0.2}
      />
      <IntersectionObserverComponent
        className="visible"
        targetSelector="section.testimonials-slider .slider"
        onIntersection={handleIntersection}
        threshold={0.2}
      />
    </React.Fragment>
  );
};

export default HomePage;
