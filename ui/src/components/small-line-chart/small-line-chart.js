import { Component, createRef } from "react";
import { connect } from "react-redux";
import { ValhallaUtils } from "../../services";
import gsap from "gsap/all";

import { Line } from "react-chartjs-2";
import { SmallChartStyles as s } from "../styles";

class SmallChart extends Component {
  constructor(props) {
    super(props);

    this.utils = new ValhallaUtils();
    this.isPopupOpen = false;
    this.background = this.generateBackground();
    this.ref = createRef();
    this.state = {};

    this.validateData(this.props.data);
  }

  openPopup(event) {
    const target = event.target;
    const popup = this.utils.closest(target, ".popup-container");

    gsap
      .set(popup, {
        opacity: this.isPopupOpen ? 0 : 1,
        visibility: this.isPopupOpen ? "hidden" : "visible",
        height: this.isPopupOpen ? 0 : this.utils.calculateDropdown(popup),
      })
      .then(() => {
        this.isPopupOpen = !this.isPopupOpen;
      });
  }

  validateData(data) {
    if (Array.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        if (isNaN(parseInt(data[i]))) {
          throw new Error(
            'Data\'s content must be only number! or string number like "321"'
          );
        }
      }
      return true;
    } else {
      throw Error("Data's type must be array!");
    }
  }

  generateBackground() {
    const gradients = [
      ["#FF3254", "rgba(255,123,0, 0.25)"],
      ["#FF622D", "rgba(255,224,50, 0.25)"],
      ["#BCFF05", "rgba(65,255,100, 0.25)"],
      ["#41FF64", "rgba(0,242,255, 0.25)"],
      ["#00F2FF", "rgba(30,97,2550, 0.25)"],
      ["#1E61FF", "rgba(128,10,255, 0.25)"],
      ["#800AFF", "rgba(213,5,255, 0.25)"],
      ["#D505FF", "rgba(255,75,147, 0.25)"],
      ["#FF4B93", "rgba(255,50,64, 0.25)"],
    ];
    if (!this.props.options?.gradientBackground) {
      if (this.props.options?.fill) {
        this.valueColor = this.props.options.fill;
        return this.props.options.fill;
      } else {
        this.valueColor = "whitesmoke";
        return "whitesmoke";
      }
    } else {
      const color = gradients[Math.floor(Math.random() * gradients.length)];
      this.valueColor = color;
      return color;
    }
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
      <s.Container ref={this.ref} className="small-line-chart">
        {/* <s.SettingsContainer>
          <s.IconContainer onClick={(event) => this.openPopup(event)}>
            <s.SettingsIcon />
            <s.PopupContainer className="popup-container">
              <s.PopupItem>Edit</s.PopupItem>
            </s.PopupContainer>
          </s.IconContainer>
        </s.SettingsContainer> */}
        <s.ContainerContent>
          <s.ContainerTitle>{this.props.title ?? ""}</s.ContainerTitle>
          <s.ContainerValue
            style={
              Array.isArray(this.valueColor)
                ? {
                    background: `linear-gradient(90deg, ${this.valueColor[0]}, ${this.valueColor[1]})`,
                    color: "transparent",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  }
                : { color: this.valueColor }
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
