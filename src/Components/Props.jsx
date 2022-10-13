import React from "react";
import * as S from '../Styles/propsStyles';
import pic3 from './Images/pic3.png';
import pic5 from './Images/pic5.png';
import pic8 from './Images/pic8.png';
import pic from './Images/pic.png';

export default function Props({ modal }) {
  return (
    <div>
      <S.firstImg src={pic3} onClick={modal}>E-mail</S.firstImg>
    </div>
  );
}