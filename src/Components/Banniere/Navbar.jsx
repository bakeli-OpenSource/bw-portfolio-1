import React from "react";
import { HeaderContainer, ContainElements, ContainElement, ContainIcon, Lien } from "../../Style/styleAccueil";
import { NavbarData } from "../../data/banniere";
import { FaBehance, FaLinkedinIn, FaTwitter  } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <HeaderContainer>
        <ContainElements>
        <ContainElement>
          {NavbarData.map((item) => {
            return (
              <Lien
                to={item.link}
                key={item.id}
                >
                {item.title}
              </Lien>
            );
          })}
        </ContainElement>
        <ContainIcon>
         <Lien to={"#"}><FaLinkedinIn /></Lien>
          <Lien to={"#"}><FaBehance/></Lien>
          <Lien to={"#"}><FaTwitter /></Lien>
        </ContainIcon>
        </ContainElements>
      </HeaderContainer>
    </div>
  );
}

export default Navbar;
