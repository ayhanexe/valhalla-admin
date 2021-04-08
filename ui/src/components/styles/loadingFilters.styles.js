import styled, { css } from "styled-components";

const standartSpinnerRadius = 20;

function circlePath(number) {
  let cx = number,
    cy = number,
    r = number;
  return (
    "M " +
    cx +
    " " +
    cy +
    " m -" +
    r +
    ", 0 a " +
    r +
    "," +
    r +
    " 0 1,0 " +
    r * 2 +
    ",0 a " +
    r +
    "," +
    r +
    " 0 1,0 -" +
    r * 2 +
    ",0"
  );
}

const rotateAnimation = css`
  @keyframes rotate {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
`;

const StandartSpinnerSVG = (props) => {
  const radius = !isNaN(parseInt(props.radius))
    ? parseInt(props.radius)
    : standartSpinnerRadius;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      {...props}
      viewBox={`-2 -2 ${radius * 2 + 4} ${radius * 2 + 4}`}
    >
      <path
        strokeWidth={1.5}
        stroke="rgba(255, 255, 255, 0.7)"
        strokeDasharray="50 100"
        fill="transparent"
        d={`${circlePath(radius)}`}
      />
    </svg>
  );
};

export const StandartFilterContainer = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StandartSpinnerIcon = styled(StandartSpinnerSVG)`
  width: ${(props) =>
    !isNaN(parseInt(props.radius))
      ? parseInt(props.radius) * 2
      : standartSpinnerRadius * 2}px;
  height: ${(props) =>
    !isNaN(parseInt(props.radius))
      ? parseInt(props.radius) * 2
      : standartSpinnerRadius * 2}px;
    animation: rotate 1s linear infinite;
    ${rotateAnimation}
`;
