import styled from 'styled-components';
import Header from 'components/Header';
import Bg1 from 'assets/bg1.png';
import Robot1 from 'assets/robot1.png';

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

const BeginSection = () => (
  <BeginSectionContainer>
    <Header />
    <img src={Robot1} alt="" />
  </BeginSectionContainer>
);

export default BeginSection;
