import styled from "styled-components/macro";

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
  padding: 20px 10px 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  ${({ theme }) => (theme?.leftSidebar ? { ...theme?.leftSidebar } : null)}

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
  box-shadow: 2px 0 2px 0 rgba(0, 0, 0, 0.1);
  background-color:inherit;
  

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
`;

export const Title = styled.h1`
  margin: 0 0 40px 0;
  ${({ theme }) =>
    theme?.leftSidebar?.title ? { ...theme?.leftSidebar?.title } : null}
`;

export const SectorTitle = styled.h6`
  width: 100%;
  font-size: 1.05em;
  margin: 20px 0 0 0;

  &:nth-child(1) {
    margin-top: 0;
  }

  ${({ theme }) =>
    theme?.leftSidebar["sector-title"]
      ? { ...theme?.leftSidebar["sector-title"] }
      : null}
`;

export const LeftSidebarContent = styled.div`
  padding: 0 10px;
`;