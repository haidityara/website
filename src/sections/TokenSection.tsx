import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import { H2, H4, Paragraph } from 'components/Typo';
import imgRocket from 'assets/rocket.png';
import imgToken1 from 'assets/token-1.png';
import imgToken2 from 'assets/token-2.png';
import imgToken3 from 'assets/token-3.png';
import Particles from 'react-tsparticles';
import particleConfig from 'assets/particleBottomRight.json';
import BlurredCircle from 'components/BlurredCircle';

const Container = styled.div`
  max-width: 80%;
  margin: auto;
  min-height: 800px;
  padding-top: 410px;
  position: relative;

  #tsparticles {
    canvas {
      position: relative;
    }
  }
`;

const Columns = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 85px;
`;

const TokenSection = () => (
  <Container>
    <Parallax
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
      <img src={imgRocket} alt="rocket" className="teamdao-shake" />
    </Parallax>
    <H2 style={{ width: 562 }}>Token flywheel</H2>

    <Columns>
      <div>
        <img src={imgToken1} alt="token" style={{ marginBottom: 34 }} />
        <H4>Tech-enabled guild scalability</H4>
        <Paragraph>
          <ul>
            <li>
              AI to automate the recruitment processes, filtering for commitment
              and skill
            </li>
            <li>
              Background analytics and data infrastructure to automate guild
              management
            </li>
          </ul>
        </Paragraph>
      </div>
      <div>
        <img src={imgToken2} alt="token" style={{ marginBottom: 34 }} />
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
      </div>
      <div>
        <img src={imgToken3} alt="token" style={{ marginBottom: 34 }} />
        <H4>Fantasy eSports league for aspiring TEAM Owners</H4>
        <Paragraph>
          <ul>
            <li>
              Owners are able to purchase and trade revenue-generating eSports
              players
            </li>
            <li>
              Players and owners are empowered through flexible switching
              between games & metaverses
            </li>
          </ul>
        </Paragraph>
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
