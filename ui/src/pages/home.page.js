import { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components/macro";

import {
  SmallLineChart,
  Chat,
  RealtimeUsersChart,
  LastActivities,
  WeatherWidget,
} from "../components";

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 0 15px 100px 0;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr)) minmax(0, 0.5fr) minmax(
      0,
      1fr
    ) minmax(0, 1fr);
  grid-template-rows: min-content min-content min-content 1fr 1fr;
  gap: 10px 10px;
  grid-template-areas:
    "charts-area charts-area charts-area charts-area charts-area charts-area"
    "chat chat chat chat realtime-chart realtime-chart"
    "chat chat chat chat activities activities"
    ". . weather-app weather-app activities activities"
    ". . weather-app weather-app . .";

  .chart-1 {
    grid-area: chart-1;
  }
  .chart-2 {
    grid-area: chart-2;
  }
  .chart-3 {
    grid-area: chart-3;
  }
  .chat {
    grid-area: chat;
  }
  .realtime-chart {
    grid-area: realtime-chart;
  }
  .activities {
    grid-area: activities;
  }
  .weather-app {
    grid-area: weather-app;
  }
`;

const ChartsArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 20px;
  grid-template-areas: "chart-1 chart-2 chart-3";
  grid-area: charts-area;
`;

class HomePage extends Component {
  render() {
    return (
      <Container>
        {/* <WeatherWidget /> */}
        
        <Content>
          <ChartsArea>
            <div className="chart-1">
              <SmallLineChart
                title="Daily Visits"
                value={8743}
                data={["40", "50", "10", "110", "70", "10", "50"]}
                options={{
                  gradientBackground: true,
                }}
              />
            </div>
            <div className="chart-2">
              <SmallLineChart
                title="Daily Registrations"
                value={3687}
                data={["60", "30", "60", "10", "140", "70", "20"]}
                options={{
                  gradientBackground: true,
                }}
              />
            </div>
            <div className="chart-3">
              <SmallLineChart
                title="Daily Posts"
                value={45532}
                data={["100", "30", "60", "23", "13", "123", "64"]}
                options={{
                  gradientBackground: true,
                }}
              />
            </div>
          </ChartsArea>
          <div className="chat">
            <Chat height="450px" />
          </div>
          <div className="realtime-chart">
            <RealtimeUsersChart />
          </div>
          <div className="activities">
            <LastActivities />
          </div>
          <div className="weather-app">
            <WeatherWidget />
          </div>
          {/* <ChartsArea className="charts-area">
            <ChartOne className="chart-1">
              <SmallLineChart
                title="Daily Visits"
                value={8743}
                data={["40", "50", "10", "110", "70", "10", "50"]}
                options={{
                  gradientBackground: true,
                }}
              />
            </ChartOne>
            <ChartTwo className="chart-2">
              <SmallLineChart
                title="Daily Registrations"
                value={3687}
                data={["60", "30", "60", "10", "140", "70", "20"]}
                options={{
                  gradientBackground: true,
                }}
              />
            </ChartTwo>
            <ChartThree className="chart-3">
              <SmallLineChart
                title="Daily Posts"
                value={45532}
                data={["100", "30", "60", "23", "13", "123", "64"]}
                options={{
                  gradientBackground: true,
                }}
              />
            </ChartThree>
          </ChartsArea>
          <ChatArea className="chat-area">
            <Chat height="450px" />
          </ChatArea>
          <RealtimeChart className="realtime-chart">
            <RealtimeUsersChart />
          </RealtimeChart>
          <Activities className="activities">
            <LastActivities />
          </Activities>
          <Weather className="weather">
            <WeatherWidget />
          </Weather> */}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(HomePage);
