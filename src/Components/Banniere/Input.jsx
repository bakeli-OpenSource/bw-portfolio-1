import React from "react";
import { ContainerInput, ContainLabel, ContainInput } from "../../Style/styleAccueil";

function Input() {
  return <ContainerInput>
    <ContainLabel htmlFor="">Email</ContainLabel>
    <ContainInput type="text" placeholder="Votre email" />
  </ContainerInput>;
}

export default Input;
