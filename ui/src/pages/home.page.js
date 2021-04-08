import { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components/macro";

import {
  SmallLineChart,
  Chat,
  RealtimeUsersChart,
  LastActivities,
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
  grid-template-areas:
    "small-chart-1 small-chart-2 small-chart-3"
    "chat chat realtime-users"
    "chat chat last-activities";
  grid-template-rows: min-content min-content min-content;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px 20px;
  justify-content: start;

  @media (max-width: 575px) {
    margin: 10px 5vmax;
  }
`;

class HomePage extends Component {
  render() {
    return (
      <Container>
        <Content>
          <div
            style={{
              gridArea: "small-chart-1",
            }}
          >
            <SmallLineChart
              title="Daily Visits"
              value={8743}
              data={["40", "50", "10", "110", "70", "10", "50"]}
              options={{
                gradientBackground: true,
              }}
            />
          </div>
          <div
            style={{
              gridArea: "small-chart-2",
            }}
          >
            <SmallLineChart
              title="Daily Registrations"
              value={3687}
              data={["60", "30", "60", "10", "140", "70", "20"]}
              options={{
                gradientBackground: true,
              }}
            />
          </div>
          <div
            style={{
              gridArea: "small-chart-3",
            }}
          >
            <SmallLineChart
              title="Daily Posts"
              value={45532}
              data={["100", "30", "60", "23", "13", "123", "64"]}
              options={{
                gradientBackground: true,
              }}
            />
          </div>
          <div
            style={{
              gridArea: "chat",
            }}
          >
            <Chat height="450px" />
          </div>
          <div
            style={{
              gridArea: "realtime-users",
            }}
          >
            <RealtimeUsersChart />
          </div>
          <div
            style={{
              gridArea: "last-activities",
            }}
          >
            <LastActivities />
          </div>
          {/* <div className="container-fluid p-0">
          <h1 className="h1 fw-bold mb-4 mt-4">Dashboard</h1>

          <div className="row">
            <div className="col-12 col-sm-4">
              
            </div>
            <div className="col-12 col-sm-4">
              
            </div>
            <div className="col-12 col-sm-4">
              
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-12 col-md-7 my-2">
            </div>
            <div className="col-5 my-2">
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-4">
            </div>
          </div>
        </div> */}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(HomePage);
