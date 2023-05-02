// import logo from "./logo.svg";
import "./styles/main.scss";

import React from "react";

const App = () => {
  return (
    <div>
      <header>
        <div className="logo">logo (in header)</div>
      </header>
      <main>
        <div className="content">variable content</div>
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default App;
