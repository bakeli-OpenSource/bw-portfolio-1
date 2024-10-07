import React from "react";
import { ContainerCard, ContainTitle, ContainDescription } from "../../Style/styleAccueil";

function CardInfo({ titre, description, color }) {
  return <ContainerCard alignItems>
    <ContainTitle large="34px" color={color}>{titre}</ContainTitle>
    <ContainDescription>{description}</ContainDescription>
  </ContainerCard>;
}

export default CardInfo;
