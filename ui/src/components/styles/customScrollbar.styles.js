import styled from "styled-components";

export const Thumb = styled.div`
  width: ${(props) => props.width || "7px"};
  background-color: #363b50;
  border-radius: 5px;
  cursor: pointer;
`;

export const Track = styled.div`
  position: absolute;
  width: ${(props) => props.width || "7px"};
  height: ${(props) => props.height || "100%"};
  right: 0;
  bottom: 2px;
  top: 2px;
  border-radius: 3px;
`;