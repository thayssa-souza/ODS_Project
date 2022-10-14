import React, { useState, useEffect, useRef } from "react";
import * as S from '../Styles/headerStyles';
import nacoesUnidasPic from './Images/nacoesUnidasPic.png';
import sp from './Images/sp.png'

export default function Header(){
    return(
        <S.ContainerHeader>
            <img src={nacoesUnidasPic} alt="" />
            <img src={sp} alt="" />
        </S.ContainerHeader>
    )
}