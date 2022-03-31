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

const ConnectContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    > div:first-child {
      width: 100%;
      text-align: center;
      display: flex;
      flex-wrap: wrap;
      > a {
        margin-bottom: 20px;
        width: 50%;
        margin-right: 0;
      }
    }
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    margin-top: 40px;
    width: 100%;
    justify-content: space-between;
  }
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
    </div>
  </FooterContainer>
);

export default Footer;
