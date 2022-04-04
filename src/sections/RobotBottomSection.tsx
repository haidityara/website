import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import { H3 } from 'components/Typo';
import bgBottom from 'public/assets/bottom-background.png';
import bgBottomLazy from 'public/assets/bottom-background-lazy.png';
import imgRobot from 'public/assets/robot-no-reflect.png';
import imgFragment1 from 'public/assets/bottom-fragment1.png';
import imgFragment2 from 'public/assets/bottom-fragment2.png';
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
  justify-content: center;
`;

const EmailContainer = styled.div`
  position: absolute;
  margin-top: 40%;
  margin-left: 20%;
`;

const RobotGalaxySection = () => {
  const bgImage = useProgressiveImage(bgBottom.src, bgBottomLazy.src);

  return (
    <BgContainer bgImage={bgImage}>
      <BeginSectionContainer>
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <Parallax easing="easeIn" translateY={[100, 0]}>
            <div style={{ position: 'relative' }}>
              <Parallax speed={10}>
                <div style={{ position: 'absolute', top: -180 }}>
                  <Image
                    className="teamdao-pulse"
                    src={imgFragment1}
                    width={450}
                    alt=""
                  />
                </div>
              </Parallax>
              <Parallax speed={10}>
                <div style={{ position: 'absolute', top: -200 }}>
                  <Image
                    className="teamdao-pulse"
                    src={imgRobot}
                    width={350}
                    alt=""
                  />
                </div>
              </Parallax>
              <Parallax speed={20}>
                <div style={{ position: 'absolute', top: 50, left: -200 }}>
                  <Image
                    className="teamdao-pulse"
                    src={imgFragment2}
                    width={200}
                    alt=""
                  />
                </div>
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
};
export default RobotGalaxySection;
