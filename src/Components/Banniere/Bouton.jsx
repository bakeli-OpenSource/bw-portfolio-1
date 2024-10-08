import React from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { Button } from '../../Style/styleAccueil';

function Bouton({ name, large, bgColor }) {
  return (
    <Button large={large} bgColor={bgColor}>
      {name}
      <MdOutlineArrowForwardIos />
    </Button>
  );
}

export default Bouton;
