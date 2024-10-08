import React from 'react';
import { Container, ContainerParent, ContainPaddingT, ContainIcon } from '../../Style/styleAccueil';
import CardInfo from '../Banniere/CardInfo';
import Form from './Form';

function GetInTouch() {
  return (
    <Container>
      <ContainerParent>
        <CardInfo
          titre={'Get In Touch'}
          color={'white'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
          }
        />
        <ContainPaddingT paddingTop>
          <Form />
        </ContainPaddingT>
      </ContainerParent>
    </Container>
  );
}

export default GetInTouch;
