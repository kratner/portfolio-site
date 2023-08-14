// import logo from "./logo.svg";
import "./styles/main.scss";

import React, { useState } from "react";
import Header from "./components/wrappers/Header";
import Footer from "./components/wrappers/Footer";
// import AnimatedSVG from "./components/AnimatedSVG";
// import AnimatedSVGLoop from "./components/AnimatedSVGLoop";
import SVGFileLoader from "./components/svg/SVGFileLoader";
import SVGViewer from "./components/svg/SVGViewer";
import SVGEffect from "./components/svg/SVGEffect";
import Preloader from "./components/svg/SVGPreloader";

const App:React.FC = () => {

  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const handleSvgLoaded = (content: string | null) => {
    setSvgContent(content);
    setLoading(false);
  };
  const handleSvgLoading = () => {
    setLoading(true);
    // show preloader
    // debugger;
  }

  const currentYear = new Date().getFullYear();
  // const captionTitle = `“Shaman”`
  const captionDescription = `&copy; Keith Ratner ${currentYear}`;

  return (
    <div>
      <h2 className="title">Keith Ratner</h2>
      <Header />
      <main>
        {isLoading && <Preloader indeterminateAnimationDuration="1s" strokeWidth={400} />}
        {/* <Preloader indeterminateAnimationDuration="1s" strokeWidth={400} /> */}
        <SVGFileLoader src="https://kratner.github.io/portfolio-site/images/portal.svg" onLoading={handleSvgLoading} onLoaded={handleSvgLoaded} />
        {!isLoading && <SVGViewer svgContent={svgContent} />}
        {/* <SVGEffect svgContent={svgContent} targetElements={['.element-class']} effectClass="my-effect" /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
