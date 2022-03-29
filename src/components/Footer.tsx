import styled from 'styled-components';
import FaceBookIcon from 'public/assets/social-media/facebook.svg';
import TwitterIcon from 'public/assets/social-media/twitter.svg';
import TelegramIcon from 'public/assets/social-media/telegram.svg';
import YoutubeIcon from 'public/assets/social-media/youtube.svg';
import InstagramIcon from 'public/assets/social-media/instagram.svg';
import imgLogo from 'public/assets/team-dao-logo.png';
import Image from './Image';

const A = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 30px;
`;

const FooterContainer = styled.div`
  max-width: 80%;
  margin: auto;
  color: white;
`;

const NavContainer = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 13px;
`;

const LinkContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;
  > div {
    width: 20%;
  }
  h4 {
    font-size: 20px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #989898;
  }
`;

const ConnectContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: white;
  margin-top: 90px;
  margin-bottom: 44px;
`;

const Footer = () => (
  <FooterContainer>
    <NavContainer>
      <A href="#">ABOUT US</A>
      <A href="#">JOBS</A>
      <A href="#">EVENTS</A>
    </NavContainer>

    <LinkContainer>
      <div>
        <h4>Development</h4>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
      </div>
      <div>
        <h4>Development</h4>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
      </div>
      <div>
        <h4>Development</h4>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
      </div>
      <div>
        <h4>Development</h4>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
      </div>
      <div>
        <h4>Development</h4>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
      </div>
    </LinkContainer>
    <ConnectContainer>
      <div>
        <A>Support</A>
        <A>Privacy policy</A>
        <A>Term of Use</A>
        <A>Cookie Policy</A>
        <A>Contact</A>
      </div>
      <SocialMediaContainer>
        <TelegramIcon />
        <TwitterIcon />
        <FaceBookIcon />
        <YoutubeIcon />
        <InstagramIcon />
      </SocialMediaContainer>
    </ConnectContainer>
    <Divider />

    <div>
      <Image src={imgLogo} alt="logo" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>
    </div>
  </FooterContainer>
);

export default Footer;
