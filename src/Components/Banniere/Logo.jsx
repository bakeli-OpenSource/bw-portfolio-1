import React from 'react';
import { ContainLogo, ImgLogo } from '../../Style/styleAccueil';

function Logo({ Image }) {
  return (
    <ContainLogo>
      <ImgLogo src={Image} alt="Image partenaire" />
    </ContainLogo>
  );
}

export default Logo;
