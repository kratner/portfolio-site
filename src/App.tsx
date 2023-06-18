// import logo from "./logo.svg";
import "./styles/main.scss";

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CrossFadeImages from "./components/wrappers/CrossFadeImages";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <CrossFadeImages />        
      </main>
      <Footer />
    </div>
  );
};

export default App;
