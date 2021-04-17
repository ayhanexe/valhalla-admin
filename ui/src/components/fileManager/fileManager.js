import React, { Component, createRef } from "react";
import { ValhallaUtils } from "../../services";

import { FileManagerStyles as s } from "../styles";

class fileManager extends Component {
  constructor(props) {
    super(props);

    this.cooldown = false;
    this.valhallaUtils = new ValhallaUtils();
    this.ref = createRef();

    this.state = {
      currentPath: "valhalla-admin",
      sidebarData: [
        {
          path: "w:/",
          defaultOpen: true,
          children: [
            {
              path: "php",
              children: [
                {
                  path: "codegram",
                },
                {
                  path: "laravel-test",
                },
                {
                  path: "comment-app-task",
                },
              ],
            },
            {
              path: "projects",
              children: [
                {
                  path: "adminka-template",
                },
                {
                  path: "custom-curser-and-animation-gsap",
                },
                {
                  path: "valhalla-admin",
                  children: [
                    {
                      isFile: true,
                      filename: "server.js",
                    },
                  ],
                },
              ],
            },
            {
              path: "python",
            },
            {
              path: "tests",
            },
          ],
        },
      ],
      window: {
        w: window.innerWidth,
        h: window.innerHeight,
      },
      size: {
        w: 0,
        h: 0,
      },
    };
  }

  toggleDropdown(event) {
    return new Promise((resolve, reject) => {
      try {
        this.cooldown = true;
        const dropdownContainer = this.valhallaUtils.closest(
          event.target,
          ".dropdown-effect-trigger"
        );
        dropdownContainer.classList.toggle("opened");
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  isDropdown(item) {
    if (item.children && item.children.length > 0) {
      for (let i in item.children) {
        if (item.children[i].path) {
          return true;
        }
      }
      return false;
    } else {
      return false;
    }
  }

  changePath(item) {
    if (item) {
      this.setState(Object.assign(this.state, { currentPath: item.path }));
    }
  }

  getAllSidebarContentAsArray(data) {
    let result = [];

    for (let i in data) {
      result.push(data[i]);
      if (data[i].children && data[i].children.length > 0) {
        result.push(...this.getAllSidebarContentAsArray(data[i].children));
      }
    }

    return result;
  }

  getPathContent() {
    const sidebarContent = this.getAllSidebarContentAsArray(
      this.state.sidebarData
    ).filter((item) => (item.path === this.state.currentPath ? item : null))[0];

    return (
      <>
        <s.PathTitle>{sidebarContent.path}</s.PathTitle>
        {sidebarContent.children && sidebarContent.children.length > 0
          ? sidebarContent.children.map((item, index) => {
              if (!item.isFile) {
                return (
                  <s.PathFolder
                    onClick={(event) => this.changePath(item)}
                    folder={{
                      name: item.path || "",
                    }}
                    key={index}
                  />
                );
              } else {
                return <s.PathFile file={item} key={index} />;
              }
            })
          : null}
      </>
    );
  }

  validateData(data, type) {
    switch (type) {
      case "child":
        if (data) {
          if (data.path) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      default:
        if (data) {
          if (data.path) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
    }
  }

  generateChildContent(data) {
    if (data) {
      if (Array.isArray(data)) {
        return data.map((item, index) => {
          if (this.validateData(item, "child")) {
            if (this.isDropdown(item)) {
              return (
                <s.SidebarInnerDropdown
                  className={`sidebar-inner-dropdown dropdown-effect-trigger ${
                    item.defaultOpen ? "opened" : ""
                  }`}
                  key={index}
                >
                  <s.SidebarInnerDropdownHeader
                    className="sidebar-inner-dropdown-header"
                    onClick={(event) => {
                      if (!this.cooldown) {
                        this.changePath(item);
                        this.toggleDropdown(event).then(
                          () => (this.cooldown = false)
                        );
                      }
                    }}
                  >
                    <s.SidebarItemDropdownIcon className="sidebar-item-dropdown-icon" />
                    <s.SidebarItemDropdownFolderIcon />
                    <s.SidebarItemHeaderText>
                      {item.path}
                    </s.SidebarItemHeaderText>
                  </s.SidebarInnerDropdownHeader>
                  <s.SidebarInnerDropdownContainer className="sidebar-inner-dropdown-container">
                    {this.generateChildContent(item.children)}
                  </s.SidebarInnerDropdownContainer>
                </s.SidebarInnerDropdown>
              );
            } else {
              return (
                <s.SidebarInnerDropdownItem
                  onClick={() => {
                    if (!this.cooldown) {
                      this.changePath(item);
                    }
                  }}
                  className="sidebar-inner-dropdown-item"
                  key={index}
                >
                  <s.SidebarItemDropdownFolderIcon />
                  <s.SidebarItemHeaderText>{item.path}</s.SidebarItemHeaderText>
                </s.SidebarInnerDropdownItem>
              );
            }
          } else {
            return null;
          }
        });
      }
    }
  }

  generateSidebarContent(data, index) {
    if (data) {
      if (Array.isArray(data)) {
        return data.map((item, index) => {
          if (this.validateData(item)) {
            if (this.isDropdown(item)) {
              return (
                <s.SidebarDropdown
                  className={`dropdown-effect-trigger ${
                    item.defaultOpen ? "opened" : ""
                  }`}
                  key={index}
                >
                  <s.SidebarDropdownHeader
                    className="sidebar-dropdown-header"
                    onClick={(event) => {
                      if (!this.cooldown) {
                        this.changePath(item);
                        this.toggleDropdown(event).then(
                          () => (this.cooldown = false)
                        );
                      }
                    }}
                  >
                    <s.SidebarItemDropdownIcon className="sidebar-item-dropdown-icon" />
                    <s.SidebarItemDropdownFolderIcon />
                    <s.SidebarItemHeaderText>
                      {item.path}
                    </s.SidebarItemHeaderText>
                  </s.SidebarDropdownHeader>
                  <s.SidebarBaseDropdownWrapper>
                    <s.SidebarDropdownContainer>
                      {this.generateChildContent(item.children)}
                    </s.SidebarDropdownContainer>
                  </s.SidebarBaseDropdownWrapper>
                </s.SidebarDropdown>
              );
            } else {
              return (
                <s.SidebarItem
                  onClick={() => {
                    if (!this.cooldown) {
                      this.changePath(item);
                    }
                  }}
                  key={index}
                >
                  <s.SidebarItemDropdownFolderIcon />
                  <s.SidebarItemHeaderText>{item.path}</s.SidebarItemHeaderText>
                </s.SidebarItem>
              );
            }
          } else {
            return null;
          }
        });
      }
    }
  }

  windowOnResize() {
    const fileManager = this.ref.current;

    this.setState(
      Object.assign(this.state, {
        window: {
          w: window.innerWidth,
          h: window.innerHeight,
        },
        size: {
          w: fileManager.clientWidth,
          h: fileManager.clientHeight,
        },
      })
    );
  }

  componentDidMount() {
    this.windowOnResizeRef = () => this.windowOnResize();

    this.windowOnResizeRef();

    window.addEventListener("resize", this.windowOnResizeRef);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.windowOnResizeRef);
  }

  render() {
    return (
      <s.Container ref={this.ref} size={this.state.size}>
        <s.Header>
          <s.TabsContainer id="tabs-container">
            <s.TabItem className="tab-item active">
              <s.TabText>New Tab</s.TabText>
            </s.TabItem>
            <s.NewTabButton />
          </s.TabsContainer>
          <s.SidebarIcon />

          <s.NavigatorButtonsContainer>
            <s.PrevNavigateButton />
            <s.NextNavigateButton />
          </s.NavigatorButtonsContainer>

          <s.BreadcrumbContainer>
            <s.BreadcrumbRefreshButton />
            <s.BreadcrumbPreviousNavigate />
            <s.BreadcrumbHistoryButton />

            <s.BreadcrumbItem>valhalla-admin</s.BreadcrumbItem>
            <s.BreadcrumbItem>ui</s.BreadcrumbItem>
            <s.BreadcrumbItem>src</s.BreadcrumbItem>
            <s.BreadcrumbItem className="deactive">components</s.BreadcrumbItem>
          </s.BreadcrumbContainer>
        </s.Header>
        <s.ContentContainer>
          <s.Sidebar id="file-manager-sidebar">
            <s.SidebarItemsGroup className="no-select">
              {this.generateSidebarContent(this.state.sidebarData) ?? "error"}
            </s.SidebarItemsGroup>
          </s.Sidebar>
          <s.PathContentContainer size={this.state.size}>
            {this.getPathContent(this.state.currentPath)}
            {/* <s.PathFile className="file-item" file={{ filename: "test.js" }} /> */}
          </s.PathContentContainer>
        </s.ContentContainer>
      </s.Container>
    );
  }
}

export default fileManager;
