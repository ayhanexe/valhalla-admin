import { Component, createRef } from "react";
import { connect } from "react-redux";
import { ValhallaUtils } from "../../../services";
import gsap from "gsap/all";

import * as s from "./checkbox.style";

class HellaCheckbox extends Component {
  constructor(props) {
    super(props);

    this.ref = createRef();
    this.utils = new ValhallaUtils();
    this.checked = this.props.checked ?? false;
  }

  toggleCheckbox(target) {
    const point = this.utils.closest(target, ".hella-checkbox-point");
    const parent = point.parentNode;
    const timeline = gsap.timeline();

    timeline.add([
      gsap.to(point, {
        left: this.props.checked ? 0 : parent.clientWidth / 2,
        duration: 0.15,
        ease: "power.out",
      }),
    ]);
  }

  componentDidMount() {
    if (this.checked) {
      const point = this.utils.closest(
        this.ref.current,
        ".hella-checkbox-point"
      );
      const parent = point.parentNode;
      gsap.set(point, {
        left: this.checked ? parent.clientWidth / 2 : 0,
      });
    }
  }

  render() {
    return (
      <s.Container
        ref={this.ref}
        onClick={(event) => {
          if (this.props.event) {
            this.props.event(event);
          }
          this.toggleCheckbox(event.target);
        }}
        className={`${this.props.checked ? "checked" : null}`}
      >
        <s.Point className="hella-checkbox-point" />
      </s.Container>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(HellaCheckbox);
