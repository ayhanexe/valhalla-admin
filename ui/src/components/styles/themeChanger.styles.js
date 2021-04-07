import styled from "styled-components/macro";

export const Container = styled.div`
    width: 180px;
    height:auto;
    margin: 10px 0;
`

export const Header = styled.div`
    width:100%;
    height:30px;
    border:none;
    border-radius: 5px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    background-color:${({theme}) => theme.rightSidebar.rightSidebarItemBackground};
`

export const DropdownContainer = styled.div`
    width:100%;
    height:0;
    margin-top:5px;
    border-radius: 5px;
    background-color: ${({theme}) => theme.rightSidebar.rightSidebarItemBackground};
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow:hidden;
`
export const DropdownItem = styled.div`
    width:90%;
    height:30px;
    flex: 0 0 30px;
    background-color:${({theme}) => theme.rightSidebar.rightSidebarItemChildBackground};
    display:flex;
    align-items:center;
    border-radius: 5px;
    padding-left:10px;
    cursor:pointer;
    margin:2px 0;
    &:nth-child(1) {
        margin-top:5px;
    }
    &:nth-last-child(1) {
        margin-bottom:5px;
    }
`