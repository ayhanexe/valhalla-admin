import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) =>
    theme?.smallLineChart ? { ...theme?.smallLineChart } : null}
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
  z-index: 0;
`;

export const ContainerContent = styled.div`
  position: absolute;
  top: 7%;
  left: 5%;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;

export const ContainerTitle = styled.span`
  font-size: 2vw;
  font-weight: 900;
  white-space: nowrap;
  ${({ theme }) =>
    theme?.smallLineChart?.title ? { ...theme?.smallLineChart?.title } : null}

  @media (max-width: 576px) {
    font-size: 4vw;
  }
`;

export const ContainerValue = styled.span`
  font-size: 2vw;
  font-weight: 900;
  mix-blend-mode: exclusion;
  position: relative;
  bottom: 0.5vmax;
  white-space: nowrap;

  @media (max-width: 576px) {
    font-size: 4vw;
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
  position: absolute;
  top: auto;
  right: auto;
  bottom: 0 !important;
  left: 0 !important;
`;
