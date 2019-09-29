import React, { Component } from "react";
import Chart from "chart.js";
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
            label: "Population Percentage",
            data: [12, 19, 3, 5, 2, 3, 4, 34, 4],
            backgroundColor: [
              "#D53963",
              "#D53963",
              "#D53963",
              "#D53963",
              "#D53963",
              "#D53963",
              "#D53963",
              "#D53963",
              "#D53963"
            ],
            borderColor: [
              "#422C77",
              "#422C77",
              "#422C77",
              "#422C77",
              "#422C77",
              "#422C77",
              "#422C77",
              "#422C77",
              "#422C77"
            ],
            borderWidth: 1
          },
          {
            label: "Benfords Percentage",
            data: [30.1, 17.6, 12.5, 9.7, 7.9, 6.7, 5.8, 5.1, 4.6],
            backgroundColor: [
              "#422C77",
              "#422C77",
              "#422C77",
              "#422C77",
              "#422C77",
              "#422C77",
              "#422C77",
              "#422C77",
              "#422C77"
            ],
            borderColor: [
              "#AA2F7B",
              "#AA2F7B",
              "#AA2F7B",
              "#AA2F7B",
              "#AA2F7B",
              "#AA2F7B",
              "#AA2F7B",
              "#AA2F7B",
              "#AA2F7B"
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
