import styled from "styled-components/macro";

export const Container = styled.div`
  width: 40px;
  height: 20px;
  border-radius: 100vw;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background 0.3s ease-out;

  ${({ theme }) =>
    theme?.hellaComponents?.checkbox?.deactiveBackground
      ? { background: theme.hellaComponents.checkbox.deactiveBackground }
      : null}

  &.checked {
    ${({ theme }) =>
      theme?.hellaComponents?.checkbox?.activeBackground
        ? { background: theme.hellaComponents.checkbox.activeBackground }
        : null}
    .hella-checkbox-point {
      ${({ theme }) =>
        theme?.hellaComponents?.checkbox?.activePointBackground
          ? { background: theme.hellaComponents.checkbox.activePointBackground }
          : null}
    }
  }
`;
export const Point = styled.div`
  width: 20px;
  height: 20px;
  ${({ theme }) =>
    theme?.hellaComponents?.checkbox?.deactivePointBackground
      ? { background: theme.hellaComponents.checkbox.deactivePointBackground }
      : null}
  border-radius: 50%;
  position: relative;
  top: 0;
  left: 0;
  opacity: 1;
  transition: backgrund 0.3s ease-out;
`;
