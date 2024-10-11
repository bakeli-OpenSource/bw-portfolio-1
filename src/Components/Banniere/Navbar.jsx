import React, { useState } from 'react';
import {
  HeaderContainer,
  ContainElements,
  ContainElement,
  ContainIcon,
  Lien, ContainIconFaBars,
  IconFaBars, ContainResponsive
} from '../../Style/styleAccueil';
import { NavbarData } from '../../data/banniere';
import { FaBehance, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function Navbar() {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleNav = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <div>
      <HeaderContainer>
        <ContainIconFaBars>
          <IconFaBars onClick={toggleNav} />
        </ContainIconFaBars>
        {isResponsive && (
            <ContainElements>
              <ContainElement>
                {NavbarData.map((item) => {
                  return (
                    <Lien to={item.link} key={item.id}>
                      {item.title}
                    </Lien>
                  );
                })}
              </ContainElement>
              <ContainIcon>
                <Lien to={'#'}>
                  <FaLinkedinIn />
                </Lien>
                <Lien to={'#'}>
                  <FaBehance />
                </Lien>
                <Lien to={'#'}>
                  <FaTwitter />
                </Lien>
              </ContainIcon>
            </ContainElements>
        )}
        <ContainResponsive>
        <ContainElements>
              <ContainElement>
                {NavbarData.map((item) => {
                  return (
                    <Lien to={item.link} key={item.id}>
                      {item.title}
                    </Lien>
                  );
                })}
              </ContainElement>
              <ContainIcon>
                <Lien to={'#'}>
                  <FaLinkedinIn />
                </Lien>
                <Lien to={'#'}>
                  <FaBehance />
                </Lien>
                <Lien to={'#'}>
                  <FaTwitter />
                </Lien>
              </ContainIcon>
            </ContainElements>
        </ContainResponsive>
      </HeaderContainer>
    </div>
  );
}

export default Navbar;
