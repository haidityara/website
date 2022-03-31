import styled from 'styled-components';
import Header from 'components/Header';
import Bg1 from 'public/assets/bg1.png';
import Robot1 from 'public/assets/robot1.png';
import CircleDown from 'public/assets/circle-down.png';
import Image from 'components/Image';
import ScrollAnimation from 'react-animate-on-scroll';

const BeginSectionContainer = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 21.58%,
      rgba(0, 0, 0, 0) 58.51%,
      #000000 90.91%
    ),
    url(${Bg1.src});
  min-height: 100vh;
  background-position: center;
  background-color: black;
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
`;

const BigGlowText = styled.h2`
  max-width: 950px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 100px;
  line-height: 105px;
  text-align: left;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: #00ff19;
  text-shadow: 0px 0px 20px rgba(0, 255, 25, 0.9);
  margin-top: 0;
  word-break: break-word;

  @media (max-width: 768px) {
    font-size: 3rem;
    line-height: 0.9;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const BeginSection = () => (
  <BeginSectionContainer>
    <Header />
    <ImgContainer style={{ marginTop: 100 }}>
      <ScrollAnimation animateIn="flash" animateOnce>
        <Image className="teamdao-pulse" src={Robot1} alt="" />
      </ScrollAnimation>
    </ImgContainer>
    <div style={{ width: '80%', margin: 'auto' }}>
      <BigGlowText>$TEAM up with the metaverse’s first Guild 3.0</BigGlowText>
    </div>

    <ImgContainer style={{ height: 100 }}>
      <Image
        className="teamdao-pulse-delay"
        objectFit="contain"
        src={CircleDown}
        alt=""
      />
    </ImgContainer>
  </BeginSectionContainer>
);

export default BeginSection;
