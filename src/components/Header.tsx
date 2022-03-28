import Image from 'components/Image';
import styled from 'styled-components';
import imgLogo from 'public/assets/team-dao-logo.png';
import GlobeIcon from 'public/assets/globe.svg';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 26px 70px;
`;

const NavContainer = styled.div`
  display: flex;
  gap: 40px;
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
`;

const Header = () => (
  <HeaderContainer>
    <Image src={imgLogo} alt="logo" />
    <NavContainer>
      <a href="#about-us">About us</a>
      <a href="#token">Token</a>
      <a href="#road-map">Roadmap</a>
      <a href="#white-paper">Whitepaper</a>
      <a href="#marketplace">Marketplace</a>
      <a href="#add">Add TEAM TOKEN</a>
      <a href="#connect">Connect</a>
      <GlobeIcon />
    </NavContainer>
  </HeaderContainer>
);

export default Header;
