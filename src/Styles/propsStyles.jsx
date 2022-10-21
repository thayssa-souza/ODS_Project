import styled, { createGlobalStyle, keyframes } from "styled-components";

export const fileira = styled.div`
    width:12vw;
    height:25vh;
    margin-bottom:2vh;
    display:flex;
    @media screen and (min-width:360px) and (max-width: 800px){
        width:25vw;
    }

`

export const firstImg = styled.img`
    width:9vw;
    height:20vh;
    margin-right:8vh;
    &:hover{
        width:11vw;
        height:22vh;
        cursor:pointer;
    }
    @media screen and (min-width:360px) and (max-width: 800px){
        width: 25vw;
    &:hover{
        width: 26vw;
        height:20vh;
        border: solid 5px #e9edc9;
        }
    }
`

export const secondImg = styled.img`
    width:9vw;
    height:20vh;
    margin-right:8vh;
    &:hover{
        width:11vw;
        height:22vh;
        cursor:pointer;
    }
    @media screen and (min-width:360px) and (max-width: 800px){
        width: 25vw;
    &:hover{
        width: 26vw;
        height:20vh;
        border: solid 5px #e9edc9;
        }
    }
`

export const thirdImg = styled.img`
    width:9vw;
    height:20vh;
    margin-right:8vh;
    &:hover{
        width:11vw;
        height:22vh;
        cursor:pointer;
    }
    @media screen and (min-width:360px) and (max-width: 800px){
        width: 25vw;
    &:hover{
        width: 26vw;
        height:20vh;
        border: solid 5px #e9edc9;
        }
    }
`

export const fourImg = styled.img`
    width:9vw;
    height:20vh;
    margin-right:8vh;
    &:hover{
        width:11vw;
        height:22vh;
        cursor:pointer;
    }
    @media screen and (min-width:360px) and (max-width: 800px){
        width: 25vw;
    }
    &:hover{
        width: 26vw;
        height:20vh;
        border: solid 5px #e9edc9;
    }
`