import styled, { css } from "styled-components/macro";

const MouseSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-mouse ${props.className}`}
    viewBox="0 0 16 16"
  >
    <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z" />
  </svg>
);

const InfoSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-info-circle-fill ${props.className}`}
    viewBox="0 0 16 16"
  >
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
  </svg>
);

const TrashSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-trash-fill ${props.className}`}
    viewBox="0 0 16 16"
  >
    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
  </svg>
);

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: ${(props) => (props.$isLockScreenOpen ? "0" : "-100vh")};
  left: 0;

  z-index: 9999999999;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr 0.6fr;
  gap: 0px 0px;
  grid-template-areas:
    "clock"
    "notifications"
    "scroll-area";
  position: relative;

  @media (max-height: 290px) {
    grid-template-rows: repeat(2, 1fr) 0px;
  }
`;

export const BackgroundMediaContainer = styled.div`
  width: 100%;
  height: 100%;

  background: ${(props) => props?.theme?.timeoutScreen?.defaultBackground}
    url(${(props) => props.mediaUrl}) center no-repeat;
  background-size: cover;

  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const BackgroundMediaWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: inherit;
  background-size: cover;

  position: absolute;
  top: 0;
  left: 0;

  overflow: hidden;
`;

export const BackgroundMedia = styled.div`
  width: 100%;
  height: 100%;
  background: inherit;
  background-size: cover;

  position: absolute;
  top: 0;
  left: 0;

  box-shadow: inset 0 0 100vw rgba(0, 0, 0, 0.5);
`;

export const BackgroundMediaFilter = styled.div`
  width: 100%;
  height: 100%;
  background: radial-gradient(transparent 20%, rgba(0, 0, 0, 0.3) 100%);
  position: absolute;
  top: 0;
  left: 0;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: radial-gradient(transparent 20%, rgba(0, 0, 0, 0.3) 100%);
  }
`;

export const ClockContainer = styled.div`
  grid-area: clock;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) =>
    theme?.timeoutScreen?.clock ? { ...theme?.timeoutScreen?.clock } : null}
`;

export const ClockValueBase = css`
  font-size: 7vw;
  font-weight: 400;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  ${({ theme }) =>
    theme?.timeoutScreen?.clock?.value
      ? { ...theme?.timeoutScreen?.clock?.value }
      : null}
`;

export const Hour = styled.span`
  ${ClockValueBase}
`;
export const Minute = styled.span`
  ${ClockValueBase}
`;
export const Second = styled.span`
  ${ClockValueBase}
`;

export const NotificationsContainer = styled.div`
  grid-area: notifications;
  width: 60vw;
  max-width: 500px;
  height: calc(100% - 10px);
  padding: 20px 10px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  transition: height 0.3s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const NotificationsContent = styled.div`
  width: 100%;
  height: 100%;

  padding: 10px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NotificationItemContainer = styled.div`
  width: 100%;
  margin: 10px 0;
  padding: 0 0 5px 0;
  position: relative;
  &:hover:not(.no-effect) {
    .notification-item {
      opacity: 1 !important;
    }
    .close-button {
      opacity: 0.5;
    }
    .notification-expand-toggler {
      visibility: visible;
      bottom: -20px;
      opacity: 1;
    }
    .notification-item-delete-button {
      visibility: visible;
      opacity: 0.6;
      right: -30px;
    }
  }
`;

export const NotificationItem = styled.div`
  width: 100%;
  height: auto;
  max-height: 80px;
  padding: 2px 2px 5px 2px;
  position: relative;
  ${({ theme }) =>
    theme?.timeoutScreen?.notification?.item
      ? { ...theme?.timeoutScreen?.notification?.item }
      : null}

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 25px min-content;
  gap: 0px 0px;
  grid-template-areas:
    "header-area header-area header-area"
    "content-area content-area content-area";
  transition: opacity 0.3s ease-out;
  border-radius: 7px;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
`;

export const NotificationItemHeader = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 25px 2fr 1fr 0.25fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "icon-area title-area title-area time-area";
  grid-area: header-area;
`;

export const NotificationItemIconArea = styled.div`
  width: 100%;
  height: 100%;

  grid-area: icon-area;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NotificationItemTitleArea = styled.div`
  width: 100%;
  height: 100%;

  grid-area: title-area;

  display: flex;
  align-items: center;
`;
export const NotificationItemTimeArea = styled.div`
  height: 100%;
  height: 100%;

  font-size: 0.7em;
  ${({ theme }) =>
    theme?.timeoutScreen?.notification?.item?.time
      ? { ...theme?.timeoutScreen?.notification?.item?.time }
      : null}
  padding: 0 10px;

  grid-area: time-area;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotificationItemContent = styled.div`
  width: 100%;
  height: 100%;
  grid-area: content-area;
  padding: 0 7px 0 7px;
  font-size: 0.85em;
  ${({ theme }) =>
    theme?.timeoutScreen?.notification?.item?.content
      ? { ...theme?.timeoutScreen?.notification?.item?.content }
      : null}
  white-space: pre-wrap;
  text-overflow: ellipsis;
`;

export const NotificationItemContentText = styled.span`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const NotificationItemInfoIcon = styled(InfoSVG)`
  width: 12px;
  height: 12px;
  ${({ theme }) =>
    theme?.timeoutScreen?.notification?.item?.icons?.infoIcon
      ? { ...theme?.timeoutScreen?.notification?.item?.icons?.infoIcon }
      : null}
`;

export const NotificationItemDeleteIconContainer = styled.div`
  width: 30px;
  height: 100%;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  margin: 0;
  padding: 0;

  opacity: 0;
  visibility: hidden;

  transition: opacity 0.3s ease-out, visibility 0.3s ease-out,
    right 0.15s ease-out;
`;

export const NotificationItemDeleteIcon = styled(TrashSVG)`
  width: 15px;
  height: 15px;
  ${({ theme }) =>
    theme?.timeoutScreen?.notification?.item?.icons?.messageDeleteIcon
      ? {
          ...theme?.timeoutScreen?.notification?.item?.icons?.messageDeleteIcon,
        }
      : null}
`;

export const NotificationItemTitle = styled.div`
  grid-area: title-area;
  padding-top: 1px;
  font-size: 0.85em;
  ${({ theme }) =>
    theme?.timeoutScreen?.notification?.item?.title
      ? { ...theme?.timeoutScreen?.notification?.item?.title }
      : null}
`;

export const NotificationItemExpandToggler = styled.div`
  width: 100%;
  height: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  visibility: hidden;
  opacity: 0;
  transition: bottom 0.15s ease-out, opacity 0.2s ease-out,
    visibility 0.3s ease-out;

  &::after {
    content: "${(props) => (props.$isExpanded ? "shrink" : "expand")}";
    font-size: 0.85em;
    font-weight: 300;
    ${({ theme }) =>
      theme?.timeoutScreen?.notification?.item?.toggler
        ? { ...theme?.timeoutScreen?.notification?.item?.toggler }
        : null}
  }
`;

export const ScrollToUnlockContainer = styled.div`
  grid-area: scroll-area;
  width: 100%;
  height: 100%;
  padding: 1.5vw 0 0 0;
  margin: 0 0 auto 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  transition: opacity 0.3s ease-out;

  &:active {
    opacity: 0;
  }

  @media (max-height: 290px) {
    opacity: 0 !important;
  }
`;

export const MouseIcon = styled(MouseSVG)`
  width: 30px;
  height: 30px;
  flex: 0 0 30px;
  ${({ theme }) =>
    theme?.timeoutScreen?.unlockArea?.mouseIcon
      ? { ...theme?.timeoutScreen?.unlockArea?.mouseIcon }
      : null}

  margin: 0 0 10px 0;

  animation: mouseAnimation 2s ease-out infinite;

  @keyframes mouseAnimation {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-19px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const UnlockText = styled.span`
  font-size: 1em;
  font-weight: 400;
  white-space: nowrap;
  text-transform: uppercase;
  ${({ theme }) =>
    theme?.timeoutScreen?.unlockArea?.unlockText
      ? { ...theme?.timeoutScreen?.unlockArea?.unlockText }
      : null}
`;
