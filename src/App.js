import React, { useState, useEffect, useRef } from "react";
import * as S from './Styles/globalStyles';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from "./Components/Footer"

export default function App(){
  return(
    <>
    <S.GlobalStyle />
    <Header />
    <Main />
    <Footer />
    </>
  )
}
