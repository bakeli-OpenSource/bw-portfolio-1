import React from 'react';
import { ContainerCard, ContainDescription, ContainTitle } from '../../Style/styleAccueil';
import Bouton from './Bouton';

function Card({
  children,
  titre,
  description,
  large,
  color,
  nameButton,
  bgColor,
  largeButton,
  margin
}) {
  return (
    <ContainerCard margin={margin}>
      {children}
      <ContainTitle large={large} color={color}>
        {titre}
      </ContainTitle>
      <ContainDescription>{description}</ContainDescription>
      <Bouton name={nameButton} bgColor={bgColor} large={largeButton} />
    </ContainerCard>
  );
}

export default Card;
