import styled from "styled-components";

export const Container = styled.div`
    min-width:100px
    width:100%;
    height:400px;
    
    background-color:#090B14;
    
    border-radius:5px;
    padding:0 10px;
    
    display:flex;
    flex-direction:column;
    align-items:center;
`

export const Title = styled.span`
    font-size:2vw;
    font-weight:700;
    
    margin:10px 0;
`

export const ActivityItemContainer = styled.div`
    width:100%;
    height:60px;
    
    background-color:red;
    
    margin:5px 0;
`