import React, { Component } from "react";
import Graph from "./components/Graph.js";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      file: null,
      fileLoaded: false
    };

    this.fileInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("file", this.state.file, this.state.file.name);

    axios.post("/getFile", data).then(res => {
      console.log("success");
    });
  }

  handleChange(e) {
    console.log(e.target.files[0]);
    this.setState({ file: e.target.files[0] });
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
                onChange={this.handleChange}
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
