import { Component } from "react";
import * as s from "./button.styles";

class HellaButton extends Component {
  generateColor(color) {
    const colors = [
      "#FF483E",
      "#FF7038",
      "#FFFF2F",
      "#80FF1E",
      "#00FF66",
      "#1EFFFF",
      "#5C95FF",
      "#6D68FF",
      "#D165FF",
      "#FF6BD8",
    ];
    switch (color) {
      case "random":
        return colors[Math.floor(Math.random() * colors.length)];
      default:
        return "error";
    }
  }

  constructor(props) {
    super(props);

    this.styles = this.props.icon?.color
      ? this.generateColor(this.props.icon?.color) !== "error"
        ? { color: this.generateColor(this.props.icon?.color) }
        : {}
      : {};
  }

  render() {
    const content = () => {
      return (
        <>
          {this.props.icon?.icon ? (
            <s.HeaderIcon
              icon={this.props.icon.icon}
              style={this.styles}
              // style={
              //   this.props.icon?.color
              //     ? this.generateColor(this.props.icon.color) !== "error"
              //       ? { color: this.generateColor(this.props.icon.color) }
              //       : {}
              //     : {}
              // }
            />
          ) : null}
          <s.HeaderText>{this.props.text}</s.HeaderText>
        </>
      );
    };
    return (
      <s.Container>
        {this.props.options?.isLink ? (
          <s.HeaderLink to={this.props.options.to}>{content()}</s.HeaderLink>
        ) : (
          <s.Header>{content()}</s.Header>
        )}
      </s.Container>
    );
  }
}

export default HellaButton;
