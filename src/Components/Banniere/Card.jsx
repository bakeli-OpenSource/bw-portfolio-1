import React from "react";
import { ContainerCard, ContainDescription, ContainTitle } from "../../Style/styleAccueil"
import Bouton from "./Bouton";

function Card({ tag, titre, description, large, color, name }) {
  return <ContainerCard>
    <p>{tag}</p>
    <ContainTitle large={large} color={color}>{titre}</ContainTitle>
    <ContainDescription>{description}</ContainDescription>
    <Bouton name={name}/>
  </ContainerCard>;
}

export default Card;
