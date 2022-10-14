import React, { useState, useEffect, useRef } from "react";
import * as S from '../Styles/footerStyles';
import footerImage from './Images/footerImage.png'

export default function Footer(){
    return(
        <S.ContainerFooter>
           <img src={footerImage} alt="" /> 
        </S.ContainerFooter>
    )
}