import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";

export const Container = styled.div`
  width: auto;
  flex: 0 0 auto;
  flex-direction: column;
  height: 100%;
  margin: 0 10px;
  display: flex;
  align-items: center;
  padding: 5px;
  position:relative;
`;

export const ProfileContainer = styled.div`
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  background-color: ${({ theme }) => theme.userArea.profileBackground};
  border-radius: 50%;
  margin: 0 0 0 auto;
  overflow: hidden;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const Profile = styled.img`
  width: 100%;
  height: 100%;
  border: none;
  object-fit: cover;
  pointer-events: none;
`;

export const Dropdown = styled.div`
  width: 150px;
  height: auto;
  flex: 0 0 auto;
  background-color: ${({ theme }) => theme.userArea.dropdownBackground};
  margin: 10px 0 0 0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 10px 0;
  opacity: 0;
  visibility: hidden;
  position:absolute;
  top:100%;
  right:0;
`;

export const DropdownHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 10px 0;
`;

export const DropdownTitle = styled.h6`
  margin: 5px 0 0 0;
  white-space: nowrap;
  font-size: 0.85em;
  text-transform: capitalize;
`;
export const DropdownDescription = styled.span`
  margin: 5px 0 0 0;
  white-space: nowrap;
  font-size: 0.5em;
  font-weight: 400;
  opacity: 0.5;
  text-transform: capitalize;
`;

const DropdownItemBase = css`
  width: 90%;
  font-size: 0.6em;
  background: ${({ theme }) => theme.userArea.dropdownItemBackground};
  color: white;
  text-decoration: none;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  border-radius: 3px;
`;

export const DropdownItem = styled.div`
  ${DropdownItemBase}
`;
export const DropdownItemLink = styled(Link)`
  ${DropdownItemBase}
`;

export const DropdownItemText = styled.span`
  margin-left: 10px;
`;

export const DropdownItemIcon = styled(FontAwesomeIcon)``;
