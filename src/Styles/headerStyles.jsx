import styled, { createGlobalStyle, keyframes } from "styled-components";

export const ContainerHeader = styled.section`
    display:flex;
    justify-content: space-around;
`

export const HeaderImg = styled.img`
    @media screen and (min-width:360px) and (max-width: 800px){
        width:50vw;
    }
`