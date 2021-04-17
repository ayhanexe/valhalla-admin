import React, { Component, createRef } from "react";
import { LoadingFilterStyles as s } from "../styles";

export class StandartFilter extends Component {
  constructor(props) {
    super(props);

    this.ref = createRef();
  }

  render() {
    return (
      <s.StandartFilterContainer ref={this.ref}>
        <s.StandartSpinnerIcon radius="20"/>
      </s.StandartFilterContainer>
    );
  }
}
