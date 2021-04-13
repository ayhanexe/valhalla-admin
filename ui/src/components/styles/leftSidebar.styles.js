import styled, { css } from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const DropdownHeaderCSS = css`
  width: 90%;
  height: 35px;
  background-color: ${({ theme }) =>
    theme.leftSidebar.leftSidebarItemBackground};
  padding: 2px 10px 0 10px;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  &:hover span {
    margin-left: 10px;
  }
`;

const ChevronRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-chevron-right ${props.className}`}
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
    />
  </svg>
);

export const Container = styled.div`
  width: calc(300px + 2vmax);
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${(props) => (props.isLeftSidebarOpen ? "0" : "calc(-300px - 2vmax)")};
  background-color: ${({ theme }) => theme.leftSidebar.backgroundColor};
  color: ${({ theme }) => theme.leftSidebar.color};
  padding: 20px 25px 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index:10;
  box-shadow:0 0 5px 0 rgba(0, 0, 0, 0.2);
  
  @media (min-width: 1441px) {
    width: calc(400px + 10vmax);
    ${(props) =>
      props.isRightSidebarOpen ? null : "left: calc(-400px - 10vmax);"}
  }
  @media (max-width: 400px) {
    width: 100%;
    left: ${(props) => (props.isRightSidebarOpen ? null : "-100%")};
  }
`;

export const Toggler = styled.div`
  width: 17px;
  height: 25px;
  background-color: ${({ theme }) => theme.leftSidebar.backgroundColor};
  position: absolute;
  top: 50%;
  right: -17px;
  transform: translateY(-50%);
  border-radius: 0 100vw 100vw 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: right 0.3s ease-out;
  box-shadow:2px 0 2px 0 rgba(0, 0, 0, 0.1);
  
  @media (min-width: 1441px) {
    width: calc(20px + 0.5vmax);
    height: calc(35px + 0.5vmax);
    right: calc(-20px - 0.5vmax);
  }
  @media (max-width: 400px) {
    ${(props) =>
      props.$isLeftSidebarOpen
        ? "right:0; border-radius:100vw 0 0 100vw;"
        : null}
    ${(props) => (props.$isRightSidebarOpen ? "right:0;" : null)}
    // transform:translateY(calc(-50% + 25px))
  }
`;

export const ToggleIcon = styled(ChevronRight)`
  width: 13px;
  height: 13px;
  object-fit: cover;
  fill: whitesmoke;
  transition: transform 0.3s ease-out;
  position: relative;
  &.active {
    transform: rotateX(180deg) rotateY(180deg);
  }
  @media (min-width: 1441px) {
    width: 20px;
    height: 20px;
  }
  ${({ theme }) => theme.rightSidebarTogglerIcon}
`;

export const Title = styled.h1`
  margin: 0 0 40px 0;
`;

export const SectorTitle = styled.h6`
  width: 100%;
  font-size: 1.05em;
`;

export const LeftSidebarItem = styled.div`
  width: 100%;
  height: auto;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LeftSidebarHeader = styled(Link)`
  ${DropdownHeaderCSS}
`;

export const LeftSidebarDropdownHeader = styled.div`
  ${DropdownHeaderCSS}
`;

export const LeftSidebarItemIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

export const LeftSidebarItemText = styled.span`
  width: calc(100% - 35px);
  transition: margin-left 0.3s ease-out;
  color: ${({ theme }) => theme.leftSidebar.leftSidebarItemColor};
  white-space: nowrap;
  font-size: 0.9em;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const LeftSidebarItemDropdown = styled.div`
  width: 90%;
  height: 0;
  background-color: ${({ theme }) =>
    theme.leftSidebar.leftSidebarItemBackground};
  position: relative;
  top: 5px;
  left: 0;
  margin-bottom: 5px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 1;
  overflow: hidden;
`;

export const LeftSidebarItemDropdownItem = styled(Link)`
  width: 93%;
  height: 30px;
  flex: 0 0 30px;
  background-color: ${({ theme }) =>
    theme.leftSidebar.leftSidebarItemChildBackground};
  color: ${({ theme }) => theme.leftSidebar.leftSidebarItemChildColor};
  text-decoration: none;
  margin: 2px 0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  &:nth-child(1) {
    margin-top: 5px;
  }
  &:nth-last-child(1) {
    margin-bottom: 5px;
  }
  &:hover span {
    margin-left: 10px;
  }
`;

export const LeftSidebarItemDropdownItemText = styled.span`
  width: calc(100% - 5px);
  text-overflow: ellipsis;
  overflow: hidden;
  transition: margin-left 0.3s ease-out;
`;

export const LeftSidebarItemDropdownIcon = styled(FontAwesomeIcon)`
  margin-left: auto;
  position: absolute;
  right: 10px;
`;

// export const LeftSidebarItemHeader = styled(Link)`
//   width: 100%;
//   height: 35px;
//   display: flex;
//   align-items: center;
//   border-radius: 5px;
//   padding: 2px 0 0 15px;
//   cursor: pointer;
//   position:relative;
//   color:white;
//   text-decoration:none;
//   & .left-sidebar-item-icon {
//     position:absolute;
//     left:10px;
//     margin-right: 15px;
//     & + span {
//       margin-left:15px;
//     }
//   }
//   &:hover {
//     & span {
//       margin-left: 5px;
//     }
//     & .left-sidebar-item-icon {
//       & + span {
//         margin-left:20px;
//       }
//     }
//   }
//   @media (min-width:400px) {
//     & {
//       width:100%;
//     }
//   }
// `;

// export const LeftSidebarItemHeaderIcon = styled(FontAwesomeIcon)`
//   color: ${(props) => props.$color};
//   font-size: 0.85em;
//   margin-bottom:1px;
// `;

// export const LeftSidebarItemHeaderText = styled.span`
//   transition: margin-left 0.3s ease-out;
// `;
