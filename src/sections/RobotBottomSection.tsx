import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import { H3 } from 'components/Typo';
import bgBottom from 'assets/bottom-background.png';
import imgRobot from 'assets/robot-no-reflect.png';
import imgFragment1 from 'assets/bottom-fragment1.png';
import imgFragment2 from 'assets/bottom-fragment2.png';
import ScrollAnimation from 'react-animate-on-scroll';

const BgContainer = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 80%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(${bgBottom});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;

const BeginSectionContainer = styled.div`
  max-width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  min-height: 800px;
  justify-content: center;
`;

const EmailContainer = styled.div`
  position: absolute;
  margin-top: 40%;
  margin-left: 20%;
`;

const RobotGalaxySection = () => (
  <BgContainer>
    <BeginSectionContainer>
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <Parallax easing="easeIn" translateY={[100, 0]}>
          <div style={{ position: 'relative' }}>
            <Parallax speed={10}>
              <img
                className="teamdao-pulse"
                src={imgFragment1}
                style={{ position: 'absolute', top: -180 }}
                width={450}
                alt=""
              />
            </Parallax>
            <Parallax speed={10}>
              <img
                className="teamdao-pulse"
                src={imgRobot}
                style={{ position: 'absolute', top: -280 }}
                width={350}
                alt=""
              />
            </Parallax>
            <Parallax speed={20}>
              <img
                className="teamdao-pulse"
                src={imgFragment2}
                style={{ position: 'absolute', top: 50, left: -80 }}
                width={200}
                alt=""
              />
            </Parallax>
            <div style={{ width: 300, height: 10, visibility: 'hidden' }} />
          </div>
        </Parallax>
      </ScrollAnimation>
      <EmailContainer>
        <H3>Receive</H3>
        <H3>transmission</H3>
      </EmailContainer>
    </BeginSectionContainer>
  </BgContainer>
);

export default RobotGalaxySection;
