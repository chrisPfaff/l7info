import React, { Component } from "react";
import Chart from "chart.js";
import Loading from "./Loading.js";
import "../App.css";

export default class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
    this.chartRef = React.createRef();
  }
  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");
    console.log(this.state.data);
    new Chart(myChartRef, {
      type: "bar",
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        datasets: [
          {
            label: "Percentage",
            data: [12, 19, 3, 5, 2, 3, 4, 34, 4],
            backgroundColor: [
              // "rgba(54, 162, 235, 0.2)",
              // "rgba(255, 99, 132, 0.2)",
              // "rgba(54, 162, 235, 0.2)",
              // "rgba(255, 206, 86, 0.2)",
              // "rgba(75, 192, 192, 0.2)",
              // "rgba(153, 102, 255, 0.2)",
              // "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              // "rgba(255,99,132,1)",
              // "rgba(54, 162, 235, 1)",
              // "rgba(255, 206, 86, 1)",
              // "rgba(75, 192, 192, 1)",
              // "rgba(153, 102, 255, 1)",
              // "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          },
          {
            label: "Benfords Percentage",
            data: [30.1, 17.6, 12.5, 9.7, 7.9, 6.7, 5.8, 5.1, 4.6],
            backgroundColor: [
              // "rgba(255, 99, 132, 0.2)",
              // "rgba(54, 162, 235, 0.2)",
              // "rgba(255, 206, 86, 0.2)",
              // "rgba(75, 192, 192, 0.2)",
              // "rgba(153, 102, 255, 0.2)",
              // "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              // "rgba(255,99,132,1)",
              // "rgba(54, 162, 235, 1)",
              // "rgba(255, 206, 86, 1)",
              // "rgba(75, 192, 192, 1)",
              // "rgba(153, 102, 255, 1)",
              // "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 40,
                callback: function(value) {
                  return value + "%";
                }
              },
              scaleLabel: {
                display: true,
                labelString: "Percentage"
              }
            }
          ]
        }
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
