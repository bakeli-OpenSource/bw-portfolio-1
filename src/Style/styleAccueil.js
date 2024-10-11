import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { FaQuoteLeft, FaHeart, FaBars } from 'react-icons/fa';

export const Container = styled.div`
  background: #080808;
`;
export const ContainerParent = styled.div`
  padding: 4rem 12rem;

  @media (min-width: 320px) and (max-width: 991px) {
    padding: ${(props) => (props.padding ? '3rem 2rem' : '3rem 1rem')};
  }
  @media (min-width: 992px) and (max-width: 1024px) {
    padding: 3rem 5rem;
  }
`;
export const ContainPaddingT = styled.div`
  padding-top: ${(props) => (props.paddingTop ? '1rem' : '3rem')};
`;
export const HeaderContainer = styled.div`
  background: #1b1b1b;
  font-weight: 400;
  font-size: 14px;
  padding: 28px 0px;
  margin: 0px 9.25%;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;

  @media (min-width: 992px) and (max-width: 1024px) {
    padding: 24px 9px;
    margin: 0px 7.25%;
  }
`;
export const ContainIconFaBars = styled.div`
text-align: center;
display: none;
 @media (min-width: 320px) and (max-width: 991px) {
    display: block;
  }
`
export const IconFaBars = styled(FaBars)`
color: #9c9c9c;
font-size: 25px;
`
export const ContainElements = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9rem;

  @media (min-width: 320px) and (max-width: 991px) {
    flex-direction: column;
    gap: 2rem;
  }
`;
export const ContainElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;

  @media (min-width: 320px) and (max-width: 991px) {
    flex-direction: column;
  }
  @media (min-width: 992px) and (max-width: 1024px) {
    gap: 37px;
  }
`;
export const ContainResponsive = styled.div`
 @media (min-width: 320px) and (max-width: 991px) {
    display: none;
  }
`
export const ContainIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (min-width: 320px) and (max-width: 991px) {
    flex-direction: column;
  }
`;
export const Lien = styled(NavLink)`
  color: #9c9c9c;
  text-decoration: none;
`;
export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.alignItems ? 'center' : 'start')};
  gap: ${(props) => (props.gap ? '0' : '2rem')};
  margin: ${(props) => (props.margin ? '22px' : '0')};
  @media (min-width: 320px) and (max-width: 991px) {
    align-items: center;
  }
`;
export const ContainTitle = styled.p`
  font-weight: 800;
  font-family: 'Raleway', sans-serif;
  margin: 0;
  font-size: ${(props) => props.large || '24px'};
  color: ${(props) => (props.color ? 'white' : '#080808')};
  @media (min-width: 320px) and (max-width: 991px) {
    text-align: center;
  }
`;
export const ContainDescription = styled.p`
  font-size: 14px;
  color: #9c9c9c;
  font-weight: 400;
  margin: 0;
`;
export const Img = styled.img`
  width: 25rem;

  @media (min-width: 320px) and (max-width: 991px) {
    width: 100%;
  }
`;
export const ContainImageBanniere = styled.div`
  display: flex;
  justify-content: center;
   @media (min-width: 320px) and (max-width: 991px) {
    display: none;
  }
`;
export const ContainImageBanniereMobile = styled.div`
  display: none;
  justify-content: center;
   @media (min-width: 320px) and (max-width: 991px) {
    display: ${(props) => (props.display ? 'block' : 'flex')};
  }
`;
export const ContainLogo = styled.div`
  border: 1px solid #1b1b1b;
  border-radius: 6px;
  padding: 10px;
  margin: 15px 10px;
      display: flex;
    justify-content: center;
`;
export const ImgLogo = styled.img`
  max-width: 50%;
  min-width: 50%;
  min-height: 26px;
  @media (min-width: 320px) and (max-width: 991px) {
   max-width: 40%;
        min-width: 40%;
        min-height: 56px;
  }
`;
export const Button = styled.button`
  font-size: ${(props) => (props.large ? '16px' : '14px')};
  font-family: 'IBM Plex Mono', monospace;
  color: white;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: ${(props) => props.bgColor || '#3F8E00'};
  border-radius: 4px;
  padding: ${(props) => props.padding || '10px 24px'};
  border: solid ${(props) => props.bgColor || '#3F8E00'};
  box-shadow: ${(props) => props.shadow || "0px 8px 30px 0px #3F8E004D"};
  width: ${(props) => (props.width ? '100%' : '')};

  @media (min-width: 320px) and (max-width: 1024px) {
  font-size: 12px;
  }
`;
export const TagParagraphe = styled.p`
  background: ${(props) => props.bgColor || '#3F8E00'};
  color: ${(props) => props.color || 'white'};
  border: solid ${(props) => props.bgColor || '#3F8E00'};
  border-radius: 50px;
  font-size: 12px;
  font-weight: 700;
  padding: 1px 10px;
  text-align: center;
`;
export const ContainerCardTestimonial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;

  @media (min-width: 320px) and (max-width: 991px) {
    flex-direction: column;
  }
`;
export const ContainQuote = styled(FaQuoteLeft)`
  color: white;
  font-size: 24px;
`;
export const ContainNameTestimonial = styled.p`
  color: white;
  font-size: 18px;
`;
export const ImgTestimonial = styled.img`
  width: 10%;
`;
export const ContainerCardTestimonialParent = styled.div`
  position: relative;
  border: 1px solid;
  border-image-source: linear-gradient(90deg, #484848 1.24%, rgba(27, 27, 27, 0) 100%);
  border-image-slice: 1;
  padding: 30px;
`;
export const ContainQuoteParent = styled.div`
  position: absolute;
  top: -13px;
`;
export const ContainImgNameTesti = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: ${(props) => (props.flexDirection ? 'column' : 'row')};
  }
`;
export const ContainForm = styled.div`
display: grid;
grid-template-columns: repeat(12, 1fr);
  @media (min-width: 320px) and (max-width: 991px) {
    display: block;
  }
`;
export const FormContain = styled.div`
grid-column: 4/span 6;
`
export const ContainerInput = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  @media (min-width: 320px) and (max-width: 991px) {
    flex-direction: column;
    width: 75%;
  }
`;
export const ContainLabel = styled.label`
  color: white;
  font-size: 12px;
  font-weight: 600;
`;
export const ContainInput = styled.input`
  border: 1px solid #d8d8d8;
  padding: 8px 12px;
  background: white;
  color: #757575;
  border-radius: 4px;
  width: 95%;
`;
export const ContainTextarea = styled.textarea`
  border: 1px solid #d8d8d8;
  padding: 8px 12px;
  background: white;
  color: #757575;
  border-radius: 4px;
  width: 95%;
`;
export const ContainFooter = styled.div`
  background: #1b1b1b;
  padding: 15px;
  display: flex;
  justify-content: center;
`;
export const IconCoeur = styled(FaHeart)`
  color: red;
  margin-bottom: -2px;
`;
export const ImgRecentWork = styled.img`
  width: 100%;
`;
export const ContainCardRW = styled.div`
  margin: 15px;
`;
