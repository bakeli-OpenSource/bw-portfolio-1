import React from "react";
import { ContainerCard, ContainDescription, ContainTitle } from "../../Style/styleAccueil"
import Bouton from "./Bouton";

function Card({ children, titre, description, large, color, name, bgColor, largeButton }) {
  return <ContainerCard>
    {children}
    <ContainTitle large={large} color={color}>{titre}</ContainTitle>
    <ContainDescription>{description}</ContainDescription>
    <Bouton name={name} bgColor={bgColor} large={largeButton}/>
  </ContainerCard>;
}

export default Card;
