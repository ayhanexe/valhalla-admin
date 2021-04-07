import { connect } from "react-redux";
import { Component } from "react";

import { ValhallaUtils } from "../../../services";
import gsap from "gsap/all";
import * as s from "./select.styles";

class HellaSelect extends Component {
  constructor(props) {
    super(props);

    this.utils = new ValhallaUtils();
    this.cooldown = false;

    this.styles = this.props.icon?.color
      ? this.generateColor(this.props.icon.color) !== "error"
        ? { color: this.generateColor(this.props.icon.color) }
        : {}
      : {};
  }

  toggleDropdown(event) {
    this.cooldown = true;
    return new Promise(async (resolve, reject) => {
      try {
        const dropdown = this.utils.closest(event.target, ".dropdown");
        const dropdownIcon = this.props.icon?.dropdownIcon
          ? this.utils.closest(event.target, ".dropdown-icon")
          : null;
        const timeline = gsap.timeline();
        const isDropdownOpen = dropdown.clientHeight !== 0;

        await timeline
          .add([
            gsap.to(dropdown, {
              height: isDropdownOpen
                ? 0
                : this.utils.calculateDropdown(dropdown),
              duration: 0.5,
              ease: "power.out",
            }),
            this.props.icon?.dropdownIcon
              ? gsap.to(dropdownIcon, {
                  rotateZ: isDropdownOpen ? 0 : 90,
                  rotateX: isDropdownOpen ? 0 : 180,
                  duration: 0.15,
                  ease: "power.out",
                })
              : null,
          ])
          .then(() => {
            this.cooldown = false;
            resolve();
          });
      } catch (error) {
        reject(error);
      }
    });
  }

  validateData(data) {
    let result = false;
    if (data?.text) {
      result = true;
    }
    return result;
  }

  validateLink(data) {
    let result = false;
    if (data?.isLink && data?.to) {
      result = true;
    }
    return result;
  }

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

  render() {
    return (
      <s.Container>
        <s.Header
          onClick={(event) =>
            this.cooldown
              ? null
              : this.toggleDropdown(event).catch((error) => {
                  throw new Error(error);
                })
          }
        >
          {this.props.icon?.icon ? (
            <s.HeaderIcon icon={this.props.icon.icon} style={this.styles} />
          ) : null}
          <s.HeaderText>
            {this.props.selectedText ?? "please fill selectedText attribute!"}
          </s.HeaderText>
          {this.props.icon?.dropdownIcon ? (
            <s.DropdownIcon className="dropdown-icon" />
          ) : null}
        </s.Header>
        <s.Dropdown className="dropdown">
          {Array.isArray(this.props.dropdownData)
            ? this.props.dropdownData.map((item, index) => {
                return this.validateData(item) &&
                  this.props.selectedText !== item.text ? (
                  item.isLink ? (
                    this.validateLink(item) ? (
                      <s.DropdownItemLink
                        key={`${index.text}-${index}`}
                        to={item.to}
                      >
                        {item.text}
                      </s.DropdownItemLink>
                    ) : null
                  ) : (
                    <s.DropdownItem
                      onClick={item.onClick}
                      key={`${item.text}-${index}`}
                    >
                      {item.text}
                    </s.DropdownItem>
                  )
                ) : null;
              })
            : null}
        </s.Dropdown>
      </s.Container>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(HellaSelect);
