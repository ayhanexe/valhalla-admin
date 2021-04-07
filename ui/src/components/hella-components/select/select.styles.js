import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RightIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-chevron-right ${props.className}`}
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
    />
  </svg>
);

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 5px 0;
`;

export const Header = styled.div`
  width: 100%;
  height: 35px;
  background-color: ${({ theme }) => theme.hellaComponents.select.background};
  color: ${({ theme }) => theme.hellaComponents.select.color};
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 2px 0 0 10px;
  border-radius: 5px;
  &:hover span {
    margin-left: 10px;
  }
`;

export const HeaderText = styled.span`
  width: calc(100% - 40px);
  white-space:nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: margin-left 0.3s ease-out;
`;

export const Dropdown = styled.div`
  width: 100%;
  height: 0;
  background-color: ${({ theme }) => theme.hellaComponents.select.background};
  margin: 5px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  border-radius: 5px;
`;

export const HeaderIcon = styled(FontAwesomeIcon)`
  font-size: 0.85em;
  margin-right: 10px;
`;

const DropdownItemBase = css`
  width: 95%;
  height: 30px;
  flex: 0 0 30px;
  background-color: ${({ theme }) =>
    theme.hellaComponents.select.itemBackground};
  color: ${({ theme }) => theme.hellaComponents.select.color} !important;
  margin: 2px 0;
  display: flex;
  align-items: center;
  padding: 0 0 0 10px;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
  &:nth-child(1) {
    margin-top: 5px;
  }
  &:nth-last-child(1) {
    margin-bottom: 5px;
  }
`;

export const DropdownItemLink = styled(Link)`
  ${DropdownItemBase}
`;

export const DropdownItem = styled.div`
  ${DropdownItemBase}
`;

export const DropdownIcon = styled(RightIcon)`
  width: 15px;
  height: 15px;
  flex: 0 0 15px;
  fill: ${({ theme }) => theme.hellaComponents.select.dropdownIconColor};
  margin-left: auto;
  margin-right: 7px;
`;
