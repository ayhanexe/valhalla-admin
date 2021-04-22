import React, { Component } from "react";
import { TutorialComponentStyles as s } from "../styles";

class tutorialBlockTitle extends Component {
  render() {
    return <s.TutorialBlockTitle {...this.props}>{this.props.children}</s.TutorialBlockTitle>;
  }
}

export default tutorialBlockTitle;
