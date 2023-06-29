// import logo from "./logo.svg";
import "./styles/main.scss";

import React from "react";
import Header from "./components/wrappers/Header";
import Footer from "./components/wrappers/Footer";
import AnimatedSVG from "./components/AnimatedSVG";

const App:React.FC = () => {
  const currentYear = new Date().getFullYear();
  const captionTitle = `“Moeba”`
  const captionDescription = `&copy; Keith Ratner ${currentYear}`;

  return (
    <div>
      <h2 className="title">Keith Ratner</h2>
      <Header />
      <main>
        <AnimatedSVG 
          svgPath="https://kratner.github.io/portfolio-site/images/moeba-white.svg" 
          targetElements={["path"]} 
          fadeInDuration=".1ms"
          fadeOutDuration=".1ms"
          captionTitle={captionTitle}
          captionDescription={captionDescription}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
