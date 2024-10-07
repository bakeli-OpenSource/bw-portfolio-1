import React from "react";
import { Container, ContainerParent, ContainPaddingT,
    ContainIcon
 } from "../../Style/styleAccueil";
import CardInfo from "../Banniere/CardInfo";
import CardTestimonial from "../Banniere/CardTestimonial";
import Photo4 from "../../assets/Images/photo4.png";
import Photo3 from "../../assets/Images/photo3.png";
import Photo2 from "../../assets/Images/photo2.png";
import Photo1 from "../../assets/Images/photo1.png";


function Testimonial() {
  return <Container>
    <ContainerParent>
    <CardInfo titre={"Testimonials"} color={"white"}
        description={"Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        />
        <ContainPaddingT>
            <ContainIcon>
            <CardTestimonial Picture={Photo4}/>
            <CardTestimonial Picture={Photo3}/>
            </ContainIcon>
        </ContainPaddingT>
        <ContainPaddingT>
            <ContainIcon>
            <CardTestimonial Picture={Photo2}/>
            <CardTestimonial Picture={Photo1}/>
            </ContainIcon>
        </ContainPaddingT>
    </ContainerParent>
  </Container>;
}

export default Testimonial;
