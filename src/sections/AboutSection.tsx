import styled from 'styled-components';
import Button from 'components/Button';
import { H2, Paragraph } from 'components/Typo';
import { Parallax } from 'react-scroll-parallax';
import bgGalaxy from 'public/assets/galaxy-night-view.png';
import imgRobot from 'public/assets/robot-no-reflect.png';
import imgFragment1 from 'public/assets/fragment1.png';
import imgFragment2 from 'public/assets/fragment2.png';
import imgFragment3 from 'public/assets/fragment3.png';
import ScrollAnimation from 'react-animate-on-scroll';
import Image from 'components/Image';

const BgContainer = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 80%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(${bgGalaxy.src});
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
    <BeginSectionContainer id="about-us">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 401
        }}
      >
        <H2>About TEAM</H2>
        <Paragraph style={{ marginTop: 24, width: 260 }}>
          TEAM™ has a proprietary scalable solution for guild management
        </Paragraph>

        <Button style={{ marginTop: 50 }}>Explore</Button>
      </div>

      <ScrollAnimation animateOnce animateIn="fadeInUp">
        <Parallax easing="easeIn" translateY={[100, 0]}>
          <div style={{ position: 'relative' }}>
            <Parallax speed={12}>
              <div
                className="teamdao-pulse"
                style={{ position: 'absolute', left: 50, top: -330 }}
              >
                <Image src={imgFragment2} width={272} alt="" />
              </div>
            </Parallax>
            <Parallax speed={15.5}>
              <div
                className="teamdao-pulse-delay"
                style={{ position: 'absolute', top: -150 }}
              >
                <Image src={imgRobot} width={300} alt="" />
              </div>
            </Parallax>
            <Parallax speed={16}>
              <div
                className="teamdao-pulse"
                style={{ position: 'absolute', top: -100 }}
              >
                <Image src={imgFragment1} width={300} alt="" />
              </div>
            </Parallax>
            <Parallax speed={7}>
              <div
                className="teamdao-pulse-delay"
                style={{ position: 'absolute', top: 100, left: -200 }}
              >
                <Image src={imgFragment3} alt="" />
              </div>
            </Parallax>
            <div style={{ width: 300, height: 10, visibility: 'hidden' }} />
          </div>
        </Parallax>
      </ScrollAnimation>
    </BeginSectionContainer>
  </BgContainer>
);

export default AboutSection;