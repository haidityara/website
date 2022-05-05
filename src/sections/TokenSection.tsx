import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import { H2, H4, Paragraph } from 'components/Typo';
import imgRocket from 'public/assets/rocket.png';
import imgToken1 from 'public/assets/token-1.png';
import imgToken2 from 'public/assets/token-2.png';
import imgToken3 from 'public/assets/token-3.png';
import Particles from 'react-tsparticles';
import particleConfig from 'public/assets/particleBottomRight.json';
import BlurredCircle from 'components/BlurredCircle';
import Image from 'components/Image';
import ScrollAnimation from 'react-animate-on-scroll';
import { isMobile } from 'react-device-detect';

const Container = styled.div`
  max-width: 80%;
  margin: auto;
  min-height: 800px;
  padding-top: 410px;
  position: relative;

  h4 {
    margin-top: 34px;
    display: inline-block;
  }

  #tsparticles {
    canvas {
      position: relative;
    }
  }

  @media (max-width: 768px) {
    padding-top: 300px;

    h4 {
      display: block;
    }
  }
`;

const Columns = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 85px;
  flex-wrap: wrap;

  > div {
    flex: 1;
    min-width: 300px;
  }
`;

const TokenSection = () => (
  <Container>
    <Parallax
      disabled={isMobile}
      speed={1}
      translateY={[300, -100]}
      translateX={[300, -100]}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: 'none'
      }}
    >
      <Image src={imgRocket} alt="rocket" className="teamdao-shake" />
    </Parallax>
    <H2 style={{ maxWidth: 680 }}>TEAM Value Creation</H2>

    <Columns>
      <div>
        <ScrollAnimation animateOnce animateIn="fadeInUp">
          <Image src={imgToken1} alt="token" />
          <H4>Tech-enabled guild scalability</H4>
          <Paragraph>
            <ul>
              <li>
                AI to automate the recruitment processes, filtering for
                commitment and skill
              </li>
              <li>
                Background analytics and data infrastructure to automate guild
                management
              </li>
            </ul>
          </Paragraph>
        </ScrollAnimation>
      </div>
      <div>
        <ScrollAnimation animateOnce animateIn="fadeInUp">
          <Image src={imgToken2} alt="token" />
          <H4>Curated quality for players and assets</H4>
          <Paragraph>
            <ul>
              <li>
                Gamified training prepares players and helps them hit the ground
                running
              </li>
              <li>
                Ground-up community asset development initiatives drive value
                organically
              </li>
            </ul>
          </Paragraph>
        </ScrollAnimation>
      </div>
      <div>
        <ScrollAnimation animateOnce animateIn="fadeInUp">
          <Image src={imgToken3} alt="token" />
          <H4>Fantasy eSports league for Owners</H4>
          <Paragraph>
            <ul>
              <li>
                Owners are able to purchase and trade revenue-generating eSports
                players
              </li>
              <li>
                Players and owners are empowered through flexible switching
                between games
              </li>
            </ul>
          </Paragraph>
        </ScrollAnimation>
      </div>
    </Columns>
    <BlurredCircle left={-600} top={-169} />
    <Particles
      options={particleConfig as any}
      style={{ position: 'absolute', top: 0, left: 0 }}
    />
  </Container>
);

export default TokenSection;
