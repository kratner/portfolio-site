// import logo from "./logo.svg";
import "./styles/main.scss";
import React from "react";
import Header from "./components/wrappers/Header";
// import Footer from "./components/wrappers/Footer";

import HomePage from "./components/wrappers/pages/HomePage";
import GoogleAnalytics from "./components/utils/GoogleAnalytics";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <h1 className="title">Keith Ratner</h1>
      <main>
        <HomePage />
      </main>
      <GoogleAnalytics measurementId="G-DVMPHKN3X2" />
    </React.Fragment>
  );
};

export default App;
