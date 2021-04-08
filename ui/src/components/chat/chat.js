import { Component, createRef } from "react";
import { connect } from "react-redux";
import gsap from "gsap/all";

import { ChatStyles as s } from "../styles";
import { ValhallaUtils } from "../../services";

class Chat extends Component {
  togglePeopleArea() {
    const peopleArea = this.peopleAreaRef.current;
    const isPeopleAreaHidden =
      window.getComputedStyle(peopleArea).visibility === "hidden";
    const timeline = gsap.timeline();

    if (isPeopleAreaHidden) {
      gsap.set(peopleArea, {
        visibility: "visible",
      });
    }

    timeline
      .add([
        gsap.fromTo(
          peopleArea,
          {
            y: isPeopleAreaHidden ? 100 : 0,

            opacity: isPeopleAreaHidden ? 0 : 1,
          },
          {
            y: isPeopleAreaHidden ? 0 : 100,
            opacity: isPeopleAreaHidden ? 1 : 0,
            duration: 0.5,
            ease: "power.out",
          }
        ),
      ])
      .then(() => {
        if (!isPeopleAreaHidden) {
          gsap.set(peopleArea, {
            visibility: "hidden",
          });
          this.valhallaUtils.clearStyles(peopleArea);
        }
      });
  }

  sendMessage(event) {
    return new Promise((resolve, reject) => {
      try {
        event.preventDefault();
        const _text_ = event.target[0].value;
        const date = new Date();
        const _time_ = `${date.getHours() < 10 ? 0 : ""}${date.getHours()}:${
          date.getMinutes() < 10 ? 0 : ""
        }${date.getMinutes()}`;

        if (_text_.trim().length > 0) {
          this.setState(
            Object.assign(this.state, {
              messages: [
                ...this.state.messages,
                {
                  text: _text_,
                  time: _time_,
                  user: this.state.currentUser,
                },
              ],
            })
          );
        }
        event.target[0].value = "";
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  constructor(props) {
    super(props);
    this.valhallaUtils = new ValhallaUtils();

    this.triggerWidth = 500;

    this.containerWrapperRef = createRef();
    this.peopleAreaRef = createRef();
    this.messageAreaRef = createRef();
    this.messagesContainerRef = createRef();

    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      containerWidth: 0,
      currentUser: {
        id: 1,
        name: "Ayxan A.",
        profileImage: `${process.env.PUBLIC_URL}/assets/media/profiles/admin-profile.jpeg`,
      },
      messages: [
        {
          text: "Hi super coder :) I need your help",
          time: "22:00",
          user: {
            id: 0,
            name: "Laura S.",
            profileImage: `${process.env.PUBLIC_URL}/assets/media/profiles/laura-profile.jpg`,
          },
        },
        {
          text: `Hi :) What's the problem?`,
          time: "22:03",
          user: {
            id: 1,
            name: "Ayxan A.",
            profileImage: `${process.env.PUBLIC_URL}/assets/media/profiles/admin-profile.jpeg`,
          },
        },
      ],
    };
  }

  updateState() {
    this.setState(
      Object.assign(this.state, {
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        containerWidth: this.containerWrapperRef.current.clientWidth,
      })
    );
  }

  scrollChatToFirstMessage() {
    const messageArea = this.messageAreaRef.current;
    const messagesContainer = this.messagesContainerRef.current;
    const lastMessage = Array.prototype.slice
      .call(messagesContainer.children)
      .reverse()[0];
    messageArea.scrollTop = lastMessage?.offsetTop;
  }

  componentDidMount() {
    this.updateState();
    this.updateStateReference = () => this.updateState();
    this.scrollChatToFirstMessage();
    window.addEventListener("resize", this.updateStateReference);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateStateReference);
  }

  render() {
    return (
      <s.Container className={`${this.props.className ?? ''}`} height={this.props.height ?? 400}>
        <s.ContainerWrapper
          ref={this.containerWrapperRef}
          $width={this.state.containerWidth}
        >
          <s.PeopleArea
            $width={this.state.containerWidth}
            ref={this.peopleAreaRef}
          >
            <s.Form
              onSubmit={(event) => {
                event.preventDefault();
                return false;
              }}
            >
              <s.Input type="text" placeholder="Search" />
              <s.Button type="submit">
                <s.PencilIcon />
              </s.Button>
              {this.state.containerWidth <= this.triggerWidth ? (
                <s.Button onClick={(event) => this.togglePeopleArea(event)}>
                  <s.ClosePeopleAreaIcon />
                </s.Button>
              ) : null}
            </s.Form>

            {/* Users */}
            <s.PeopleItemContainer className="active">
              <s.PeopleItemSettingsIcon className="people-item-settings-button" />
              <s.PeopleItemTime>22:03</s.PeopleItemTime>
              <s.UserProfile
                image={`${process.env.PUBLIC_URL}/assets/media/profiles/laura-profile.jpg`}
              />
              <s.PeopleItemContent>
                <s.PeopleItemTitle>Laura S.</s.PeopleItemTitle>
                <s.PeopleItemDescription>
                  You: Hi :) What's the problem?
                </s.PeopleItemDescription>
              </s.PeopleItemContent>
            </s.PeopleItemContainer>

            <s.PeopleItemContainer>
              <s.PeopleItemSettingsIcon className="people-item-settings-button" />
              <s.PeopleItemTime>22:03</s.PeopleItemTime>
              <s.UserProfile
                image={`${process.env.PUBLIC_URL}/assets/media/profiles/chocolate-marmalade.jpg`}
              />
              <s.PeopleItemContent>
                <s.PeopleItemTitle>Chocolate Marmalade</s.PeopleItemTitle>
                <s.PeopleItemDescription>
                  Mmmmm.... I'm sooo tasty XD
                </s.PeopleItemDescription>
              </s.PeopleItemContent>
            </s.PeopleItemContainer>
          </s.PeopleArea>
          {/* Content */}
          <s.ContentArea>
            <s.ContentAreaHeader>
              <s.UserProfile
                className="header-style"
                image={`${process.env.PUBLIC_URL}/assets/media/profiles/laura-profile.jpg`}
              />
              <s.ContentHeaderTextArea>
                <s.ContentHeaderTitle>Laura S.</s.ContentHeaderTitle>
                <s.ContentHeaderStatus className="online">
                  online
                </s.ContentHeaderStatus>
              </s.ContentHeaderTextArea>
              <s.ContentHeaderIconContainer>
                {this.state.containerWidth <= this.triggerWidth ? (
                  <s.ContentHeaderPeopleIcon
                    onClick={(event) => this.togglePeopleArea(event)}
                  />
                ) : null}
                <s.ContentHeaderSettingsIcon />
              </s.ContentHeaderIconContainer>
            </s.ContentAreaHeader>
            <s.MessageArea ref={this.messageAreaRef}>
              <s.MessagesContainer ref={this.messagesContainerRef}>
                {this.state.messages.map((item, index) => (
                  <s.MessageItem
                    key={`${item.user.id}-${index}`}
                    className={`${
                      this.state.currentUser.id !== item.user.id
                        ? "other"
                        : null
                    }`}
                  >
                    <s.UserProfile
                      className="message-style message-profile"
                      image={item.user.profileImage}
                    />
                    <s.MessageItemTextContainer>
                      <s.MessageItemText $fontFamily={this.props.fontFamily}>
                        {item.text}
                      </s.MessageItemText>
                    </s.MessageItemTextContainer>
                  </s.MessageItem>
                ))}
              </s.MessagesContainer>
            </s.MessageArea>
            <s.InputArea>
              <s.MessageForm
                onSubmit={(event) =>
                  this.sendMessage(event)
                    .then(() => this.scrollChatToFirstMessage())
                    .catch((error) => {
                      throw new Error(error);
                    })
                }
              >
                <s.MessageInput placeholder="Type" />
                <s.MessageSubmit>
                  <s.SendMessageIcon />
                </s.MessageSubmit>
              </s.MessageForm>
            </s.InputArea>
          </s.ContentArea>
        </s.ContainerWrapper>
      </s.Container>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Chat);
