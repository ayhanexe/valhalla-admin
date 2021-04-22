import styled from "styled-components";

export const WidgetWrapper = styled.div`
  grid-area: data-table;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background-color: #070a1a;

  padding: 10px;

  border-radius: 7px;
  overflow: hidden;
`;

export const WidgetWrapperTitle = styled.h4`
  width: 100%;
  font-size:1.5vw;
  font-weight: 700;
  text-transform: capitalize;
  color:#A1A7C8;
  margin:0 0 1vw 0;
`;
