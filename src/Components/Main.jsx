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
    const [openText] = useState('Foi desenvolvido o Centro de Contingência do Estado de São Paulo para monitorar e coordenar ações contra a propagação do novo coronavírus')


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
                    setOpenImage2(false);
                    setOpenImage3(false);
                    setOpenImage4(false);

                }} />

                <PropsSecondImg modal2={() => {
                    setOpenImage2(!openImage2);
                    setOpenImage1(false);
                    setOpenImage3(false);
                    setOpenImage4(false);
                }} />

                <PropsThirdImg modal3={() => {
                    setOpenImage3(!openImage3);
                    setOpenImage1(false);
                    setOpenImage2(false);
                    setOpenImage4(false);
                }} />

                <PropsFourImg modal4={() => {
                    setOpenImage4(!openImage4);
                    setOpenImage1(false);
                    setOpenImage2(false);
                    setOpenImage3(false);
                }} />
            </S.fileiras>

            <S.ContainerImages>
                {openImage1 && <S.ContainerPicAndText>
                    <S.Pic src={img3G} alt="" />
                    <S.TextImage>Foi desenvolvido o Centro de Contingência do Estado para monitorar e coordenar ações contra a propagação do novo coronavírus. São Paulo foi o primeiro estado a ter 70% da população completamente vacina</S.TextImage>
                </S.ContainerPicAndText>}

                {openImage2 && <S.ContainerPicAndText>
                    <S.Pic src={img5G} alt="" />
                    <S.TextImage>Nas eleições de 2022 em São Paulo, foram eleitos 5 vereadores transgêneros e/ou transexuais, destes, 4 compõem a Bancada Feminista do Senado</S.TextImage> 
                </S.ContainerPicAndText>}

                {openImage3 && <S.ContainerPicAndText>
                    <S.Pic src={img8G} alt="" />
                    <S.TextImage>Mesmo com a crise eonômica brasileira, São Paulo continua em ascenção. Comparando maio de 2022 com maio de 2021, houve um aumento de 2,2% no PIB Paulista com foco nos setores da agropecuária, indústria e serviços</S.TextImage>
                </S.ContainerPicAndText>}

                {openImage4 && <S.ContainerPicAndText>
                    <S.Pic src={img14G} alt="" />
                    <S.TextImage>Com a instauração do projeto de despoluição dos rios que atravessam São Paulo, a mancha de poluição do Rio Tietê diminuir 40% entre 2020 e 2021, correspondendo a uma diminuição de 380km em um ano</S.TextImage>
                </S.ContainerPicAndText>}
            </S.ContainerImages>
        </S.ContainerMain>
    )
}