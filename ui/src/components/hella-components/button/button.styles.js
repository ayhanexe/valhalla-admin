import styled, { css } from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 5px 0;
`;

const HeaderBase = css`
  width: 100%;
  height: 35px;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 2px 10px 0 10px;
  cursor: pointer;
  border-radius: 5px;
  ${({ theme }) =>
    theme?.hellaComponents?.button?.header
      ? { ...theme.hellaComponents.button.header }
      : null}
  ${({ theme }) =>
    theme?.hellaComponents?.button?.header?.text
      ? { ...theme.hellaComponents.button.header.text }
      : null}

  &:hover span {
    margin-left: 10px;
  }
`;

export const HeaderLink = styled(Link)`
  ${HeaderBase}
`;

export const Header = styled.div`
  ${HeaderBase}
`;

export const HeaderText = styled.span`
  width: calc(100% - 30px);
  overflow: hidden;
  text-overflow: ellipsis;
  transition: margin-left 0.3s ease-out;
`;

export const HeaderIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  font-size: 0.85em;
`;
