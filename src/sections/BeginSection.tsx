import styled from 'styled-components';
import Header from 'components/Header';
import Bg1 from 'assets/bg1.png';
import Robot1 from 'assets/robot1.png';
import CircleDown from 'assets/circle-down.png';

const BeginSectionContainer = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 21.58%,
      rgba(0, 0, 0, 0) 58.51%,
      #000000 90.91%
    ),
    url(${Bg1});
  min-height: 100vh;
  background-position: center;
  background-color: black;
  background-size: cover;
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
  margin-top: 156px;
`;

const BeginSection = () => (
  <BeginSectionContainer>
    <Header />
    <img src={Robot1} alt="" />
    <div style={{ width: '80%', margin: 'auto' }}>
      <BigGlowText>$TEAM up with the metaverse’s first Guild 3.0</BigGlowText>
    </div>

    <img src={CircleDown} alt="" style={{ display: 'block', margin: 'auto' }} />
  </BeginSectionContainer>
);

export default BeginSection;
