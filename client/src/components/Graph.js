import React, { Component } from "react";
import Chart from "chart.js";

export default class Graph extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "bar",
      data: {
        //Bring in data
        labels: ["Jan", "Feb", "March", "April", "rosie"],
        datasets: [
          {
            label: "Sales",
            data: [200, 300, 500, 100, 600, 1000]
          },
          {
            label: "hero",
            data: [11, 2, 4]
          }
        ]
      },
      options: {
        //Customize chart options
      }
    });
  }
  render() {
    return (
      <div className="graph_holder">
        <div className="graph_stats">
          <canvas id="myChart" ref={this.chartRef} />
        </div>
      </div>
    );
  }
}
