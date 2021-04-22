import styled from "styled-components";

export const TutorialPageTitle = styled.h3`
  font-weight: 600;
  margin: 20px 0;
`;

export const TutorialBlockContainer = styled.div`
  width: 100%;
  height:auto;
  padding: 10px 15px;
  margin: 10px;

  background-color: #1a1e32;

  border-radius: 10px;
  
  position:relative;
  
  &.overflow-hidden {
    overflow:hidden;
  }
`;

export const TutorialBlockTitle = styled.h5``;
export const TutorialBlockText = styled.span`
    font-size:.9em;
    
    display:block;
    margin:10px 0;
    
    color:#A1A7C8;
`;