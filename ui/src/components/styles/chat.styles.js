import styled from "styled-components/macro";

const PencilSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-pencil-square ${props.className}`}
    viewBox="0 0 16 16"
  >
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
    <path
      fillRule="evenodd"
      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
    />
  </svg>
);

const ThreeDotsSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-three-dots ${props.className}`}
    viewBox="0 0 16 16"
  >
    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
  </svg>
);

const SettingsSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-sliders ${props.className}`}
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
    />
  </svg>
);

const SendMessageSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-cursor-fill ${props.className}`}
    viewBox="0 0 16 16"
  >
    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
  </svg>
);

const XSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-x ${props.className}`}
    viewBox="0 0 16 16"
    onClick={props.onClick}
  >
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
  </svg>
);

const PeopleSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-people-fill ${props.className}`}
    viewBox="0 0 16 16"
    onClick={props.onClick}
  >
    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    <path
      fillRule="evenodd"
      d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
    />
    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
  </svg>
);

const triggerWidth = 500;

export const Container = styled.div`
  min-width: 100px;
  height: ${(props) => props.height};
  background-color: #05070c;
  
  padding: 4px;
  
  border-radius: 10px;
  position: relative;

  &.full-screen {
    width: 100%;
    height: 100vh;
  }
`;

export const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: grid;

  grid-template-columns: minmax(150px, 0.6fr) 1fr;
  grid-template-rows: 1fr;
  gap: 0 4px;
  grid-template-areas: "people-area content-area";
  border-radius: 10px;
  position:relative;
  overflow: hidden;
  
  
  ${(props) =>
    props.$width <= triggerWidth
      ? `grid-template-areas: "content-area";
    grid-template-columns: 1fr`
      : null};
  }
  ${(props) =>
    props.$width > triggerWidth
      ? `
  @media (min-width: 700px) {
    grid-template-columns: minmax(150px, 0.4fr) 1fr;
  }
  `
      : null}
  
`;

export const PeopleArea = styled.div`
  grid-area: people-area;
  background-color: #171a28;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 7px 7px;
  overflow: hidden;

  z-index: 2;
  ${(props) =>
    props.$width <= triggerWidth
      ? `
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    `
      : null}
`;
export const ContentArea = styled.div`
  background-color: blue;
  grid-area: content-area;
  background-color: #171a28;
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 65px 1fr 50px;
  gap: 0px 0px;
  grid-template-areas:
    "header"
    "messages"
    "input-area";
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  margin: 0 0 15px 0;
`;
export const Input = styled.input`
  width: 100%;
  background-color: #0c0f1c;
  color: #b5bad3;
  padding: 0 0 0 15px;
  font-size: 0.9em;
  border-radius: 7px;
  border: none;
  outline: none !important;
`;
export const Button = styled.button`
  width: 56px;
  height: 30px;
  border: none;
  background-color: #0c0f1c;
  border-radius: 7px;
  margin-left: 7px;
  cursor: pointer;
`;

export const PencilIcon = styled(PencilSVG)`
  width: 12px;
  height: 12px;
  fill: #b5bad3;
`;

export const ClosePeopleAreaIcon = styled(XSVG)`
  width: 22px;
  height: 22px;
  fill: #b5bad3;
`;

export const PeopleItemContainer = styled.div`
  width: 100%;
  height: 65px;
  margin: 5px 0;
  border-radius: 7px;
  display: flex;
  align-items: center;
  padding: 10px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease-out, opacity 0.3s ease-out;
  opacity: 0.5;
  &.active {
    background-color: rgba(12, 15, 28, 0.5);
    opacity: 1;
    .people-item-settings-button {
      opacity: 0.5;
    }
  }
  &:hover {
    background-color: rgba(12, 15, 28, 0.5);
    opacity: 1;
    .people-item-settings-button {
      opacity: 0.5;
    }
  }
`;

export const UserProfile = styled.div`
  width: 45px;
  height: 45px;
  flex: 0 0 45px;
  background: #0c0f1c url(${(props) => props.image ?? ""}) center no-repeat;
  background-size: cover;
  border-radius: 50%;
`;

export const PeopleItemContent = styled.div`
  max-width: calc(100% - 55px);
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const PeopleItemTitle = styled.span`
  width: 100%;
  font-size: 1em;
  color: #b5bad3;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const PeopleItemDescription = styled.span`
  // width:calc(100% - 55px);
  width: 100%;
  font-size: 0.8em;
  color: #b5bad3;
  opacity: 0.4;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const PeopleItemSettingsIcon = styled(ThreeDotsSVG)`
  width: 12px;
  height: 12px;
  fill: #b5bad3;
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease-out;
  &:hover {
    opacity: 1 !important;
  }
`;

export const PeopleItemTime = styled.span`
  font-size: 0.65em;
  font-weight: 600;
  color: #707382;
  position: absolute;
  bottom: 2px;
  right: 10px;
`;

export const ContentAreaHeader = styled.div`
  width: 100%;
  height: auto;
  max-height: 65px;
  background-color: #0b0d19;
  display: flex;
  align-items: center;
  padding: 7px 0 7px 10px;
  grid-area: header;
  z-index: 1;
  .header-style {
    width: ${(props) =>
      `${
        parseInt(props.$width / 100) * (parseInt(props.$width) < triggerWidth)
          ? 40
          : 50
      }px`};
    height: ${(props) =>
      `${
        parseInt(props.$width / 100) * (parseInt(props.$width) < triggerWidth)
          ? 40
          : 50
      }px`};
    flex: ${(props) =>
      `0 0 ${
        parseInt(props.$width / 100) * (parseInt(props.$width) < triggerWidth)
          ? 40
          : 50
      }px`};
  }
`;

export const ContentHeaderTextArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  line-height: 1.1;
`;

export const ContentHeaderTitle = styled.span`
  font-size: 1.05em;
  color: #b5bad3;
`;
export const ContentHeaderStatus = styled.span`
  font-size: 0.75em;
  &.online {
    color: #00ff80;
  }
  &.offline {
    color: #ff415e;
  }
`;

export const ContentHeaderIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px 0 auto;
`;

export const ContentHeaderSettingsIcon = styled(SettingsSVG)`
  width: 17px;
  height: 17px;
  fill: whitesmoke;
  cursor: pointer;
  margin: 0 10px;
`;

export const ContentHeaderPeopleIcon = styled(PeopleSVG)`
  width: 17px;
  height: 17px;
  fill: whitesmoke;
  cursor: pointer;
  margin: 0 10px;
`;

export const MessageArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  grid-area: messages;
  overflow: auto;
  position: relative;

  .message-style {
    width:50px;
    height:50px;
    flex: 0 0 50px;
  }
`;

export const MessagesContainer = styled.div`
  width: 100%;
  height: auto;
  margin: auto 0 10px 0;
  padding: 0 7px;
`;

export const InputArea = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;

  grid-area: input-area;
`;

export const MessageForm = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 7px;
`;
export const MessageInput = styled.textarea`
  width: 100%;
  height: 35px;
  border: none;
  font-size: 0.9em;
  font-weight: 500;
  resize: none !important;
  outline: none !important;
  overflow: hidden !important;
  border-radius: 7px;
  background-color: #0c0f1c;
  color: #b5bad3;
  padding: 0.73em 0 0.73em 10px;
`;
export const MessageSubmit = styled.button`
  width: 80px;
  height: 35px;
  border: none;
  margin-left: 5px;
  border-radius: 7px;
  background-color: #0c0f1c;
  color: #b5bad3;
  cursor: pointer;
`;
export const SendMessageIcon = styled(SendMessageSVG)`
  width: 20px;
  height: 20px;
  fill: #b5bad3;
`;

export const MessageItem = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  display: flex;
  flex-direction: row-reverse;

  &.other {
    flex-direction: row;
  }
`;

export const MessageItemTextContainer = styled.div`
  width: 60%;
  height: auto;
  background-color: #0d101e;
  margin: 25px 7px 0 7px;
  padding: 5px 10px;
  border-radius: 7px;
`;

export const MessageItemText = styled.pre`
  font-family: ${(props) => props.$fontFamily};
  font-size: 0.85em;
  white-space: pre-wrap;
  margin: 0;
  color: #b5bad3;
`;
