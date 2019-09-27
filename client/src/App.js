import React, { Component } from "react";
import Graph from "./components/Graph.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      file: [],
      fileLoaded: false
    };

    this.fileInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const uploadFile = file => {
      fetch("https://localhost:8082/getFile", {
        method: "POST",
        body: file
      })
        .then(response => response.json())
        .then(success => {
          console.log("success");
        })
        .catch(error => console.log(error));
    };
    uploadFile(this.fileInput.current.files);
  }

  render(props) {
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
          <form onSubmit={this.handleSubmit}>
            <div className="file_input_wrapper">
              <button className="file_input">Upload A File</button>
              <input
                ref={this.fileInput}
                type="file"
                name="fileInput"
                id="fileInput"
              />
            </div>
            <div className="file_input_wrapper">
              <button className="file_input">Submit</button>
              <input type="submit" name="submit" value="submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
