import styled from "styled-components/macro";

const UpSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-caret-up-fill ${props.className}`}
    viewBox="0 0 16 16"
  >
    <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
  </svg>
);

export const Container = styled.div`
  min-width: 100px;
  height: 22vw;
  background-color: #05070c;
  border-radius: 10px;
  position: relative;
  padding: 5px;
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: #0b0d19;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  border-radius: 10px;
`;

export const Title = styled.span`
  position: absolute;
  top: 15px;
  left: 25px;
  font-size: 1.75vw;
  font-weight: 800;
  color: #d5d6ef;
  @media (max-width: 800px) {
    font-size: 0.85em;
    left: 15px;
  }
`;

export const ChartContainer = styled.div`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
`;

export const ValueContainer = styled.div`
  position: absolute;
  top: 15px;
  right: 25px;
  display: flex;
`;

export const Value = styled.span`
  font-size: 1.75vw;
  font-weight: 800;
  color: #be283c;
  @media (max-width:800px) {
    font-size:1em;
  }
`;

export const PercentStatContainer = styled.div`
  display: flex;
  padding: 5px;
  margin: 0 10px;
  position: relative;
  .percent {
    color: #01fb83;
  }
  &.down {
    flex-direction: row-reverse;
    .percent {
      color: #ff3c53;
    }
    .up-icon {
      transform: rotateZ(180deg);
      margin-top: auto;
      margin-bottom: 3px;
      fill: #ff3c53;
    }
  }
  @media (max-width: 580px) {
    display: none;
  }
`;

export const Percent = styled.span`
  font-size: 1vw;
  font-weight: 800;
  margin: 0 5px;
  @media (max-width: 800px) {
    font-size: 0.75em;
  }
`;

export const UpIcon = styled(UpSVG)`
  width: 0.6vw;
  height: 0.6vw;
  min-width: 6px;
  min-height: 6px;
  fill: #01fb83;
`;
