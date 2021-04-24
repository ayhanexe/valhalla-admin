import styled from "styled-components";

export const TutorialPageTitle = styled.h3`
  font-weight: 600;
  margin: 20px 0;
  ${({ theme }) =>
    theme?.tutorialComponent.pageTitle
      ? { ...theme?.tutorialComponent.pageTitle }
      : null}
`;

export const TutorialBlockContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 15px;
  margin: 10px;

  ${({ theme }) =>
    theme?.tutorialComponent ? { ...theme?.tutorialComponent } : null}

  border-radius: 10px;

  position: relative;

  &.overflow-hidden {
    overflow: hidden;
  }
`;

export const TutorialBlockTitle = styled.h5`
  ${({ theme }) =>
    theme?.tutorialComponent.title
      ? { ...theme?.tutorialComponent.title }
      : null}
`;
export const TutorialBlockText = styled.span`
  font-size: 0.9em;

  ${({ theme }) =>
    theme?.tutorialComponent.text ? { ...theme?.tutorialComponent.text } : null}

  display: block;
  margin: 10px 0;
`;
