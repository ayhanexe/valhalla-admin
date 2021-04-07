import React, { Component } from "react";
import { LastActivitiesStyles as s } from "../styles";

class lastActivities extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activities: [
        {
          id: 0,
          user: {},
          text: "",
          time: new Date(),
        },
      ],
    };
  }

  render() {
    return (
      <s.Container>
        <s.Title>Last Activities</s.Title>
      </s.Container>
    );
  }
}

export default lastActivities;
