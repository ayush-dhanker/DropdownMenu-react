import React from "react";
import Navbar from "./Navbar";

const App = () => {
  return (
    <header>
      <div className="nav-area">
        <a href="/#" className="logo">
          <img src={require("../dropdown.jpg")} className="droplogo" />
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default App;
