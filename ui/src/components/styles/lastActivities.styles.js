import styled from "styled-components/macro";

export const Container = styled.div`
  min-width: 100px;
  width: 100%;
  height: 400px;

  background-color: #090b14;

  border-radius: 10px;
  padding: 0 10px 10px 10px;

  display: grid;
  grid-template-rows: min-content 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "title"
    "items";

  margin:20px 0;
    
  position: relative;
`;

export const Title = styled.span`
  font-size: 2vw;
  font-weight: 700;

  margin: 10px 0;
  padding: 0 0 10px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  grid-area: title;
`;

export const ActivityContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  grid-area: "items";

  overflow: hidden;
  
  padding:0 15px 0 0;
`;

export const ActivityItemContainer = styled.div`
  width: 100%;
  height: 60px;
  flex: 0 0 60px;

  background-color: rgba(13, 16, 30, 0.5);

  margin: 5px 0;

  border-radius: 7px;
  overflow: hidden;
  padding: 5px 7px;

  display: grid;
  grid-template-areas:
    "profile text time"
    "profile text .";
  grid-template-rows: 1fr;
  grid-template-columns: min-content 1fr min-content;
  align-items: center;
  
  cursor:pointer;
`;

export const ActivityItemProfile = styled.div`
  width: 50px;
  height: 50px;
  background: #161b32 url(${(props) => props.image}) center no-repeat;
  background-size: cover;

  border-radius: 50%;

  grid-area: profile;
`;

export const ActivityItemText = styled.span`
  margin: 0 0 0 10px;

  grid-area: text;
`;

export const ActivityItemTime = styled.span`
  grid-area: time;
  align-self: start;

  font-size: 0.7em;
  opacity: 0.5;
`;
