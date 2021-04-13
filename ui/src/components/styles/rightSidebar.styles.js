import styled from "styled-components/macro";

const ChevronLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-chevron-left ${props.className}`}
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
    />
  </svg>
);

export const Container = styled.div`
  width: calc(300px + 2vmax);
  height: 100vh;
  position: fixed;
  top: 0;
  right: ${(props) =>
    props.isRightSidebarOpen ? "0" : "calc(-300px - 2vmax)"};
  background-color: ${({ theme }) => theme.rightSidebar.backgroundColor};
  color: ${({ theme }) => theme.rightSidebar.color};
  padding: 15px 25px 0 25px;
  box-shadow:0 0 5px 0 rgba(0, 0, 0, 0.2);
  
  z-index: 10;
  @media (min-width: 1441px) {
    width: calc(400px + 10vmax);
    ${(props) =>
      props.isRightSidebarOpen ? null : "right: calc(-400px - 10vmax);"}
  }
  @media (max-width: 400px) {
    width: 100%;
    right: ${(props) => (props.isRightSidebarOpen ? null : "-100%")};
  }
`;

export const SidebarContent = styled.div`
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Toggler = styled.div`
  width: 17px;
  height: 25px;
  background-color: ${({ theme }) => theme.rightSidebar.backgroundColor};
  position: absolute;
  top: 50%;
  left: -17px;
  border-radius: 100vw 0 0 100vw;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: left 0.3s ease-out;
  box-shadow:-2px 0 2px 0 rgba(0, 0, 0, 0.1);
  
  @media (min-width: 1441px) {
    width: calc(20px + 0.5vmax);
    height: calc(35px + 0.5vmax);
    left: calc(-20px - 0.5vmax);
  }
  @media (max-width: 400px) {
    ${(props) => (props.$isRightSidebarOpen ? "left:0;" : null)}
    ${(props) => (props.$isLeftSidebarOpen ? "left:0;" : null)}
  }
`;

export const ToggleIcon = styled(ChevronLeft)`
  width: 13px;
  height: 13px;
  object-fit: cover;
  fill: whitesmoke;
  margin-left: 3px;
  transition: transform 0.3s ease-out;
  position: relative;
  &.active {
    transform: rotateX(180deg) rotateY(180deg);
    left: 2px;
  }
  @media (min-width: 1441px) {
    width: 20px;
    height: 20px;
  }
  ${({ theme }) => theme.rightSidebarTogglerIcon}
`;

export const RightSidebarTitle = styled.h1`
  margin-bottom: 50px;
  font-size: 2.5em;
  font-weight: 700;
`;
export const RightSidebarOptionTitle = styled.h5`
  margin: 20px 0 10px 0;
  font-size: 0.85em;
`;
