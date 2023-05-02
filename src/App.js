// import logo from "./logo.svg";
import "./styles/main.scss";

import React from "react";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="content">variable content</div>
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default App;
