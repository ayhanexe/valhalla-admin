import React, { Component, createRef } from "react";
import { Line } from "react-chartjs-2";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

import { WeatherWidgetStyles as s } from "../styles";
import { gsap } from "gsap/all";

class weatherWidget extends Component {
  constructor(props) {
    super(props);

    this.generalPageRef = createRef();
    this.detailsPageRef = createRef();

    this.state = {
      detailsLeft: [
        {
          key: "UV Index",
          value: "Low",
        },
        {
          key: "Wind",
          value: "45 km/h",
        },
        {
          key: "Visibility",
          value: "500 m",
        },
        {
          key: "Pressure",
          value: "1,0.33 mBar",
        },
      ],
      detailsRight: [
        {
          key: "Dew Point",
          value: (
            <s.Celsius
              height={"auto"}
              radius={"0.3vw"}
              color={"#272b3a"}
              right={"0.55vw"}
            >
              3
            </s.Celsius>
          ),
        },
        {
          key: "Humidity",
          value: "100%",
        },
        {
          key: "Sunrise",
          value: "08:55",
        },
        {
          key: "Sunset",
          value: "04:55",
        },
      ],
    };
  }

  toggleDetailsPage(event) {
    const detailsPage = this.detailsPageRef.current;
    const generalPage = this.generalPageRef.current;
    if (detailsPage !== null && generalPage !== null) {
      const timeline = gsap.timeline();
      const isDetailsPageOpen = detailsPage.classList.contains(
        "details-page-opened"
      );

      timeline
        .add([
          gsap
            .fromTo(
              generalPage,
              {
                transform: `scale(${isDetailsPageOpen ? "0.8" : "1"})`,
                opacity: isDetailsPageOpen ? 0 : 1,
              },
              {
                transform: `scale(${isDetailsPageOpen ? "1" : "0.8"})`,
                opacity: isDetailsPageOpen ? 1 : 0,
                duration: 0.3,
                ease: "power.out",
              }
            )
            .delay(isDetailsPageOpen ? 0.2 : 0),
          gsap
            .fromTo(
              detailsPage,
              {
                opacity: isDetailsPageOpen ? 1 : 0,
                left: isDetailsPageOpen ? 0 : "100%",
              },
              {
                left: isDetailsPageOpen ? "-100%" : 0,
                opacity: isDetailsPageOpen ? 0 : 1,
                duration: 0.3,
                ease: "power.out",
              }
            )
            .delay(isDetailsPageOpen ? 0 : 0.2),
        ])
        .then(() => {
          detailsPage.classList.toggle("details-page-opened");
        });
    }
  }

  render() {
    const _data_ = [3, -1, 4, 3, 2, 2, 2, 1, -1, 1, 1];

    const data = (canvas) => {
      this.canvas = canvas;
      let background = null;

      const ctx = canvas.getContext("2d"),
        x = 0,
        y = 0,
        angle = 90,
        length = 130;

      background = ctx.createLinearGradient(
        x,
        y,
        x + Math.cos((angle / 180) * Math.PI) * length,
        y + Math.sin((angle / 180) * Math.PI) * length
      );

      background.addColorStop(0, "#371C19");
      background.addColorStop(1, "rgba(55,28,25, 0)");

      return {
        labels: _data_,
        datasets: [
          {
            label: "# of Votes",
            data: [
              ..._data_.map((item, index) =>
                item < 0 && index > 0 ? (_data_[--index] + item) / 2 : item
              ),
            ],
            fill: true,
            borderColor: "transparent",
            backgroundColor: background,
          },
        ],
      };
    };

    const options = {
      maintainAspectRatio: false,

      plugins: {
        tooltip: {
          enabled: false,
        },
      },
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
      <s.Container {...this.props}>
        <s.WeatherGeneralContent ref={this.generalPageRef}>
          <s.WeatherHeader>
            <span>Azerbaijan, Baku</span>
          </s.WeatherHeader>
          <s.WeatherIcon>
            <s.Icon icon={faCloud} />
          </s.WeatherIcon>
          <s.CurrentLocation>Baku</s.CurrentLocation>
          <s.CurrentDay>Today</s.CurrentDay>
          <s.ValueArea>
            <s.Celsius radius={"1vw"}>1</s.Celsius>
          </s.ValueArea>
          <s.WeatherFooter>
            <s.FooterSector className="right-padding">
              <s.SectorContent>
                <s.SunIcon />
                <s.SectorValue>
                  <s.Celsius
                    height={"auto"}
                    radius={"4px"}
                    fontSize={"1.4vw"}
                    position={"relative"}
                  >
                    3
                  </s.Celsius>
                </s.SectorValue>
              </s.SectorContent>
            </s.FooterSector>
            <s.FooterSector>
              <s.SectorContent>
                <s.WindIcon />
                <s.SectorValue>68 km/h</s.SectorValue>
              </s.SectorContent>
            </s.FooterSector>
            <s.FooterSector className="left-padding">
              <s.SectorContent>
                <s.NightIcon />
                <s.SectorValue>
                  <s.Celsius
                    height={"auto"}
                    radius={"4px"}
                    fontSize={"1.4vw"}
                    position={"relative"}
                  >
                    -4
                  </s.Celsius>
                </s.SectorValue>
              </s.SectorContent>
            </s.FooterSector>
          </s.WeatherFooter>

          <s.WeatherToggler onClick={(event) => this.toggleDetailsPage(event)}>
            <s.WeatherTogglerIcon />
          </s.WeatherToggler>
        </s.WeatherGeneralContent>

        <s.DetailsPageContainer ref={this.detailsPageRef}>
          <s.DetailsPageToggler
            onClick={(event) => this.toggleDetailsPage(event)}
          >
            <s.DetailsTogglerIcon />
          </s.DetailsPageToggler>
          <s.DetailsHeader>
            <span>Azerbaijan, Baku</span>
          </s.DetailsHeader>
          <s.DetailsTimelineContainer>
            <s.DetailsTimelineItem className="active">
              Today
            </s.DetailsTimelineItem>
            <s.DetailsTimelineItem>Tomorrow</s.DetailsTimelineItem>
            <s.DetailsTimelineItem>5 Days</s.DetailsTimelineItem>
          </s.DetailsTimelineContainer>
          <s.DetailsContentContainer>
            <s.DetailsTitle>Details</s.DetailsTitle>
            <s.DetailsContentSectorContainer>
              <s.DetailsContentSector>
                <s.DetailsTable data={this.state.detailsLeft} />
              </s.DetailsContentSector>
              <s.DetailsContentSector>
                <s.DetailsTable data={this.state.detailsRight} />
              </s.DetailsContentSector>
            </s.DetailsContentSectorContainer>
          </s.DetailsContentContainer>
          <s.DetailsChartContainer>
            <s.DetailsChartWrapper>
              <s.DetailsChart>
                <Line data={data} options={options} />
              </s.DetailsChart>
            </s.DetailsChartWrapper>
            <s.DetailsChartTimeline>
              <s.DetailsChartTimelineItem>
                <s.DetailsChartTimelineItemIcon icon={faCloud} />
                <s.DetailsChartTimelineItemText>
                  12 pm
                </s.DetailsChartTimelineItemText>
              </s.DetailsChartTimelineItem>
              <s.DetailsChartTimelineItem>
                <s.DetailsChartTimelineItemIcon icon={faCloud} />
                <s.DetailsChartTimelineItemText>
                  1 pm
                </s.DetailsChartTimelineItemText>
              </s.DetailsChartTimelineItem>
              <s.DetailsChartTimelineItem>
                <s.DetailsChartTimelineItemIcon icon={faCloud} />
                <s.DetailsChartTimelineItemText>
                  2 pm
                </s.DetailsChartTimelineItemText>
              </s.DetailsChartTimelineItem>
              <s.DetailsChartTimelineItem>
                <s.DetailsChartTimelineItemIcon icon={faCloud} />
                <s.DetailsChartTimelineItemText>
                  3 pm
                </s.DetailsChartTimelineItemText>
              </s.DetailsChartTimelineItem>
              <s.DetailsChartTimelineItem>
                <s.DetailsChartTimelineItemIcon icon={faCloud} />
                <s.DetailsChartTimelineItemText>
                  4 pm
                </s.DetailsChartTimelineItemText>
              </s.DetailsChartTimelineItem>
              <s.DetailsChartTimelineItem>
                <s.DetailsChartTimelineItemIcon icon={faCloud} />
                <s.DetailsChartTimelineItemText>
                  5 pm
                </s.DetailsChartTimelineItemText>
              </s.DetailsChartTimelineItem>
              <s.DetailsChartTimelineItem>
                <s.DetailsChartTimelineItemIcon icon={faCloud} />
                <s.DetailsChartTimelineItemText>
                  6 pm
                </s.DetailsChartTimelineItemText>
              </s.DetailsChartTimelineItem>
              <s.DetailsChartTimelineItem>
                <s.DetailsChartTimelineItemIcon icon={faCloud} />
                <s.DetailsChartTimelineItemText>
                  7 pm
                </s.DetailsChartTimelineItemText>
              </s.DetailsChartTimelineItem>
              <s.DetailsChartTimelineItem>
                <s.DetailsChartTimelineItemIcon icon={faCloud} />
                <s.DetailsChartTimelineItemText>
                  8 pm
                </s.DetailsChartTimelineItemText>
              </s.DetailsChartTimelineItem>
              <s.DetailsChartTimelineItem>
                <s.DetailsChartTimelineItemIcon icon={faCloud} />
                <s.DetailsChartTimelineItemText>
                  9 pm
                </s.DetailsChartTimelineItemText>
              </s.DetailsChartTimelineItem>
              <s.DetailsChartTimelineItem>
                <s.DetailsChartTimelineItemIcon icon={faCloud} />
                <s.DetailsChartTimelineItemText>
                  10 pm
                </s.DetailsChartTimelineItemText>
              </s.DetailsChartTimelineItem>
              <s.DetailsChartTimelineItem>
                <s.DetailsChartTimelineItemIcon icon={faCloud} />
                <s.DetailsChartTimelineItemText>
                  11 pm
                </s.DetailsChartTimelineItemText>
              </s.DetailsChartTimelineItem>
            </s.DetailsChartTimeline>
          </s.DetailsChartContainer>
        </s.DetailsPageContainer>
      </s.Container>
    );
  }
}

export default weatherWidget;
