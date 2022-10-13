import React from "react";
import * as S from '../../Styles/propsStyles';
import pic3 from '../Images/pic3.png';

export default function PropsFirstImg({ modal1 }) {
  return (
    <S.fileira>
      <S.firstImg src={pic3} onClick={modal1} />
    </S.fileira>
  );
}