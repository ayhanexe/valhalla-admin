import styled from "styled-components";

export const Container = styled.div`
  background-color: #090b14;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
  z-index: 0;
  @media (max-width: 768px) {
    --bs-aspect-ratio: 40%;
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
    font-size: 1.5vmax;
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
    font-size: 1.5vmax;
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
  width: 100%;
  height: 50%;
  backgound-color: blue;

  position: absolute;
  top: auto;
  right: auto;
  bottom: 0 !important;
  left: 0 !important;
`;
