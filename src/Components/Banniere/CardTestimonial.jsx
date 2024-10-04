import React from "react";
import { ContainerCardTestimonial, ContainDescription,
    ContainImgNameTesti, ContainQuote, ContainerCardTestimonialParent,
    ContainQuoteParent, ContainNameTestimonial,
    ImgTestimonial } from "../../Style/styleAccueil";
import Picture from "../../assets/Images/photo1.png";

function CardTestimonial() {
  return <ContainerCardTestimonialParent>
    <ContainerCardTestimonial>
    <ContainDescription>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. 
    </ContainDescription>
    <ContainImgNameTesti>
        <ImgTestimonial src={Picture} alt="Image du testimonial" />
        <ContainNameTestimonial>Client Name</ContainNameTestimonial>
    </ContainImgNameTesti>
  </ContainerCardTestimonial>
  <ContainQuoteParent>
  <ContainQuote/>
  </ContainQuoteParent>
  </ContainerCardTestimonialParent>;
}

export default CardTestimonial;
