// import logo from "./logo.svg";
import "./styles/main.scss";

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import FullScreenImage from "./components/FullScreenImage";
import ImageCrossFader from "./components/ImageCrossFader";
// import { ReactComponent as ExternalSVG } from "./assets/moeba-white.svg";
// import { ReactComponent as ExternalSVG2 } from "./assets/zipper.svg";
// import { ReactComponent as ExternalSVG3 } from "./assets/horn.svg";

const App = () => {

  const images = [
    { src: "moeba-white.svg", alt: "Moeba" },
    { src: "zipper.svg", alt: "Zipper" },
    { src: "horn.svg", alt: "Horn" },
    { src: "portal.svg", alt: "Portal"},
    { src: "vampyre.svg", alt: "Vampyre"},
    { src: "shaman.svg", alt: "Shaman"}
  ]
  
  return (
    <div>
      <Header />
      <main>
        <ImageCrossFader images={images} transitionDuration={2000} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
