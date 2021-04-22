import { Component, createRef } from "react";
import { connect } from "react-redux";
import { ValhallaUtils } from "../../services";

import { Line } from "react-chartjs-2";
import { SmallChartStyles as s } from "../styles";

class SmallChart extends Component {
  constructor(props) {
    super(props);

    this.utils = new ValhallaUtils();
    this.isPopupOpen = false;
    this.background = this.utils.generateBackground(this.props.options ?? {});
    this.ref = createRef();
    this.state = {};

    this.utils.validateChartData(this.props.data);
  }

  

  

  updateState() {
    const refStyles = window.getComputedStyle(this.ref.current);
    this.setState(
      Object.assign(this.state, {
        paddingTop: parseInt(refStyles.height) / 2,
      })
    );
  }

  componentDidMount() {
    this.updateStateFunctionRef = () => this.updateState();
    this.updateStateFunctionRef();
    window.addEventListener("resize", this.updateStateFunctionRef, true);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateStateFunctionRef, true);
  }

  render() {
    const data = (canvas) => {
      this.canvas = canvas;
      let background = null;

      if (Array.isArray(this.background)) {
        const ctx = canvas.getContext("2d"),
          x = 0,
          y = 0,
          angle = 90,
          length = 250;

        background = ctx.createLinearGradient(
          x,
          y,
          x + Math.cos((angle / 180) * Math.PI) * length,
          y + Math.sin((angle / 180) * Math.PI) * length
        );

        this.background.forEach((item, index) => {
          background.addColorStop(index, item);
        });
      } else {
        background = this.background;
      }

      return {
        labels: this.props.data?.map((item, index) => `${index}`),
        datasets: [
          {
            label: "# of Votes",
            data: this.props.data?.map((item, index) => parseInt(item)),
            fill: true,
            backgroundColor: background,
          },
        ],
      };
    };

    const options = {
      maintainAspectRatio: false,
      elements: {
        point: {
          radius: 0,
        },
      },
      legend: {
        display: false,
      },
      layout: {
        padding: {
          bottom: -10,
          left: -10,
        },
      },
      scales: {
        xAxes: [
          {
            ticks: {
              display: false,
            },
            gridLines: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              display: false,
            },
            gridLines: {
              display: false,
            },
          },
        ],
      },
    };

    return (
      <s.Container ref={this.ref} className={`small-line-chart ratio ratio-21x9 ${this.props.className ?? ""}`}>
        <s.ContainerContent>
          <s.ContainerTitle>{this.props.title ?? ""}</s.ContainerTitle>
          <s.ContainerValue
            style={
              Array.isArray(this.background)
                ? {
                    background: `linear-gradient(90deg, ${this.background[0]}, ${this.background[1]})`,
                    color: "transparent",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  }
                : { color: this.background }
            }
          >
            {this.props.value ?? 0}
          </s.ContainerValue>
        </s.ContainerContent>
        <s.ChartContainer>
          <Line data={data} options={options} />
        </s.ChartContainer>
      </s.Container>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(SmallChart);
