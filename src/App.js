// import logo from "./logo.svg";
import "./styles/main.scss";

import React from "react";
import Header from "./components/Header";
import Slideshow from "./components/Slideshow";
import Images from "./components/Images";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        {/* <div className="content">variable content</div> */}
        <Slideshow images={Images.imageUrls} />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default App;
