import React from "react";
import * as S from '../../Styles/propsStyles';
import pic8 from '../Images/pic8.png';

export default function PropsThirdImg({ modal3 }) {
  return (
    <S.fileira>
      <S.thirdImg src={pic8} onClick={modal3} />
    </S.fileira>
  );
}