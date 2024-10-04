import React from "react";
import { ContainerCard, ContainTitle, ContainDescription } from "../../Style/styleAccueil";

function CardInfo({ titre, description }) {
  return <ContainerCard>
    <ContainTitle large="34px">{titre}</ContainTitle>
    <ContainDescription>{description}</ContainDescription>
  </ContainerCard>;
}

export default CardInfo;
