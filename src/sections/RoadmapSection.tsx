import styled from 'styled-components';
import { H2, Paragraph } from 'components/Typo';
import imgSpaceship from 'assets/roadmap-spaceship.png';
import imgRobot from 'assets/roadmap-robot.png';
import imgPlayback from 'assets/roadmap-playback.svg';
import imgLogo1 from 'assets/roadmap-logo1.png';
import imgLogo2 from 'assets/roadmap-logo2.png';
import imgLogo3 from 'assets/roadmap-logo3.png';
import { Parallax } from 'react-scroll-parallax';

const BgContainer = styled.div`
  background: url(${imgSpaceship});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  position: relative;
`;

const ImgContainer = styled.div`
  min-height: 100vh;
  margin-left: 10%;
`;

const Container = styled.div`
  max-width: 80%;
  margin: auto;
  text-align: center;
  min-height: 800px;
  position: relative;
`;

const Columns = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 85px;
  flex-wrap: wrap;
`;

const Item = styled.div`
  margin-bottom: 90px;
`;

const RoadmapSectionContainer = styled.div`
  width: 80%;
  margin-left: 10%;
`;

const RoadmapSection = () => (
  <div>
    <BgContainer>
      <ImgContainer>
        <Parallax
          translateX={[0, 500]}
          style={{ position: 'absolute', bottom: '20%' }}
        >
          <img className="teamdao-shake" src={imgRobot} alt="" />
        </Parallax>
      </ImgContainer>
      <RoadmapSectionContainer>
        <div>
          <H2 style={{ display: 'inline-block' }}>Roadmap</H2>
        </div>
        <img src={imgPlayback} alt="" />
      </RoadmapSectionContainer>
    </BgContainer>

    <Container>
      <Columns>
        <Item>
          <img src={imgLogo1} alt="roadmap" style={{ marginBottom: 80 }} />
          <Paragraph
            style={{ width: 250, marginRight: 'auto', marginLeft: 'auto' }}
          >
            TEAM ANALYTICS, OWNERS&apos; DASHBOARD, ECOSYSTEM EXPANSION
          </Paragraph>
        </Item>
        <Item>
          <img src={imgLogo2} alt="roadmap" style={{ marginBottom: 80 }} />
          <Paragraph
            style={{ width: 250, marginRight: 'auto', marginLeft: 'auto' }}
          >
            WTEAM ROLL OUT, WTEAM MARKETPLACE, TEAM SCHOLAR WALLETS
          </Paragraph>
        </Item>
        <Item>
          <img src={imgLogo3} alt="roadmaps" style={{ marginBottom: 80 }} />
          <Paragraph
            style={{ width: 250, marginRight: 'auto', marginLeft: 'auto' }}
          >
            WTEAM STAKING VAULTS, TEAM DAO, EXPANSION
          </Paragraph>
        </Item>
      </Columns>
    </Container>
  </div>
);

export default RoadmapSection;
