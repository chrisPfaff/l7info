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
        <div className="file_input_wrapper">
          <button className="file_input">Upload A File</button>
          <input type="file" name="fileInput" id="fileInput" />
        </div>
      </div>
    </div>
  );
}

export default App;
