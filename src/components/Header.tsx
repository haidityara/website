import Image from 'components/Image';
import styled from 'styled-components';
import imgLogo from 'public/assets/team-dao-logo.png';
import GlobeIcon from 'public/assets/globe.svg';
import Hamburger from 'hamburger-react';
import { useEffect, useState } from 'react';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 26px 70px;
`;

const NavContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  a {
    text-decoration: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    display: none;
    position: fixed;
    top: 0;
    left: 0;

    &[data-toggle='false'] {
      display: none;
    }

    &[data-toggle='true'] {
      padding: 4rem 0;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      background: rgba(0, 0, 0, 0.8);
      width: 100vw;
      height: calc(100% - 8rem);
      justify-content: space-around;

      a {
        font-size: 1.75rem;
      }
    }
  }
`;

const HamburgerContainer = styled.div`
  z-index: 1000;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const body = document.getElementsByTagName('body');
    body[0].setAttribute('data-scroll-lock', `${isOpen}`);
  }, [isOpen]);

  return (
    <HeaderContainer>
      <Image src={imgLogo} alt="logo" />

      <NavContainer data-toggle={isOpen}>
        <a onClick={() => setOpen(false)} href="#about-us">
          About us
        </a>
        <a href="#token">Token</a>
        <a href="#road-map">Roadmap</a>
        <a href="#white-paper">Whitepaper</a>
        <a href="#marketplace">Marketplace</a>
        <a href="#add">Add TEAM TOKEN</a>
        <a href="#connect">Connect</a>
        <GlobeIcon />
      </NavContainer>

      <HamburgerContainer>
        <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
      </HamburgerContainer>
    </HeaderContainer>
  );
};

export default Header;
