import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { CustomScrollbarStyles as s } from "../styles";

class customScrollbar extends Component {
  Track(width = "", height = "") {
    return <s.Track width={width} height={height}></s.Track>;
  }

  Thumb(width) {
    return <s.Thumb width={width}></s.Thumb>;
  }

  Frame() {
    return <s.Frame></s.Frame>;
  }

  render() {
    return (
      <Scrollbars
        {...this.props}
        renderTrackVertical={() => this.Track("5px", "92%")}
        renderThumbVertical={() => this.Thumb("5px")}
      >
        {this.props.children}
      </Scrollbars>
    );
  }
}

export default customScrollbar;
