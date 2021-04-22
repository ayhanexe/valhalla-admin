import React, { Component } from "react";
import { TutorialComponentStyles as s } from "../styles";

class tutorialBlockText extends Component {
  render() {
    return <s.TutorialBlockText {...this.props}>{this.props.children}</s.TutorialBlockText>;
  }
}

export default tutorialBlockText;
