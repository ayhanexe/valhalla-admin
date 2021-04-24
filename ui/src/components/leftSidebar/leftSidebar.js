import { Component } from "react";
import { connect } from "react-redux";
import { CustomScrollbar } from "..";
import { HellaButton, HellaSelect } from "../hella-components";
import {
  faLeaf,
  faBoxes,
  faParagraph,
  faTable,
  faFileAlt
} from "@fortawesome/free-solid-svg-icons";
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
        <CustomScrollbar>
          <s.LeftSidebarContent>
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

            <s.SectorTitle>Other</s.SectorTitle>

            <HellaSelect
              selectedText="UI"
              icon={{
                dropdownIcon: true,
                icon: faBoxes,
                color: "random",
              }}
              dropdownData={[
                {
                  text: "Accordion",
                  isLink: true,
                  to: "/ui/accordion",
                },
                {
                  text: "Alerts",
                  isLink: true,
                  to: "/ui/alerts",
                },
                {
                  text: "Badge",
                  isLink: true,
                  to: "/ui/badge",
                },
                {
                  text: "Breadcrumbs",
                  isLink: true,
                  to: "/ui/breadcrumbs",
                },
                {
                  text: "Buttons",
                  isLink: true,
                  to: "/ui/buttons",
                },
                {
                  text: "Cards",
                  isLink: true,
                  to: "/ui/cards",
                },
                {
                  text: "Carousel",
                  isLink: true,
                  to: "/ui/carousel",
                },
                {
                  text: "Collapse",
                  isLink: true,
                  to: "/ui/collapse",
                },
                {
                  text: "Lists",
                  isLink: true,
                  to: "/ui/lists",
                },
                {
                  text: "Modals",
                  isLink: true,
                  to: "/ui/modals",
                },
                {
                  text: "Navs and Tabs",
                  isLink: true,
                  to: "/ui/navntab",
                },
                {
                  text: "Navbar",
                  isLink: true,
                  to: "/ui/navbar",
                },
                {
                  text: "offCanvas",
                  isLink: true,
                  to: "/ui/offcanvas",
                },
                {
                  text: "Progress Bars",
                  isLink: true,
                  to: "/ui/progress-bars",
                },
                {
                  text: "Scrollspy",
                  isLink: true,
                  to: "/ui/scrollspy",
                },
                {
                  text: "Spinners",
                  isLink: true,
                  to: "/ui/spinners",
                },
                {
                  text: "Toasts",
                  isLink: true,
                  to: "/ui/toasts",
                },
                {
                  text: "Ratios",
                  isLink: true,
                  to: "/ui/ratios",
                },
              ]}
            />

            <HellaButton
              text="Typography"
              icon={{
                dropdownIcon: true,
                icon: faParagraph,
                color: "random",
              }}
              options={{
                isLink: true,
                to: "/typography",
              }}
            />

            <HellaSelect
              selectedText="Tables"
              icon={{
                dropdownIcon: true,
                icon: faTable,
                color: "random",
              }}
              dropdownData={[
                {
                  text: "Standart Tables",
                  isLink: true,
                  to: "/tables/standart",
                },
                {
                  text: "Plugin Tables",
                  isLink: true,
                  to: "/tables/plugin-tables",
                },
              ]}
            />

            <HellaSelect
              selectedText="Pages"
              icon={{
                dropdownIcon: true,
                icon: faFileAlt,
                color: "random",
              }}
              dropdownData={[
                {
                  text: "404 Page",
                  isLink: true,
                  to: "/pages/404",
                },
                // {
                //   text: "Login Page",
                //   isLink: true,
                //   to: "/pages/login",
                // },
              ]}
            />
            
            
          </s.LeftSidebarContent>
        </CustomScrollbar>

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
