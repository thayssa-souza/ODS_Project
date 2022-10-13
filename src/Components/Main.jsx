import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes, Link  } from 'react-router-dom';
import Props from './Props';
import * as S from '../Styles/mainStyles';
import objetivosOnu from './Images/objetivosOnu.png';
import indicadores from './Images/indicadores.png';
import objPic from './Images/objPic.png';
import pic3 from './Images/pic3.png';
import pic5 from './Images/pic5.png';
import pic8 from './Images/pic8.png';
import pic from './Images/pic.png';

export default function Main(){

    const [openImage, setOpenImage] = useState(false);
    const [openGithub, setOpenGithub] = useState(false);
    const [openLinkedin, setOpenLinkedin] = useState(false);
    return(
        <S.ContainerMain>
            <img src={objPic} alt="" />
            <S.ContainerText>
            <S.firstText>Em 2015, com o objetivo de superar os maiores desafios que aflingem a humanidade, foram instituídas pela Organização das Nações Unidas (ONU) os 17 Objetivos de Desenvolvimento Sustentável.</S.firstText>
            <S.secondText>Com o propósito de paralisar o crescimento ecônomico da pobreza, a desigualdade e mudanças climáticas, 193 Estado-membros da ONU aderiram ao movimento.</S.secondText>
            </S.ContainerText>
            <S.FirstPic src={indicadores} alt="" />
            <S.MajorPic src={objetivosOnu} atl="" />

            <S.ContainerText>
            <S.thirdText>Como estão as ações da cidade de São Paulo?</S.thirdText>
            </S.ContainerText>
            <S.fileiras>
                {/* <Props modal={() => {
                    setOpenImage(!openImage);
                }} />
                {openImage}
                <img>
                </img> */}
                {/* <S.firstImg src={pic3}  alt="" /> */}
                {/* <S.secondImg src={pic5}  alt="" />
                <S.thirdImg src={pic8}  alt="" />
                <S.fourImg src={pic}  alt="" /> */}
            </S.fileiras>
        </S.ContainerMain>
    )
}