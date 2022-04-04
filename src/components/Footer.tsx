import styled from 'styled-components';
import TwitterIcon from 'public/assets/social-media/twitter.svg';
import TelegramIcon from 'public/assets/social-media/telegram.svg';
// import YoutubeIcon from 'public/assets/social-media/youtube.svg';
// import InstagramIcon from 'public/assets/social-media/instagram.svg';
// import FaceBookIcon from 'public/assets/social-media/facebook.svg';
import imgLogo from 'public/assets/team-dao-logo.png';
import Image from './Image';

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
      <div />
      <SocialMediaContainer>
        <TelegramIcon />
        <TwitterIcon />
      </SocialMediaContainer>
    </ConnectContainer>

    <Divider />

    <div>
      <Image src={imgLogo} alt="logo" />
    </div>
  </FooterContainer>
);

export default Footer;
