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
  margin-top: 10px;
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
  margin-bottom: 20px;
`;

const Footer = () => (
  <FooterContainer>
    <Divider />
    <ConnectContainer>
      <Image src={imgLogo} alt="logo" />
      <SocialMediaContainer>
        <a href="https://t.me/TEAMDAO" target="_blank" rel="noreferrer">
          <TelegramIcon />
        </a>
        <a
          href="https://twitter.com/TEAMDAOcom"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon />
        </a>
      </SocialMediaContainer>
    </ConnectContainer>
  </FooterContainer>
);

export default Footer;
