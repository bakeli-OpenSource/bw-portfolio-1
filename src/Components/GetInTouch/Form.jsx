import React from "react";
import { ContainerCard, ContainerInput, ContainForm } from "../../Style/styleAccueil";
import Input from "../Banniere/Input";
import Bouton from "../Banniere/Bouton";

function Form() {
  return <div>
    <ContainForm>
        <ContainerCard alignItems gap>
            <Input namelabel={"Email"} placeholder={"Please enter your email"} id={"email"}/>
            <Input namelabel={"Mobile"} placeholder={"Enter mobile"} id={"mobile"}/>
            <Input namelabel={"Message"} area rows={"6"} cols={"30"} placeholder={"Enter your message"} id={"message"}/>
            <ContainerInput>
            <Bouton name={"Submit"}/>
            </ContainerInput>
        </ContainerCard>
    </ContainForm>
  </div>;
}

export default Form;
