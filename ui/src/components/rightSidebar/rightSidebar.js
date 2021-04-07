import { Component } from "react";
import { connect } from "react-redux";
import {
  ThemeChanger,
  FontChanger,
  FontWeightChanger,
  FixedLeftSidebarToggler,
} from "..";
import { RightSidebarStyles as s } from "../styles";

class RightSidebar extends Component {
  render() {
    return (
      <s.Container
        isRightSidebarOpen={this.props.isRightSidebarOpen}
        id="right-sidebar"
        style={{ right: this.props.isRightSidebarOpen ? 0 : null }}
      >
        <s.RightSidebarTitle>Settings</s.RightSidebarTitle>

        {/* Test Area */}

        {/* <HellaSelect /> */}
        <s.SidebarContent>
          <div className="row">
            <div className="col-6 col-sm-12">
              <s.RightSidebarOptionTitle>Themes</s.RightSidebarOptionTitle>
              <ThemeChanger />
            </div>
            <div className="col-6 col-sm-12">
              <s.RightSidebarOptionTitle>Font Family</s.RightSidebarOptionTitle>
              <FontChanger />
            </div>
            <div className="col-12">
              <s.RightSidebarOptionTitle>Font Weight</s.RightSidebarOptionTitle>
              <FontWeightChanger />
            </div>
            <div className="row align-items-center">
              <div className="col-6">
                <s.RightSidebarOptionTitle>
                  Fixed Left Sidebar
                </s.RightSidebarOptionTitle>
              </div>
              <div className="col-6 pt-2">
                <FixedLeftSidebarToggler />
              </div>
            </div>
          </div>
        </s.SidebarContent>

        {/* Test Area */}

        {/* Toggler */}
        <s.Toggler
          $isLeftSidebarOpen={this.props.isLeftSidebarOpen}
          $isRightSidebarOpen={this.props.isRightSidebarOpen}
          onClick={this.props.toggleRightSidebar}
        >
          <s.ToggleIcon
            id="right-sidebar-toggler-icon"
            className={`${this.props.isRightSidebarOpen ? "active" : ""}`}
          ></s.ToggleIcon>
        </s.Toggler>
      </s.Container>
    );
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
  return {
    toggleRightSidebar: () =>
      dispatch({ type: "TOGGLE_RIGHT_SIDEBAR_REQUESTED" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RightSidebar);
