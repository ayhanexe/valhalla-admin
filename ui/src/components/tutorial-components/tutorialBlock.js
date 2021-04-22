import React, { Component } from "react";
import { TutorialComponentStyles as s } from "../styles";

class tutorialBlock extends Component {
  render() {
    return <s.TutorialBlockContainer {...this.props}>
        {this.props.children}
    </s.TutorialBlockContainer>;
  }
}

export default tutorialBlock;
