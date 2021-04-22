import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SunSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-sun-fill ${props.className}`}
    viewBox="0 0 16 16"
  >
    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
  </svg>
);

const WindSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-wind ${props.className}`}
    viewBox="0 0 16 16"
  >
    <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
  </svg>
);

const NightSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-moon-fill ${props.className}`}
    viewBox="0 0 16 16"
  >
    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
  </svg>
);

const RightSVG = (props) => (
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

const LeftSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-chevron-left ${props.className}`}
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
    />
  </svg>
);

export const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #040610;
  color: #585d78;
  font-size: calc(0.2em + 0.7vw);
  font-weight: 500;

  position: relative;
  border-radius: 10px;

  margin: 10px 0;
  overflow: hidden;
  --bs-aspect-ratio: 130%;
`;

export const WeatherGeneralContent = styled.div`
  width: 100%;
  height: 100%;
  flex: 0 0 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 0.5fr 2fr repeat(2, 0.5fr) 1.5fr 0.7fr;
  gap: 0px 0px;
  grid-template-areas:
    "weather-header weather-header weather-header"
    "weather-icon weather-icon weather-icon"
    "current-location current-location current-location"
    "current-day current-day current-day"
    "value-area value-area value-area"
    "weather-footer weather-footer weather-footer";

  @media all and (-ms-high-contrast: none) {
    .grid-container {
      display: -ms-grid;
      -ms-grid-columns: repeat(3, 1fr);
      -ms-grid-rows: 0.5fr 2fr repeat(2, 0.5fr) 1.5fr 0.7fr;
      gap: 0px 0px;
    }

    .weather-header {
      -ms-grid-row: 1;
      -ms-grid-row-span: 1;
      -ms-grid-column: 1;
      -ms-grid-column-span: 3;
    }

    .weather-icon {
      -ms-grid-row: 2;
      -ms-grid-row-span: 1;
      -ms-grid-column: 1;
      -ms-grid-column-span: 2;
    }

    .current-location {
      -ms-grid-row: 3;
      -ms-grid-row-span: 1;
      -ms-grid-column: 1;
      -ms-grid-column-span: 1;
    }

    .current-day {
      -ms-grid-row: 4;
      -ms-grid-row-span: 1;
      -ms-grid-column: 1;
      -ms-grid-column-span: 0;
    }

    .value-area {
      -ms-grid-row: 5;
      -ms-grid-row-span: 1;
      -ms-grid-column: 1;
      -ms-grid-column-span: -1;
    }

    .weather-footer {
      -ms-grid-row: 6;
      -ms-grid-row-span: 1;
      -ms-grid-column: 1;
      -ms-grid-column-span: -2;
    }
  }
`;

export const WeatherHeader = styled.div`
  grid-area: weather-header;

  display: flex;
  align-items: center;

  padding: 0 0 0 15px;
`;

export const WeatherIcon = styled.div`
  grid-area: weather-icon;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 9vw;
`;

export const CurrentLocation = styled.div`
  grid-area: current-location;
  text-align: center;
  font-size: 3vw;
  font-weight: 300;
`;

export const CurrentDay = styled.div`
  grid-area: current-day;
  text-align: center;
  font-size: 1vw;
  font-weight: 400;
`;

export const ValueArea = styled.div`
  grid-area: value-area;
  text-align: center;
  font-size: 10vw;
  font-weight: 400;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const Celsius = styled.div`
  height: ${(props) => props.height || "100%"};
  position: ${(props) => props.position || "absolute"};

  font-size: ${(props) => props.fontSize || "1em"};

  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    width: ${(props) => `${props.radius}` || "15px"};
    height: ${(props) => `${props.radius}` || "15px"};
    position: absolute;
    top: 0px;
    right: ${(props) =>
      `${props.radius ? `calc(-${props.right ?? props.radius} / 2)` : "-7px"}`};
    border-radius: 50%;
    border: ${(props) =>
      `${props.radius ? `calc((${props.radius} / 100) * 20)` : "3px"} solid ${
        props.color ?? "#555a74"
      }`}
`;

export const WeatherFooter = styled.div`
  grid-area: weather-footer;
  position: relative;
  background: linear-gradient(rgba(4, 6, 16, 0.7), rgba(0, 2, 5, 0.8));

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0.5;
  cursor: pointer;
  transition: opacity 0.3s ease-out;

  &:hover {
    opacity: 1;
  }
`;

export const FooterSector = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const SunIcon = styled(SunSVG)`
  width: 1.7vw;
  height: 1.7vw;
  flex: 0 0 1.7vw;
  fill: rgb(88, 93, 120);
  margin: 0 5px 0 0;
`;
export const WindIcon = styled(WindSVG)`
  width: 1.7vw;
  height: 1.7vw;
  flex: 0 0 1.7vw;
  fill: rgb(88, 93, 120);
  margin: 0 5px 0 0;
`;
export const NightIcon = styled(NightSVG)`
  width: 1.7vw;
  height: 1.7vw;
  flex: 0 0 1.7vw;
  fill: rgb(88, 93, 120);
  margin: 0 5px 0 0;
`;

export const SectorValue = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;

  font-size: 1vw;
  white-space: nowrap;
`;

export const SectorContent = styled.div`
  width: auto;
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WeatherToggler = styled.div`
  width: 1.5vw;
  height: 1.5vw;
  background-color: rgba(88, 93, 120, 0.5);
  border-radius: 50%;

  padding: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50%;
  right: 5px;

  transform: translateY(-50%);

  cursor: pointer;
`;

export const WeatherTogglerIcon = styled(RightSVG)`
  fill: rgba(88, 93, 120, 1);
`;

export const DetailsPageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #040610;

  display: flex;
  flex-direction: column;

  position: absolute;
  top: 0;
  left: 100%;

  z-index: 1;
`;

export const DetailsHeader = styled.div`
  width: 100%;
  height: auto;

  padding: 10px 0 10px 15px;
`;

export const DetailsTimelineContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;

  padding: 0 10px;
`;

export const DetailsTimelineItem = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  position: relative;

  margin: 0 5px;
  padding: 0.4vw 0;

  cursor: pointer;

  transition: color 0.2s ease-out;

  &:hover {
    color: yellow;
  }

  &.active {
    color: yellow;
    &::after {
      content: "";
      width: 50%;
      height: 1px;
      background-color: yellow;

      position: absolute;
      top: 100%;
    }
  }
`;

export const DetailsContentContainer = styled.div`
  width: 100;
  height: auto;

  display: flex;
  flex-direction: column;

  position: relative;
`;

export const DetailsTitle = styled.span`
  font-size: 1.2vw;
  font-weight: 600;
  margin: 10px 2.5vw 10px 2.5vw;
`;

export const DetailsContentSectorContainer = styled.div`
  width: 100%;
  height: 100%;
  background-colo: yellow;

  display: flex;
  justify-content: center;
`;

export const DetailsContentSector = styled.div`
  width: auto;
  height: 100%;

  display: flex;
  justify-content: center;
`;

export const DetailsTABLE = styled.table`
  width: 100%;

  display: block;

  color: #272b3a;

  &:nth-child(1) {
    margin-right: 2.5vw;
  }
  &:nth-child(2) {
    margin-left: 30px;
  }
`;

export const DetailsTBODY = styled.tbody`
  width: 100%;
  display: block;

  display: flex;
  flex-direction: column;
`;

export const DetailsTR = styled.tr`
  width: 100%;
  display: block;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DetailsTD = styled.td`
  width: 100%;
  flex: 0 0 5vw;
  height: 2vw;

  font-size: 0.85vw;

  white-space: nowrap;
  display: flex;
  justify-content: flex-start;
`;

export const DetailsTable = (props) =>
  Array.isArray(props.data) ? (
    <DetailsTABLE>
      <DetailsTBODY>
        {Array.prototype.slice.call(props.data).map((item, index) => (
          <DetailsTR key={index}>
            <DetailsTD>{item.key}</DetailsTD>
            <DetailsTD>{item.value}</DetailsTD>
          </DetailsTR>
        ))}
      </DetailsTBODY>
    </DetailsTABLE>
  ) : (
    <div
      style={{
        width: "calc(100% - 40px)",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgba(255, 0, 0, 1)",
        color: "black",
        margin: "0 20px",
        borderRadius: "3px",
      }}
    >
      invalid data!
    </div>
  );

export const DetailsChartContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 1px 0 0 0;

  display: flex;
  flex-direction: column;
`;

export const DetailsChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex: 0 0 calc(100% - 3vw);
  position: relative;
`;

export const DetailsChart = styled.div`
  width: 100%;
  height: 80%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const DetailsChartTimeline = styled.div`
  width: 100%;
  height: 3vw;
  flex: 0 0 3vw;

  display: flex;
  justify-content: space-between;

  padding: 0 10px;
`;

export const DetailsChartTimelineItem = styled.div`
  width: auto;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DetailsChartTimelineItemIcon = styled(FontAwesomeIcon)`
  font-size: 1.1vw;
`;
export const DetailsChartTimelineItemText = styled.span`
  font-size: 0.5vw;
`;

export const DetailsPageToggler = styled.div`
  width: 1.5vw;
  height: 1.5vw;
  background-color: rgba(88, 93, 120, 0.5);
  border-radius: 50%;

  padding: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50%;
  right: 5px;

  transform: translateY(-50%);

  z-index: 1;
  cursor: pointer;
`;

export const DetailsTogglerIcon = styled(LeftSVG)`
  fill: rgba(88, 93, 120, 1);
`;
