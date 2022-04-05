import styled from 'styled-components';
import Button from 'components/Button';
import { H2, Paragraph } from 'components/Typo';
import { Parallax } from 'react-scroll-parallax';
import bgGalaxy from 'public/assets/galaxy-night-view.png';
import bgLazy from 'public/assets/background-galaxy-lazy.png';
import imgRobot from 'public/assets/robot-no-reflect.png';
import imgFragment1 from 'public/assets/fragment1.png';
import imgFragment2 from 'public/assets/fragment2.png';
import imgFragment3 from 'public/assets/fragment3.png';
import ScrollAnimation from 'react-animate-on-scroll';
import Image from 'components/Image';
import useProgressiveImage from 'src/hooks/useProgressiveImage';

const BgContainer = styled.div<{ bgImage: string }>`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 80%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(${({ bgImage }) => bgImage});
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
  justify-content: space-between;
  flex-wrap: wrap;

  > div:first-child {
    display: flex;
    flex-direction: column;
    width: 401px;
    @media (max-width: 768px) {
      align-items: center;
    }
  }
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const AboutSection = () => {
  const bgImage = useProgressiveImage(bgGalaxy.src, bgLazy.src);
  return (
    <BgContainer bgImage={bgImage}>
      <BeginSectionContainer id="about-us">
        <div>
          <H2>About TEAM</H2>
          <Paragraph style={{ marginTop: 24, width: 260 }}>
            TEAM™ has a proprietary scalable solution for guild management
          </Paragraph>

          <Button type="down" style={{ marginTop: 50 }}>Explore More</Button>
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
              <div style={{ width: 300, height: 500, visibility: 'hidden' }} />
            </div>
          </Parallax>
        </ScrollAnimation>
      </BeginSectionContainer>
    </BgContainer>
  );
};

export default AboutSection;
