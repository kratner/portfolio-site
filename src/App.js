// import logo from "./logo.svg";
import "./styles/main.scss";

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import FullScreenImage from "./components/FullScreenImage";
import SvgContainer from "./components/SVGContainer";
import externalSVG from "./assets/moeba-white.svg";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        {/* <div className="content">variable content</div> */}
        {/* <Slideshow images={Images.imageUrls} /> */}
        {/* <FullScreenImage
          altText="Moeba by Keith Ratner"
          imageUrl="https://keithratner.live/wp-content/uploads/2023/05/moeba-lr-wide-1600x764-1.jpg"
        /> */}
        <SvgContainer
          src={externalSVG}
          className="fullscreen-svg"
          alt="Moeba by Keith Ratner"
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
