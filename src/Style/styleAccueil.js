import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export const Container = styled.div`
background: #080808;
`
export const HeaderContainer = styled.div`
 background: #1B1B1B;
 font-weight: 400;
 font-size: 14px;
 padding: 28px 0px;
 margin: 0px 9.25%;
 border-bottom-right-radius: 8px;
 border-bottom-left-radius: 8px;
`
export const ContainElements = styled.div`
 display: flex;
   justify-content: center;
   align-items: center;
   gap: 9rem;
`
export const ContainElement = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 70px;
`
export const ContainIcon = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 30px;
`
export const Lien = styled(NavLink)`
 color: #9C9C9C;
 text-decoration: none;
`
export const ContainerCard = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 10px;
 margin: 0;
`
export const ContainTitle = styled.p`
 font-weight: 800;
 font-family: 'Raleway', sans-serif;
 margin: 0;
 font-size: ${(props) => (props.large || '24px')};
 color: ${(props) => (props.color ? 'white' : '#080808')};
`
export const ContainDescription = styled.p`
 font-size: 14px;
 color: #9C9C9C;
 font-weight: 400;
 margin: 0;
`
export const Button = styled.button`
font-size: ${(props) => (props.large ? '16px' : '14px')};
color: white;
font-weight: 700;
display: flex;
   align-items: center;
   justify-content: center;
   gap: 10px;
    background: ${(props) => props.bgColor || '#3F8E00'};
  border-radius: 4px;
  margin: 12px;
  padding: 10px 24px;
  border: solid ${(props) => props.bgColor || '#3F8E00'}; 
`
export const TagParagraphe = styled.p`
 background: ${(props) => props.bgColor || '#3F8E00'};
 color: ${(props) => props.color || 'white'};
 border: solid ${(props) => props.bgColor || '#3F8E00'};
 border-radius: 50px;
 font-size: 12px;
 font-weight: 700;
 padding: 1px 10px;
 text-align: center;
`
export const ContainerCardTestimonial = styled.div`
 display: flex;
 flex-direction: column;
 align-items: start;
 gap: 1.5rem;
`
export const ContainQuote = styled(FaQuoteLeft)`
 color: white;
 font-size: 24px;
`
export const ContainNameTestimonial = styled.p`
 color: white;
 font-size: 18px;
`
export const ImgTestimonial = styled.img`
 width: 10%;
`
export const ContainerCardTestimonialParent = styled.div`
 position: relative;
 border: 1px solid;
border-image-source: linear-gradient(90deg, #484848 1.24%, rgba(27, 27, 27, 0) 100%);
 border-image-slice: 1;
 padding: 30px;
`
export const ContainQuoteParent = styled.div`
position: absolute;
top: -13px;
`
export const ContainImgNameTesti = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
`
export const ContainerInput = styled.div`
 margin-bottom: 1rem;
 display: flex;
 flex-direction: column;
 gap: 0.5rem;
`
export const ContainLabel = styled.label`
color: white;
font-size: 12px;
font-weight: 600;
`
export const ContainInput = styled.input`
 border: 1px solid #D8D8D8;
 padding: 8px 12px;
 background: white;
 color: #757575;
 border-radius: 4px;
 width: 50%;
`
export const ContainFooter = styled.div`
background: #1B1B1B;
padding: 15px;
display: flex;
justify-content: center;
`
export const IconCoeur = styled(FaHeart)`
color: red;
margin-bottom: -2px;
`