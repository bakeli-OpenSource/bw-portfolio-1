import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { Container, ContainElements, ContainerParent,
  ContainDescription , ContainImgNameTesti, Img,
  ContainImageBanniere, ContainPaddingT} from "../../Style/styleAccueil";
import Card from "./Card";
import ImageBanniere from "../../assets/Images/ImageBanniere.png"
import Logo from "./Logo";
import { LogoBanniere } from "../../data/banniere";

function Banniere() {
  return <Container>
     <Router>
      <Navbar />
    </Router>
    <ContainerParent>
    <ContainElements>
    <Card color large="44px"
     titre={"Your Name Here"}
     description={"Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
     nameButton={"Let’s get started"}
     bgColor={"#3F8E00"}
    />
    <ContainImageBanniere>
      <Img src={ImageBanniere} alt="Une image" />
    </ContainImageBanniere>
    </ContainElements>
    <ContainPaddingT paddingTop>
    <ContainDescription>Worked with</ContainDescription>
    <ContainImgNameTesti flexDirection>
    {
      LogoBanniere.map((item) => {
        return (
          <Logo key={item.id} Image={item.image}/>
        );
      })
    }
    </ContainImgNameTesti>
    </ContainPaddingT>
    </ContainerParent>
  </Container>;
}

export default Banniere;
