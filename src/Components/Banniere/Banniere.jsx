import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  Container,
  ContainElements,
  ContainerParent,
  ContainDescription,
  ContainImgNameTesti,
  Img, ContainResponsive,
  ContainImageBanniere,
  ContainPaddingT, ContainImageBanniereMobile
} from '../../Style/styleAccueil';
import Card from './Card';
import ImageBanniere from '../../assets/Images/ImageBanniere.png';
import Logo from './Logo';
import { LogoBanniere } from '../../data/banniere';
import Carrousel from '../Carrousel';

function Banniere() {
  return (
    <Container>
      <Router>
        <Navbar />
      </Router>
      <ContainerParent>
        <ContainElements>
        <ContainImageBanniereMobile>
            <Img src={ImageBanniere} alt="Une image" />
          </ContainImageBanniereMobile>
          <Card
            color
            large="44px"
            titre={'Your Name Here'}
            description={
              'Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
            }
            nameButton={'Let’s get started'}
            bgColor={'#3F8E00'}
            shadow={"0px 8px 30px 0px #3F8E0080"}
            padding={"21px 64px"} largeButton
          />
          <ContainImageBanniere>
            <Img src={ImageBanniere} alt="Une image" />
          </ContainImageBanniere>
        </ContainElements>
        <ContainPaddingT paddingTop>
          <ContainDescription>Worked with</ContainDescription>
          <ContainResponsive>
          <ContainImgNameTesti flexDirection>
          {LogoBanniere.map((item) => {
              return <Logo key={item.id} Image={item.image} />;
            })}
          </ContainImgNameTesti>
          </ContainResponsive>
          <ContainImageBanniereMobile display>
            <Carrousel infinite={true} arrows autoplay>
            {LogoBanniere.map((item) => {
              return <Logo key={item.id} Image={item.image} />;
            })}
            </Carrousel>
          </ContainImageBanniereMobile>
        </ContainPaddingT>
      </ContainerParent>
    </Container>
  );
}

export default Banniere;
