import { Component, createRef } from "react";
import { connect } from "react-redux";
import gsap from "gsap/all";
import { ValhallaUtils } from "../../services";
import * as actions from "../../services/redux/actions";

import { TimeoutScreenStyles as s } from "../styles";

class timeoutScreen extends Component {
  constructor(props) {
    super(props);
    this.lockScreenRef = createRef();
    this.filterRef = createRef();
    this.mediaFilterRef = createRef();
    this.unlockAreaRef = createRef();

    this.valhallaUtils = new ValhallaUtils();
    this.date = new Date();
    this.state = {
      unlockHold: false,
      unlockValues: {
        mouseStart: 0,
      },
      clock: {
        hour: "00",
        minute: "00",
        second: "00",
      },
      notifications: [
        {
          ref: createRef(),
          id: 0,
          type: "info",
          title: "System",
          text: "This is a test 1",
          timestamp: new Date(
            `Mon Apr 05 2021 08:28:40 GMT+0400 (Azerbaycan Standart Saati)`
          ),
          controls: ["close"],
          isExpanded: false,
        },
        {
          ref: createRef(),
          id: 1,
          type: "info",
          title: "System",
          text: "This is a test2",
          timestamp: new Date(),
          controls: [],
          isExpanded: false,
        },
      ].sort(this.sortNotificationByDate),
    };
  }

  deleteNotification(itemId) {
    const targetNotification = this.state.notifications?.filter((item) =>
      item.id === itemId ? item : false
    )[0].ref.current.parentNode;

    gsap
      .to(targetNotification, {
        top: -50,
        opacity: 0.1,
      })
      .then(() => {
        this.valhallaUtils.clearStyles(targetNotification);
        const newNotifications = this.state.notifications?.filter((item) =>
          item.id === itemId ? false : item
        );
        this.setState(
          Object.assign(this.state, { notifications: newNotifications })
        );

        if (this.state.notifications.length === 0) {
          this.deactivateFilter();
        }
      });
  }

  calculateNotificationItemHeight(item) {
    let height = 0;
    if (item) {
      const itemStyles = window.getComputedStyle(item);

      height +=
        parseInt(itemStyles.paddingTop) + parseInt(itemStyles.paddingBottom);

      Array.prototype.slice.call(item.children)?.forEach((child, index) => {
        if (child.classList.contains("notification-item-content")) {
          const text = item.querySelector(".notification-item-content-text");
          const textStyles = window.getComputedStyle(text);
          height +=
            parseInt(textStyles.paddingTop ?? 0) +
            parseInt(textStyles.paddingBottom ?? 0) +
            parseInt(textStyles.marginTop ?? 0) +
            parseInt(textStyles.marginBottom ?? 0);
        }
        const childStyles = window.getComputedStyle(child);
        height +=
          parseInt(childStyles.height) +
          parseInt(childStyles.paddingTop ?? 0) +
          parseInt(childStyles.paddingBottom ?? 0) +
          parseInt(childStyles.marginTop ?? 0) +
          parseInt(childStyles.marginBottom ?? 0);
      });
    }
    return height;
  }

  toggleExpandMessage(id) {
    const notification = Array.prototype.slice
      .call(document.querySelectorAll(".notification-item-container"))
      .filter((item, index) => {
        if (parseInt(item.dataset.notificationId) === id) {
          return item;
        }
        return false;
      })[0].children[0];
    const isNotificationExpanded = this.state.notifications.filter(
      (item, index) => {
        if (item.id === id) return item;
        return false;
      }
    )[0].isExpanded;
    const timeline = gsap.timeline();

    const newNotifications = this.state.notifications.filter((item, index) => {
      if (item.id === id)
        return Object.assign(item, { isExpanded: !isNotificationExpanded });
      return item;
    });

    this.setState(
      Object.assign(this.state, {
        notifications: newNotifications,
      })
    );

    if (!isNotificationExpanded) {
      gsap.set(notification, {
        maxHeight: "none",
        height: notification.clientHeight,
      });
    }

    timeline
      .add([
        gsap.to(notification, {
          height: isNotificationExpanded
            ? "80px"
            : this.calculateNotificationItemHeight(notification),
        }),
      ])
      .then(() => {
        if (isNotificationExpanded) {
          gsap.set(notification, {
            maxHeight: "80px",
          });
        }
        gsap.to(notification, {
          height: this.calculateNotificationItemHeight(notification),
        });
      });
  }

  getNotificationItemIcon(type) {
    switch (type) {
      case "info":
        return <s.NotificationItemInfoIcon />;
      default:
        return null;
    }
  }

  lockScreenMouseFail() {
    const lockScreen = this.lockScreenRef.current;
    const lockScreenRect = lockScreen.getBoundingClientRect();
    const unlockLimit = Math.abs(Math.floor((window.innerHeight / 100) * 50));

    this.setState(
      Object.assign(this.state, {
        unlockHold: false,
        unlockValues: {
          mouseStart: 0,
          heightStart: 0,
        },
      })
    );

    if (Math.abs(lockScreenRect.top) >= unlockLimit) {
      this.props.closeLockScreen();
    } else {
      this.props.openLockScreen();
    }
  }

  lockScreenMouseDown(event) {
    const lockScreen = this.lockScreenRef.current;
    const lockScreenRect = lockScreen.getBoundingClientRect();
    this.setState(
      Object.assign(this.state, {
        unlockHold: true,
        unlockValues: {
          mouseStart: event.pageY - lockScreen.offsetTop - lockScreenRect.top,
        },
      })
    );
  }

  lockScreenMouseMove(event) {
    if (!this.state.unlockHold) return;
    const lockScreen = this.lockScreenRef.current;
    const yValue =
      event.pageY - lockScreen.offsetTop - this.state.unlockValues.mouseStart;

    if (Math.sign(yValue) === -1 || Math.sign(yValue === 0)) {
      gsap.set(lockScreen, {
        y: yValue,
      });
    }
  }

  async activateFilter() {
    return new Promise((resolve, reject) => {
      try {
        const filter = this.filterRef.current;
        const mediaFilter = this.mediaFilterRef.current;
        const timeline = gsap.timeline();

        timeline
          .add([
            gsap.fromTo(
              filter,
              {
                filter: "blur(0px)",
              },
              {
                filter: "blur(10px)",
                duration: 0.3,
                ease: "power.out",
              }
            ),
            gsap.fromTo(
              mediaFilter,
              {
                opacity:0,
              },
              {
                opacity:1,
                duration:0.4,
                ease:"power.out"
              }
            )
          ])
          .then(() => {
            filter.classList.add("active");
          });
      } catch (error) {
        reject(error);
      }
    });
  }

  async deactivateFilter() {
    return new Promise((resolve, reject) => {
      try {
        const filter = this.filterRef.current;
        const mediaFilter = this.mediaFilterRef.current;
        const timeline = gsap.timeline();

        timeline
          .add([
            gsap.fromTo(
              filter,
              {
                filter: "blur(10px)",
              },
              {
                filter: "blur(0px)",
                duration: 0.3,
                ease: "power.out",
              }
            ),
            gsap.fromTo(
              mediaFilter,
              {
                opacity:1,
              },
              {
                opacity:0,
                duration:0.4,
                ease:"power.out"
              }
            )
          ])
          .then(() => {
            filter.classList.remove("active");
          });
      } catch (error) {
        reject(error);
      }
    });
  }

  async toggleFilter() {
    const filter = this.filterRef.current;
    const mediaFilter = this.mediaFilterRef.current;
    if (filter && mediaFilter) {
      const isFilterActive = filter.classList.contains("active");
      if (isFilterActive) {
        await this.deactivateFilter().catch((error) => {
          throw new Error(error);
        });
      } else {
        await this.activateFilter().catch((error) => {
          throw new Error(error);
        });
      }
    }
  }

  sortNotificationByDate(a, b) {
    if (new Date(a.timestamp).getTime() > new Date(b.timestamp).getTime()) {
      return -1;
    } else {
      return 1;
    }
  }

  getTime(date) {
    const nowDate = new Date();
    const _date = new Date(date);
    if (
      Math.abs(nowDate.getMinutes() - _date.getMinutes()) <= 3 &&
      Math.abs(nowDate.getHours() - _date.getHours()) === 0
    ) {
      return "now";
    } else {
      return `${
        date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
      }:${
        date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
      }`;
    }
  }

  updateState() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    this.setState(
      Object.assign(this.state, {
        clock: {
          hour: `${hour < 10 ? `0${hour}` : hour}`,
          minute: `${minute < 10 ? `0${minute}` : minute}`,
          second: `${second < 10 ? `0${second}` : second}`,
        },
      })
    );
  }

  windowResizeEvent(event) {
    this.state.notifications?.forEach((item, index) => {
      const height = this.calculateNotificationItemHeight(item.ref.current);
      if (item.isExpanded) {
        if (height <= 83) {
          const newNotifications = this.state.notifications.filter(
            (notification, index) => {
              if (notification.id === item.id)
                return Object.assign(item, {
                  isExpanded: !item.isExpanded,
                });
              return item;
            }
          );
          this.setState(
            Object.assign(this.state, {
              notifications: newNotifications,
            })
          );
          gsap.set(item.ref.current, {
            height: height,
          });
        } else {
          gsap.set(item.ref.current, {
            height: height,
          });
        }
      } else {
        gsap.set(item.ref.current, {
          height: height <= 83 ? height : "80px",
        });
      }
    });
  }

  initNotificationItems() {
    const notifications = [
      ...this.state.notifications?.map((item, index) => item.ref.current),
    ];
    const timeline = gsap.timeline();

    timeline
      .add([
        gsap.fromTo(
          notifications,
          {
            visibility: "hidden",
            opacity: 0,
          },
          {
            visibility: "visible",
            opacity: 0.4,
            duration: 0.5,
            ease: "power.out",
            stagger: 0.3,
          }
        ),
        gsap.fromTo(
          notifications,
          {
            y: -50,
          },
          { y: 0, duration: 2.5, ease: "elastic.out", stagger: 0.3 }
        ),
      ])
      .delay(1);
  }

  componentDidMount() {
    this.updateState();
    this.hourInterval = setInterval(() => this.updateState(), 1000);
    this.initNotificationItems();

    if (this.state.notifications.length > 0) {
      this.toggleFilter().catch((error) => {
        throw new Error(error);
      });
    }

    this.unlockAreaMouseDownRef = (event) => this.lockScreenMouseDown(event);

    this.unlockAreaMouseFailRef = () => {
      this.setState(Object.assign(this.state, { isUnlockAreaActive: false }));
    };

    this.lockScreenMouseFailRef = (event) => {
      if (this.state.unlockHold) {
        this.lockScreenMouseFail(event);
      }
    };

    this.lockScreenRef.current.addEventListener("mouseup", (event) =>
      this.lockScreenMouseFailRef(event)
    );

    this.lockScreenRef.current.addEventListener("mouseleave", (event) =>
      this.lockScreenMouseFailRef(event)
    );

    this.windowResizeEventRef = (event) => this.windowResizeEvent(event);
    window.addEventListener("resize", (event) =>
      this.windowResizeEventRef(event)
    );

    this.lockScreenMouseMoveRef = (event) => this.lockScreenMouseMove(event);
    window.addEventListener("mousemove", (event) =>
      this.lockScreenMouseMoveRef(event)
    );
  }

  componentWillUnmount() {
    clearInterval(this.hourInterval);

    window.removeEventListener("resize", this.windowResizeEventRef);
    window.removeEventListener("mousemove", this.lockScreenMouseMoveRef);

    this.lockScreenRef.current.removeEventListener(
      "mouseleave",
      this.lockScreenMouseFailRef
    );
    this.lockScreenRef.current.removeEventListener(
      "mouseup",
      this.lockScreenMouseFailRef
    );
    this.unlockAreaRef.current.removeEventListener(
      "mouseleave",
      this.unlockAreaMouseFailRef
    );
    this.unlockAreaRef.current.removeEventListener(
      "mouseup",
      this.unlockAreaMouseFailRef
    );
    this.unlockAreaRef.current.removeEventListener(
      "mousedown",
      this.unlockAreaMouseDownRef
    );
  }

  render() {
    return (
      <s.Container
        id="lock-screen"
        ref={this.lockScreenRef}
        $isLockScreenOpen={this.props.isLockScreenOpen}
      >
        <s.Content>
          <s.BackgroundMediaContainer
            mediaUrl={`${process.env.PUBLIC_URL}/assets/media/images/timeout-screen-1.gif`}
          >
            <s.BackgroundMediaWrapper>
              <s.BackgroundMedia ref={this.filterRef}></s.BackgroundMedia>
              <s.BackgroundMediaFilter ref={this.mediaFilterRef}></s.BackgroundMediaFilter>
              {/* <s.BackgroundMedia
                type={"image"}
                mediaUrl={`${process.env.PUBLIC_URL}/assets/media/images/timeout-screen-1.gif`}
              /> */}
            </s.BackgroundMediaWrapper>
          </s.BackgroundMediaContainer>

          {/* <s.BackgroundMedia>
            <s.BackgroundMediaWrapper>
              <s.BackgroundMediaWrapperFilter
                ref={this.filterRef}
                src={`${process.env.PUBLIC_URL}/assets/media/images/timeout-screen-1.gif`}
              />
            </s.BackgroundMediaWrapper>
          </s.BackgroundMedia> */}

          <s.ClockContainer className="no-select">
            <s.Hour>{this.state.clock.hour}</s.Hour>
            <s.Minute>:{this.state.clock.minute}</s.Minute>
          </s.ClockContainer>

          <s.NotificationsContainer>
            <s.NotificationsContent>
              {this.state.notifications?.map((item, index) => {
                return (
                  <s.NotificationItemContainer
                    key={index}
                    data-notification-id={item.id}
                    className="notification-item-container"
                  >
                    <s.NotificationItem
                      ref={item.ref}
                      className="notification-item"
                    >
                      <s.NotificationItemHeader>
                        <s.NotificationItemIconArea>
                          {this.getNotificationItemIcon(item.type)}
                        </s.NotificationItemIconArea>
                        <s.NotificationItemTitleArea>
                          <s.NotificationItemTitle>
                            {item.title}
                          </s.NotificationItemTitle>
                        </s.NotificationItemTitleArea>
                        <s.NotificationItemTimeArea>
                          {this.getTime(item.timestamp)}
                        </s.NotificationItemTimeArea>
                      </s.NotificationItemHeader>
                      <s.NotificationItemContent className="notification-item-content">
                        <s.NotificationItemContentText className="notification-item-content-text">
                          {item.text}
                        </s.NotificationItemContentText>
                      </s.NotificationItemContent>
                    </s.NotificationItem>
                    {this.calculateNotificationItemHeight(item.ref.current) >
                    83 ? (
                      <s.NotificationItemExpandToggler
                        onClick={(event) => this.toggleExpandMessage(item.id)}
                        className="notification-expand-toggler"
                        $isExpanded={item.isExpanded}
                      />
                    ) : null}
                    <s.NotificationItemDeleteIconContainer
                      onClick={(event) => this.deleteNotification(item.id)}
                      className="notification-item-delete-button"
                    >
                      <s.NotificationItemDeleteIcon />
                    </s.NotificationItemDeleteIconContainer>
                  </s.NotificationItemContainer>
                );
              })}
            </s.NotificationsContent>
          </s.NotificationsContainer>

          <s.ScrollToUnlockContainer
            ref={this.unlockAreaRef}
            className="no-select"
            onMouseDown={(event) => this.unlockAreaMouseDownRef(event)}
            onMouseUp={(event) => this.unlockAreaMouseFailRef(event)}
            onMouseLeave={(event) => this.unlockAreaMouseFailRef(event)}
          >
            <s.MouseIcon />
            <s.UnlockText>Swipe Up To Unlock</s.UnlockText>
          </s.ScrollToUnlockContainer>
        </s.Content>
      </s.Container>
    );
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
  return {
    openLockScreen: () => dispatch({ type: actions.REQUEST_OPEN_LOCKSCREEN }),
    closeLockScreen: () => dispatch({ type: actions.REQUEST_CLOSE_LOCKSCREEN }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(timeoutScreen);
