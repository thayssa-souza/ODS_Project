import React from "react";
import * as S from '../../Styles/propsStyles';
import pic5 from '../Images/pic5.png';

export default function PropsSecondImg({ modal2 }) {
  return (
    <S.fileira>
      <S.secondImg src={pic5} onClick={modal2} />
    </S.fileira>
  );
}