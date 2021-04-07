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
  @media (max-width: 575px) {
    margin: 10px 5vmax;
  }
`;

class HomePage extends Component {
  render() {
    return (
      <Container>
        <div className="container-fluid p-0">
          <h1 className="h1 fw-bold mb-4 mt-4">Dashboard</h1>

          {/* <div className="row">
            <div className="col-12 col-sm-4">
              <SmallLineChart
                title="Daily Visits"
                value={8743}
                data={["40", "50", "10", "110", "70", "10", "50"]}
                options={{
                  gradientBackground: true,
                }}
              />
            </div>
            <div className="col-12 col-sm-4">
              <SmallLineChart
                title="Daily Registrations"
                value={3687}
                data={["60", "30", "60", "10", "140", "70", "20"]}
                options={{
                  gradientBackground: true,
                }}
              />
            </div>
            <div className="col-12 col-sm-4">
              <SmallLineChart
                title="Daily Posts"
                value={45532}
                data={["100", "30", "60", "23", "13", "123", "64"]}
                options={{
                  gradientBackground: true,
                }}
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-12 col-md-7 my-2">
            <Chat height="450px" />
            </div>
            <div className="col-5 my-2">
            <RealtimeUsersChart />
            </div>
          </div> */}
          <div className="row mt-4">
            <div className="col-4">
              <LastActivities />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(HomePage);
