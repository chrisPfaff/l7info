import React, { Component } from "react";
import Chart from "chart.js";
import { hashFunction } from "../utils/hashFunction.js";
import { getBenfordsAvg } from "../utils/getBendfordsAvg.js";

import "../App.css";

export default class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this.chartRef = React.createRef();
  }

  populate() {
    const length = this.props.data.length;
    let populations = hashFunction(this.props.data);
    populations = getBenfordsAvg(populations, length);
    return populations;
  }

  componentDidMount() {
    const populations = this.populate();
    const myChartRef = this.chartRef.current.getContext("2d");
    new Chart(myChartRef, {
      type: "bar",
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        datasets: [
          {
            label: "Population Percentage",
            data: [
              populations["1"],
              populations["2"],
              populations["3"],
              populations["4"],
              populations["5"],
              populations["6"],
              populations["7"],
              populations["8"],
              populations["9"]
            ],
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
