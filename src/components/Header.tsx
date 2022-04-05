import Image from 'components/Image';
import styled from 'styled-components';
import imgLogo from 'public/assets/team-dao-logo.png';
import GlobeIcon from 'public/assets/globe.svg';
import Hamburger from 'hamburger-react';
import { useEffect, useState } from 'react';
import NextLink from 'next/link';

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
    font-family: 'Technology';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    color: #ffffff;
  }

  &[data-toggle='false'] {
    a {
      position: relative;
      &:before {
        position: absolute;
        bottom: -4px;
        content: '';
        width: 0px;
        height: 4px;
        background: #00ff19;
        transition: all 0.2s ease;
      }

      &:hover {
        &:before {
          width: 100%;
          transition: all 0.2s ease;
        }
      }
    }
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
      <a href="/">
        <Image src={imgLogo} alt="logo" />
      </a>

      <NavContainer data-toggle={isOpen}>
        <a onClick={() => setOpen(false)} href="/#about-us">
          About us
        </a>
        <NextLink href="/#token">Token</NextLink>
        <NextLink href="/#road-map">Roadmap</NextLink>
        <NextLink href="https://whitepaper.teamdao.com/">Whitepaper</NextLink>
        <NextLink href="/#road-map">Marketplace</NextLink>
        <NextLink href="/coming-soon">Add TEAM TOKEN</NextLink>
        <NextLink href="/coming-soon">Connect</NextLink>
        <GlobeIcon />
      </NavContainer>

      <HamburgerContainer>
        <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
      </HamburgerContainer>
    </HeaderContainer>
  );
};

export default Header;
