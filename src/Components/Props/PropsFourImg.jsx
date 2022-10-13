import React from "react";
import * as S from '../../Styles/propsStyles';
import pic from '../Images/pic.png';

export default function PropsFourImg({ modal4 }) {
  return (
    <S.fileira>
      <S.fourImg src={pic} onClick={modal4} />
    </S.fileira>
  );
}