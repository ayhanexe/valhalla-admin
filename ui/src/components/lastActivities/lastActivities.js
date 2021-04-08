import React, { Component, createRef } from "react";
import { LoadingFilters, CustomScrollbar } from "..";

import { LastActivitiesStyles as s } from "../styles";

import axios from "axios";

class lastActivities extends Component {
  constructor(props) {
    super(props);

    this.activityMessages = [
      (name = "") => `${name} updated profile picture.`,
      (name = "") => `${name} logged in.`,
      (name = "") => `${name} logged out.`,
      (name = "") => `${name} signed up.`,
    ];

    Object.defineProperty(this.activityMessages, "getRandomMessage", {
      value: function (name = "") {
        return this[Math.floor(Math.random() * this.length)](name);
      },
      enumerable: false,
      configurable: true,
    });

    this.users = axios.get("https://randomuser.me/api/?nat=us&results=10");

    this.state = {
      activities: [],
    };
  }

  getRandomTime() {
    const date = new Date(
      `Thu Apr 08 2021 00:${Math.floor(Math.random() * 60)}:${Math.floor(
        Math.random() * 60
      )} GMT+0400 (Azerbaijan Standard Time)`
    );
    return `${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:${
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    }`;
  }

  componentDidMount() {
    this.users.then((response) => {
      this.setState(
        Object.assign(this.state, {
          activities: response.data.results.map((user, index) => {
            return {
              id: index,
              user: user,
              text: this.activityMessages.getRandomMessage(
                `${user.name.first} ${user.name.last}`
              ),
              time: this.getRandomTime(),
            };
          }),
        })
      );
    });
  }

  render() {
    return (
      <s.Container id="last-activities">
        {this.state.activities.length === 0 ? (
          <LoadingFilters.StandartFilter />
        ) : null}
        <s.Title>Last Activities</s.Title>
        <CustomScrollbar autoHeight autoHeightMin="100%">
          <s.ActivityContent>
            {this.state.activities.map((activity, index) => (
              <s.ActivityItemContainer key={index}>
                <s.ActivityItemProfile
                  image={activity.user.picture.thumbnail}
                />
                <s.ActivityItemText>{activity.text}</s.ActivityItemText>
                <s.ActivityItemTime>{activity.time}</s.ActivityItemTime>
              </s.ActivityItemContainer>
            ))}
          </s.ActivityContent>
        </CustomScrollbar>
      </s.Container>
    );
  }
}

export default lastActivities;
