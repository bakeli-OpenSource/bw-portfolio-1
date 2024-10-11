import React from 'react';
import CardInfo from '../Banniere/CardInfo';
import { ContainerParent, ImgRecentWork, ContainPaddingT } from '../../Style/styleAccueil';
import Card from '../Banniere/Card';
import { TestimonialsData } from '../../data/banniere';
import Carrousel from '../Carrousel';

function RecentWork() {

  return (
    <ContainerParent padding>
      <CardInfo
        titre={'Recent Work'}
        description={
          'Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      />
      <ContainPaddingT>
        <Carrousel infinite={false}>
        {TestimonialsData.map((item, index) => {
            return (
              <Card
                margin
                titre={item?.title}
                key={index}
                description={item?.description}
                nameButton={item?.nameButton}
              >
                <ImgRecentWork src={item?.image} alt="Une image" />
              </Card>
            );
          })}
        </Carrousel>
      </ContainPaddingT>
    </ContainerParent>
  );
}

export default RecentWork;
