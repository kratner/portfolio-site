// import logo from "./logo.svg";
import "./styles/main.scss";

import React from "react";
import Header from "./components/wrappers/Header";
import Footer from "./components/wrappers/Footer";
// import CrossFadeImages from "./components/wrappers/CrossFadeImages";
// import AnimatedSVG from "./components/AnimatedSVG";
import SVGEffectWrapper from "./components/wrappers/SVGEffectWrapper";
// import ParallaxHome from "./components/wrappers/ParallaxHome"

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <SVGEffectWrapper />
        {/* <ParallaxHome /> */}
        {/* <AnimatedSVG svgPath="../assets/images/moeba-white.svg" targetElement="path" /> */}
        {/* <AnimatedSVG 
          svgPath="https://kratner.github.io/portfolio-site/images/moeba-white.svg" 
          targetElements={["path"]} 
          fadeInDuration="1s"
          fadeOutDuration=".75s"
        /> */}
        {/* <CrossFadeImages />         */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
