import React from "react";
import Graph from "./components/Graph.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img
          className="header_logo"
          src="https://www.l7informatics.com/wp-content/uploads/2018/05/logo.png"
          alt="l7informatics logo"
        />
      </header>
      <div className="body">
        <Graph />
      </div>
    </div>
  );
}

export default App;
