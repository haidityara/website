import styled from 'styled-components';
import Button from 'components/Button';
import { H2, Paragraph } from 'components/Typo';
import { Parallax } from 'react-scroll-parallax';
import bgGalaxy from 'assets/galaxy-night-view.png';
import imgRobot from 'assets/robot-no-reflect.png';
import imgFragment1 from 'assets/fragment1.png';
import imgFragment2 from 'assets/fragment2.png';
import imgFragment3 from 'assets/fragment3.png';
import { ReactComponent as HexagonSvg } from 'assets/hexagon.svg';
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
  min-height: 578px;
  justify-content: space-between;
`;

const AboutSection = () => (
  <BgContainer>
    <BeginSectionContainer>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 401
        }}
      >
        <H2>About TEAM</H2>
        <HexagonSvg
          style={{
            position: 'absolute',
            top: 750,
            left: -290,
            width: '90%',
            height: '90%',
            pointerEvents: 'none'
          }}
        />
        <Paragraph style={{ marginTop: 24, width: 260 }}>
          TEAM™ has a proprietary scalable solution for guild management
        </Paragraph>

        <Button style={{ marginTop: 50 }}>Explore</Button>
      </div>

      <ScrollAnimation animateOnce animateIn="fadeInUp">
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
            <Parallax speed={7}>
              <img
                className="teamdao-pulse-delay"
                src={imgFragment3}
                style={{ position: 'absolute', top: 100, left: -200 }}
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

export default AboutSection;
