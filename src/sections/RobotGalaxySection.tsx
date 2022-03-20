import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import bgGalaxy from 'assets/galaxy-night-view-2.png';
import imgRobot from 'assets/robot-no-reflect.png';
import imgFragment1 from 'assets/fragment1.png';
import imgFragment2 from 'assets/fragment2.png';
import Token4 from 'assets/token-4.png';
import Token5 from 'assets/token-5.png';
import Fragment from 'assets/fragment4.png';
import ScrollAnimation from 'react-animate-on-scroll';

const BgContainer = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 80%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(${bgGalaxy});
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

const RobotGalaxySection = () => (
  <BgContainer>
    <BeginSectionContainer>
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <Parallax easing="easeIn" translateY={[100, 0]}>
          <div style={{ position: 'relative' }}>
            <Parallax speed={12}>
              <img
                className="teamdao-pulse"
                src={imgFragment2}
                style={{ position: 'absolute', left: 50, top: -330 }}
                width={272}
                alt=""
              />
            </Parallax>
            <Parallax speed={15.5}>
              <img
                className="teamdao-pulse-delay"
                src={imgRobot}
                style={{ position: 'absolute', top: -150 }}
                width={300}
                alt=""
              />
            </Parallax>
            <Parallax speed={16}>
              <img
                className="teamdao-pulse"
                src={imgFragment1}
                style={{ position: 'absolute', top: -100 }}
                width={300}
                alt=""
              />
            </Parallax>
            <Parallax speed={3}>
              <img
                className="teamdao-pulse-delay"
                src={Fragment}
                style={{ position: 'absolute', top: -280, left: -380 }}
                alt=""
              />
            </Parallax>
            <Parallax speed={10}>
              <img
                className="teamdao-pulse-delay"
                src={Token4}
                style={{ position: 'absolute', top: -30, left: -520 }}
                alt=""
              />
            </Parallax>
            <Parallax speed={9}>
              <img
                className="teamdao-pulse-delay"
                src={Token5}
                style={{ position: 'absolute', top: 200, left: 500 }}
                alt=""
              />
            </Parallax>
            <div style={{ width: 300, height: 10, visibility: 'hidden' }} />
          </div>
        </Parallax>
      </ScrollAnimation>
    </BeginSectionContainer>
  </BgContainer>
);

export default RobotGalaxySection;
