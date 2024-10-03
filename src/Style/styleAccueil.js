import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

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
 gap: 10px;
 margin: 0;
`
export const ContainTitle = styled.p`
 font-weight: 800;
 font-family: 'Raleway', sans-serif;
 margin: 0;
 font-size: ${(props) => (props.large ? '44px' : '24px')};
 color: ${(props) => (props.color ? 'white' : '#080808')};
`
export const ContainDescription = styled.p`
 font-size: 14px;
 color: #9C9C9C;
 font-weight: 400;
`
export const Button = styled.button`
color: white;
font-size: ${(props) => (props.large ? '16px' : '14px')};
font-weight: 700;
display: flex;
   align-items: center;
   gap: 5px;
   background: black;
`