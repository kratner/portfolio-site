// import logo from "./logo.svg";
import "./styles/main.scss";

import React from "react";
import Header from "./components/Header";
import Slideshow from "./components/Slideshow";
import Images from "./components/Images";
import FullScreenImage from "./components/FullScreenImage";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        {/* <div className="content">variable content</div> */}
        {/* <Slideshow images={Images.imageUrls} /> */}
        <FullScreenImage imageUrl="https://keithratner.live/wp-content/uploads/2023/05/moeba-lr-wide-1600x764-1.jpg" />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
