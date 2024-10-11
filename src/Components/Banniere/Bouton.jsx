import React from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { Button } from '../../Style/styleAccueil';

function Bouton({ name, large, bgColor, shadow, padding, width }) {
  return (
    <Button large={large} bgColor={bgColor} shadow={shadow} padding={padding} width={width}>
      {name}
      <MdOutlineArrowForwardIos />
    </Button>
  );
}

export default Bouton;
