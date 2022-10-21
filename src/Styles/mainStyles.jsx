import styled, { createGlobalStyle, keyframes } from "styled-components";

export const ContainerMain = styled.section`
    width:100%;
    margin-top:10vh;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const SloganPic = styled.img`
    @media screen and (min-width:360px) and (max-width: 800px){
        width:100%;
    }
`

export const ContainerText = styled.h2`
    margin-top: 10vh;
    @media screen and (min-width:360px) and (max-width: 800px){
        margin-top:5vh;
    }
`

export const firstText = styled.h2`
    width:40%;
    margin-left:10vw;
    font-size:25px;
    font-weight: 300;
    text-align: center;
    @media screen and (min-width:360px) and (max-width: 800px){
        width:90vw;
        margin-left:3vh;
    }
`

export const secondText = styled.h2`
    width:40%;
    margin-top:5vh;
    margin-left:48vw;
    font-size:25px;
    font-weight: 300;
    text-align: center;
    @media screen and (min-width:360px) and (max-width: 800px){
        width:90vw;
        margin-left:3vh;
    }
`

export const FirstPic = styled.img`
    margin-top:10vh;
    @media screen and (min-width:360px) and (max-width: 800px){
        width:100%;
        height:10vh;
    }
`

export const MajorPic = styled.img`
    margin-top:7vh;
    @media screen and (min-width:360px) and (max-width: 800px){
        width:100%;
    }
`

export const thirdText = styled.h2`
    margin-top:5vh;
    @media screen and (min-width:360px) and (max-width: 800px){
        font-size:35px;
        text-align: center;
    }
`

export const fileiras = styled.div`
    display:flex;
    justify-content: center;
    margin-top:5vh;
`

export const ContainerImages = styled.div`
    margin-top:-2vh;
`

export const ContainerPicAndText = styled.div`
    width:70%;
    display:flex;
    margin-left:15vw;
    background-color: #e9edc9;
    @media screen and (min-width:360px) and (max-width: 800px){
        width:100%;
        height:60vh;
        margin-left:0vw;
        display:flex;
        flex-direction:column;
    }
`

export const Pic = styled.img`
    width:35vw;
    height:42vh;
    @media screen and (min-width:360px) and (max-width: 800px){
        width:100%;
        height:30vh;
    }
`

export const TextImage = styled.h2`
    font-size:22px;
    font-weight: 300;
    margin-top:9vh;
    margin-left:2vw;
    margin-right:2vw;
    text-align: center;
    line-height: 27px;
    @media screen and (min-width:360px) and (max-width: 800px){
        font-size:22px;
        margin-top:3vh;
    }
`