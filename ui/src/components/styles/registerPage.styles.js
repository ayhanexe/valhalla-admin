import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
`

export const RegisterContainer = styled.div`
    width:auto;
    height:auto;
    background-color: #161b32;
    border-radius: 5px;
    display:flex;
    flex-direction:column;
    padding:10px;
    @media (max-width: 400px) {
        width:100%;
    }
`

export const Title = styled.h1`
    font-weight:700;
    text-align:center;
    text-transform:uppercase;
    margin:0 0 30px 0;
`

export const Form = styled.form`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
`
export const Input = styled.input`
    height: 30px;

    margin: 5px 0;

    padding: 0 0 0 7px;

    border: none;
    border-radius: 5px;
    background-color: #2c3146;
    color: whitesmoke;
    &[type="button"] {
    width: 100%;
    }
`

export const FooterText = styled.span`
    width:100%;
    text-align:right;
    font-size:.85em;
    color:whitesmoke;
    opacity:0.5;
    transition:opacity .3s ease-out;
    margin:20px 0 0 0;
    &:hover {
        opacity:1;
    }
`

export const CustomLink = styled(Link)`
    color:aqua !important;
    text-decoration:none;
`