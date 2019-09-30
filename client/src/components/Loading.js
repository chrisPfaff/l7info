import React, { Component } from "react";
import "../App.css";
export default class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <img
          className="loading_img"
          src="https://www.l7informatics.com/wp-content/uploads/2018/05/icon1.png"
          alt="loading logo"
        />
      </div>
    );
  }
}
