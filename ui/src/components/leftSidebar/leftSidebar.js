import { Component } from "react";
import { connect } from "react-redux";
import { HellaButton, HellaSelect } from "../hella-components";
import { faLeaf, faBoxes } from "@fortawesome/free-solid-svg-icons";
import { LeftSidebarStyles as s } from "../styles";

class LeftSidebar extends Component {
  render() {
    return (
      <s.Container
        id="left-sidebar"
        isLeftSidebarOpen={this.props.isLeftSidebarOpen}
        style={{ left: this.props.isLeftSidebarOpen ? 0 : null }}
      >
        <s.Title>Valhalla</s.Title>

        <s.SectorTitle>General</s.SectorTitle>

        <HellaButton
          text="Dashboard"
          icon={{
            icon: faLeaf,
            color: "random",
          }}
          options={{
            isLink: true,
            to: "/",
          }}
        />

        <HellaSelect
          selectedText="Apps"
          icon={{
            dropdownIcon: true,
            icon: faBoxes,
            color: "random",
          }}
          dropdownData={[
            {
              text: "Chat",
              isLink: true,
              to: "/valhalla-chat",
            },
            {
              text: "File System",
              isLink: true,
              to: "/file-system",
            },
          ]}
        />

        {/* <HellaButton
          text="Test"
          icon={{
            icon: faImages,
            color: "random",
          }}
          options={{
            isLink: true,
            to: "/test",
          }}
        />

        <HellaSelect
          selectedText="Youtube"
          icon={{
            dropdownIcon: false,
            icon: faLeaf,
            color: "random",
          }}
          dropdownData={[
            {
              text: "Dashboard",
              isLink: true,
              to: "/",
            },
          ]}
        />

        <HellaSelect
          selectedText="Youtube"
          icon={{
            dropdownIcon: true,
            icon: faLeaf,
            color: "random",
          }}
          dropdownData={[
            {
              text: "Dashboard",
              isLink: true,
              to: "/",
            },
          ]}
        /> */}

        <s.Toggler
          $isRightSidebarOpen={this.props.isRightSidebarOpen}
          $isLeftSidebarOpen={this.props.isLeftSidebarOpen}
          onClick={this.props.toggleLeftSidebar}
        >
          <s.ToggleIcon
            id="left-sidebar-toggler-icon"
            className={`${this.props.isLeftSidebarOpen ? "active" : ""}`}
          ></s.ToggleIcon>
        </s.Toggler>
      </s.Container>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLeftSidebar: () =>
      dispatch({ type: "TOGGLE_LEFT_SIDEBAR_REQUESTED" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftSidebar);
