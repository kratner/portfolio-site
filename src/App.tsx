// import logo from "./logo.svg";
import "./styles/main.scss";

import React from "react";
import Header from "./components/wrappers/Header";
import Footer from "./components/wrappers/Footer";
import AnimatedSVG from "./components/AnimatedSVG";

const App:React.FC = () => {
  return (
    <div>
      <h2 className="title">Keith Ratner</h2>
      <Header />
      <main>
        <AnimatedSVG 
          svgPath="https://kratner.github.io/portfolio-site/images/moeba-white.svg" 
          targetElements={["path"]} 
          fadeInDuration="1s"
          fadeOutDuration=".75s"
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
