import React from "react";
import { ContainerInput, ContainLabel, ContainInput, ContainTextarea } from "../../Style/styleAccueil";

function Input({ namelabel, type, placeholder, id, cols, rows, area }) {
  return <ContainerInput>
    <ContainLabel htmlFor={id}>{namelabel}</ContainLabel>
    {
      area ? <ContainTextarea type={type} placeholder={placeholder} id={id} rows={rows} cols={cols}/> :
    <ContainInput type={type} placeholder={placeholder} id={id}/>
    }
  </ContainerInput>;
}

export default Input;
