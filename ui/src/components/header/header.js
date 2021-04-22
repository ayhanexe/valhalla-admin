import { Component } from "react";
import { connect } from "react-redux";
import gsap from "gsap/all";
import * as actions from "../../services/redux/actions";

import { HeaderStyles as s } from "../styles";
import { UserArea } from "..";
import { ValhallaUtils } from "../../services";

class Header extends Component {
  get appContainer() {
    return document.querySelector("#app-container");
  }
  get appContent() {
    return document.querySelector("#app-content");
  }
  get header() {
    return document.querySelector("#header");
  }
  get leftSidebar() {
    return document.querySelector("#left-sidebar");
  }

  constructor(props) {
    super(props);
    this.valhallaUtils = new ValhallaUtils();
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      if (this.props.toggleFixedLeftSidebar && this.props.isLeftSidebarOpen) {
        const appStyles = window.getComputedStyle(this.appContainer);
        gsap.set([this.header, this.app], {
          width: `${
            window.innerWidth -
            (this.leftSidebar.clientWidth +
              parseInt(appStyles.paddingLeft) +
              parseInt(appStyles.paddingRight))
          }`,
          marginLeft: `${this.leftSidebar.clientWidth}`,
        });
      }
    });
  }
  render() {
    return (
      <s.Container id="header">
        <s.Header>
          <s.HeaderTitle to="/" className="text-reset text-decoration-none">Valhalla</s.HeaderTitle>
          <s.LockScreenIcon onClick={this.props.lockScreen} />
          <UserArea onClick={(events) => this.valhallaUtils.openLockScreen()} />
        </s.Header>
      </s.Container>
    );
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
  return {
    lockScreen: () => dispatch({ type: actions.REQUEST_TOGGLE_LOCKSCREEN }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
