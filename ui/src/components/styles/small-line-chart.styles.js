import styled from "styled-components";

const GearSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-gear-fill ${props.className}`}
    viewBox="0 0 16 16"
  >
    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
  </svg>
);

export const Container = styled.div`
  width:100%;
  height: 13vmax;
  background-color: #090b14;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  margin: 20px 0;
  z-index: 0;
  @media (max-width: 575px) {
    height: 20vmax;
  }
`;

export const ContainerContent = styled.div`
  position: absolute;
  top: 7%;
  left: 5%;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  color: #d5d6ef;
`;

export const ContainerTitle = styled.span`
  font-size: 2vmax;
  font-weight: 900;
  mix-blend-mode: exclusion;
  white-space: nowrap;
  @media (max-width: 575px) {
    font-size:3vmax;
  }
`;

export const ContainerValue = styled.span`
  font-size: 2vmax;
  font-weight: 900;
  mix-blend-mode: exclusion;
  position: relative;
  bottom: 0.5vmax;
  white-space: nowrap;
  @media (max-width: 575px) {
    font-size:3vmax;
  }
`;

export const SettingsContainer = styled.div`
  width: 100px;
  height: 20px;
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 3px;
  z-index: 1;
`;

export const IconContainer = styled.div``;

export const ChartContainer = styled.div`
  width:100%;
  height:50%;
  backgound-color:blue;
  
  position:absolute;
  bottom:0;
  left:0;
`;

export const SettingsIcon = styled(GearSVG)`
  width: 14px;
  height: 14px;
  display: block;
  fill: white;
  cursor: pointer;
  transition: transform 0.15s ease-out;
  &:hover {
    transform: rotateZ(45deg);
  }
`;

export const PopupContainer = styled.div`
  width: 100px;
  height: auto;
  background-color: #161b32;
  position: absolute;
  padding: 5px;
  margin: 5px 0 0 0;
  top: 100%;
  left: 0;
  padding: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  opacity: 0;
  visibility: hidden;
`;

export const PopupItem = styled.div`
  width: 100%;
  background-color: #121628;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 0 2px 0;
  cursor: pointer;
  border-radius: 5px;
  font-size: 0.9em;
  transition: background-color 0.3s ease-out;
  &:hover {
    background-color: #0d101e;
  }
`;
