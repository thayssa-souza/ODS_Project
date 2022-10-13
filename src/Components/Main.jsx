import React, { useState, useEffect, useRef } from "react";
import PropsFirstImg from './Props/PropsFirstImg';
import PropsSecondImg from "./Props/PropsSecondImg";
import PropsThirdImg from "./Props/PropsThirdImg";
import PropsFourImg from "./Props/PropsFourImg";
import * as S from '../Styles/mainStyles';
import objetivosOnu from './Images/objetivosOnu.png';
import indicadores from './Images/indicadores.png';
import objPic from './Images/objPic.png';
import img3G from './Images/img3G.png';
import img5G from './Images/img5G.png';
import img8G from './Images/img8G.png';
import img14G from './Images/img14G.png';


export default function Main(){

    const [openImage1, setOpenImage1] = useState(false);
    const [openImage2, setOpenImage2] = useState(false);
    const [openImage3, setOpenImage3] = useState(false);
    const [openImage4, setOpenImage4] = useState(false);


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
                <PropsFirstImg modal1={() => {
                    setOpenImage1(!openImage1);
                }} />
                {openImage1 && <S.Pic src={img3G} alt="" /> }

                <PropsSecondImg modal2={() => {
                    setOpenImage2(!openImage2);
                }} />
                {openImage2 && <S.Pic src={img5G} alt="" /> }

                <PropsThirdImg modal3={() => {
                    setOpenImage3(!openImage3);
                }} />
                {openImage3 && <S.Pic src={img8G} alt="" /> }

                <PropsFourImg modal4={() => {
                    setOpenImage4(!openImage4);
                }} />
                {openImage4 && <S.Pic src={img14G} alt="" /> }
            </S.fileiras>
        </S.ContainerMain>
    )
}