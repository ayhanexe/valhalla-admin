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
    "file-manager file-manager file-manager file-manager . .";

  @media (max-width: 768px) {
    grid-template-areas:
      "chart-one chart-one chart-two chart-two chart-three chart-three"
      "chat-widget chat-widget chat-widget chat-widget realtime-chart realtime-chart"
      "chat-widget chat-widget chat-widget chat-widget activities-chart activities-chart"
      "table-container table-container table-container table-container table-container table-container"
      "weather-widget weather-widget . . . .";
    #dashboard-custom-table {
      height:500px;
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
          <RealtimeUsersChart />
        </div>
        <div
          style={{
            gridArea: "activities-chart",
          }}
        >
          <LastActivities />
        </div>
        <div
          style={{
            gridArea: "weather-widget",
          }}
        >
          <WeatherWidget
            style={{
              height: "40vw",
            }}
          />
        </div>
        <div
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
        <div
          style={{
            gridArea: "file-manager",
          }}
          className="d-none d-md-block"
        >
          <StyleUtils.WidgetWrapper
            style={{
              height: "500px",
            }}
          >
            <StyleUtils.WidgetWrapperTitle>
              File Manager App
            </StyleUtils.WidgetWrapperTitle>
            <FileManagerApp />
          </StyleUtils.WidgetWrapper>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(HomePage);
