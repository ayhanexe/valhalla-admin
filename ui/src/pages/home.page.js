import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import { StyleUtils } from "../components/styles";
import styled from "styled-components/macro";

import {
  SmallLineChart,
  Chat,
  RealtimeUsersChart,
  LastActivities,
  WeatherWidget,
  CustomTable,
  LoadingFilters,
  FileManagerApp,
} from "../components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: minmax(0, 1fr);
  gap: 10px 10px;

  grid-template-areas:
    "chart-one chart-one chart-two chart-two chart-three chart-three"
    "chat-widget chat-widget chat-widget chat-widget realtime-chart realtime-chart"
    "chat-widget chat-widget chat-widget chat-widget activities-chart activities-chart"
    "weather-widget weather-widget table-container table-container table-container table-container"
    ". . . . . .";

  .weather-widget {
    height:40vw;
  }

  @media (max-width: 767px) {
    grid-template-areas:
      "chart-one chart-one chart-two chart-two chart-three chart-three"
      "chat-widget chat-widget chat-widget chat-widget realtime-chart realtime-chart"
      "chat-widget chat-widget chat-widget chat-widget activities-chart activities-chart"
      "table-container table-container table-container table-container table-container table-container"
      "weather-widget weather-widget . . . .";
    #dashboard-custom-table {
      height: 500px;
    }
  }

  @media (max-width: 576px) {
    grid-template-areas:
      "chart-one chart-one chart-one chart-one chart-one chart-one"
      "chart-two chart-two chart-two chart-two chart-two chart-two"
      "chart-three chart-three chart-three chart-three chart-three chart-three"
      "chat-widget chat-widget chat-widget chat-widget chat-widget chat-widget"
      "weather-widget weather-widget weather-widget activities-chart activities-chart activities-chart"
      "weather-widget weather-widget weather-widget activities-chart activities-chart activities-chart"
      "table-container table-container table-container table-container table-container table-container"
      "realtime-chart realtime-chart realtime-chart realtime-chart realtime-chart realtime-chart";
    grid-template-rows: repeat(5, minmax(0, min-content)) 1fr;
    #dashboard-custom-table {
      height: 500px;
    }
    .realtime-chart {
      --bs-aspect-ratio: 35%;
    }
    .chart-one,
    .chart-two,
    .chart-three {
      border-radius: 0.5srem;
      --bs-aspect-ratio: 20%;
    }
    .weather-widget,
    .activities-widget {
      height: 60vw;
    }
  }

  @media (max-width: 450px) {
    grid-template-areas:
      "chart-one chart-one chart-one chart-one chart-one chart-one"
      "chart-two chart-two chart-two chart-two chart-two chart-two"
      "chart-three chart-three chart-three chart-three chart-three chart-three"
      "chat-widget chat-widget chat-widget chat-widget chat-widget chat-widget"
      "weather-widget weather-widget weather-widget activities-chart activities-chart activities-chart"
      "weather-widget weather-widget weather-widget activities-chart activities-chart activities-chart"
      "realtime-chart realtime-chart realtime-chart realtime-chart realtime-chart realtime-chart";
    grid-template-rows: repeat(5, minmax(0, min-content)) 1fr;
    #dashboard-custom-table {
      height: 500px;
    }
    .chart-one,
    .chart-two,
    .chart-three {
      border-radius: 0.5srem;
      --bs-aspect-ratio: 20%;
    }
    .realtime-chart {
      --bs-aspect-ratio: 35%;
    }
    .weather-widget,
    .activities-widget {
      height: 60vw;
    }
    .table-grid-container {
      display: none;
    }
  }

  @media (max-width: 300px) {
    grid-template-areas:
      "chart-one chart-one chart-one chart-one chart-one chart-one"
      "chart-two chart-two chart-two chart-two chart-two chart-two"
      "chart-three chart-three chart-three chart-three chart-three chart-three"
      "chat-widget chat-widget chat-widget chat-widget chat-widget chat-widget"
      "activities-chart activities-chart activities-chart activities-chart activities-chart activities-chart"
      "weather-widget weather-widget weather-widget weather-widget weather-widget weather-widget"
      "realtime-chart realtime-chart realtime-chart realtime-chart realtime-chart realtime-chart";
    grid-template-rows: repeat(5, minmax(0, min-content)) 1fr;
    #dashboard-custom-table {
      height: 500px;
    }
    .chart-one,
    .chart-two,
    .chart-three {
      border-radius: 0.5srem;
      --bs-aspect-ratio: 20%;
    }
    .realtime-chart {
      --bs-aspect-ratio: 35%;
    }
    .weather-widget,
    .activities-widget {
      height: 60vw;
    }
    .table-grid-container {
      display: none;
    }
  }
`;

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tableData: null,
    };
  }

  async getData() {
    return new Promise(async (resolve, reject) => {
      try {
        await axios
          .get("https://randomuser.me/api/?results=500")
          .then((response) => {
            this.setState({
              tableData: response.data.results,
            });
          })
          .catch((error) => {
            throw new Error(error);
          });
      } catch (error) {
        reject(error);
      }
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <Container>
        <div
          className="mt-2"
          style={{
            gridArea: "chart-one",
          }}
        >
          <SmallLineChart
            title="Daily Visits"
            value={8743}
            data={["40", "50", "10", "110", "70", "10", "50"]}
            options={{
              gradientBackground: true,
            }}
            className="chart-one"
          />
        </div>
        <div
          className="mt-2"
          style={{
            gridArea: "chart-two",
          }}
        >
          <SmallLineChart
            title="Daily Visits"
            value={8743}
            data={["40", "50", "10", "110", "70", "10", "50"]}
            options={{
              gradientBackground: true,
            }}
            className="chart-two"
          />
        </div>
        <div
          className="mt-2"
          style={{
            gridArea: "chart-three",
          }}
        >
          <SmallLineChart
            title="Daily Visits"
            value={8743}
            data={["40", "50", "10", "110", "70", "10", "50"]}
            options={{
              gradientBackground: true,
            }}
            className="chart-three"
          />
        </div>
        <div
          style={{
            gridArea: "chat-widget",
          }}
        >
          <Chat height="100%" />
        </div>
        <div
          style={{
            gridArea: "realtime-chart",
          }}
        >
          <RealtimeUsersChart className="realtime-chart" />
        </div>
        <div
          style={{
            gridArea: "activities-chart",
          }}
        >
          <LastActivities className="activities-widget" />
        </div>
        <div
          style={{
            gridArea: "weather-widget",
          }}
        >
          <WeatherWidget className="weather-widget" />
        </div>
        <div
          className="table-grid-container"
          style={{
            gridArea: "table-container",
          }}
        >
          <StyleUtils.WidgetWrapper className="h-100">
            <StyleUtils.WidgetWrapperTitle>
              User list
            </StyleUtils.WidgetWrapperTitle>
            {this.state.tableData ? (
              <CustomTable
                id="dashboard-custom-table"
                className="w-100"
                style={{
                  height: "32vw",
                }}
                data={this.state.tableData}
                columns={[
                  {
                    Header: "name",
                    accessor: "name.first",
                  },
                  {
                    Header: "lastname",
                    accessor: "name.last",
                  },
                  {
                    Header: "Age",
                    accessor: "dob.age",
                  },
                  {
                    Header: "Country",
                    accessor: "location.country",
                  },
                ]}
              />
            ) : (
              <LoadingFilters.StandartFilter />
            )}
          </StyleUtils.WidgetWrapper>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(HomePage);
