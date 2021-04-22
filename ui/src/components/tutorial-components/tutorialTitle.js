import React, { Component } from "react";
import { TutorialComponentStyles as s } from "../styles";

class tutorialTitle extends Component {
  render() {
    return <s.TutorialPageTitle>{this.props.children}</s.TutorialPageTitle>;
  }
}

export default tutorialTitle;
