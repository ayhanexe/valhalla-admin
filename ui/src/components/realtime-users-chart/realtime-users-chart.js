import { Component } from "react";
import { connect } from "react-redux";

import { Line } from "react-chartjs-2";
import { RealtimeUsersStyles as s } from "../styles";

class RealtimeUsersChart extends Component {
  constructor(props) {
    super(props);
    const labels = [
      "19:37:00",
      "19:37:01",
      "19:37:02",
      "19:37:03",
      "19:37:05",
      "19:37:06",
      "19:37:07",
      "19:37:08",
      "19:37:09",
      "19:37:10",
    ];
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      labels: labels,
      data: [...Array(10).keys()].map((item, index) => {
        return {
          x: labels[index],
          y: Math.floor(Math.random() * 60),
        };
      }),
    };
  }

  updateState() {
    this.setState(
      Object.assign(this.state, {
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      })
    );
  }

  componentDidMount() {
    this.resizeEvent = () => this.updateState();
    window.addEventListener("resize", this.resizeEvent);
    this.interval = setInterval(() => {
      const date = new Date();
      const time = `${
        date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
      }:${
        date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
      }.${
        date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
      }`;

      this.setState(
        Object.assign(this.state, {
          labels: this.state.labels.concat([time]),
          data: this.state.data.concat({
            x: time,
            y: Math.floor(Math.random() * 60),
          }),
        })
      );
      this.state.labels.shift();
      this.state.data.shift();
      this.setState(
        Object.assign(this.state, {
          labels: this.state.labels,
          data: this.state.data,
        })
      );
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    window.removeEventListener("resize", this.resizeEvent);
  }

  render() {
    const data = {
      labels: [...this.state.labels],
      datasets: [
        {
          borderColor: "rgba(227,57,67, 0.5)",
          backgroundColor: "transparent",
          pointBackgroundColor: "#fff",
          pointHoverBorderWidth: 0.5,
          pointRadius: 0,
          stepSize: 10,
          data: this.state.data,
        },
      ],
    };

    const options = {
      legend: { display: false },
      plugins: {
        legend: {
          labels: {
            font: {
              size: 10,
            },
          },
        },
      },
      elements: {
        point: {
          radius: 0,
        },
      },
      layout: {
        padding: {
          top: this.state.windowWidth <= 800 ? 17 : 30,
          bottom: this.state.windowWidth <= 800 ? 0 : 10,
          right: this.state.windowWidth <= 800 ? 0 : 30,
        },
      },
      scales: {
        xAxes: [
          {
            ticks: {
              maxRotation: 0,
              maxTicksLimit: this.state.windowWidth <= 800 ? 1 : 3,
            },
            gridLines: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              autoSkip: true,
              maxTicksLimit: 3,
            },
            gridLines: {
              display: false,
            },
          },
        ],
      },
    };
    return (
      <s.Container>
        <s.Content>
          <s.Title>Realtime Users</s.Title>
          <s.ValueContainer>
            <s.PercentStatContainer
              className={
                parseInt(this.state.data[this.state.data.length - 1].y) <
                parseInt(this.state.data[this.state.data.length - 2].y)
                  ? ""
                  : "down"
              }
            >
              <s.Percent className="percent">
                {`${
                  this.state.data[this.state.data.length - 2].y < 10
                    ? `0${this.state.data[this.state.data.length - 2].y}`
                    : this.state.data[this.state.data.length - 2].y
                }%`}
              </s.Percent>
              <s.UpIcon className="up-icon" />
            </s.PercentStatContainer>
            <s.Value>{this.state.data[this.state.data.length - 1].y}</s.Value>
          </s.ValueContainer>
          <s.ChartContainer>
            <Line data={data} options={options} />
          </s.ChartContainer>
        </s.Content>
      </s.Container>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(RealtimeUsersChart);
