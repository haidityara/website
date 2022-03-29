import styled from 'styled-components';
import { H2, Paragraph } from 'components/Typo';
import imgSpaceship from 'public/assets/roadmap-spaceship.png';
import imgRobot from 'public/assets/roadmap-robot.png';
import PlaybackSvg from 'public/assets/roadmap-playback.svg';
import imgLogo1 from 'public/assets/roadmap-logo1.png';
import imgLogo2 from 'public/assets/roadmap-logo2.png';
import imgLogo3 from 'public/assets/roadmap-logo3.png';
import { Parallax } from 'react-scroll-parallax';
import Image from 'components/Image';

const BgContainer = styled.div`
  background: url(${imgSpaceship.src});
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
          <Image className="teamdao-shake" src={imgRobot} alt="" />
        </Parallax>
      </ImgContainer>
      <RoadmapSectionContainer>
        <div>
          <H2 style={{ display: 'inline-block' }}>Roadmap</H2>
        </div>
        <PlaybackSvg />
      </RoadmapSectionContainer>
    </BgContainer>

    <Container>
      <Columns>
        <Item>
          <Image src={imgLogo1} alt="roadmap" />
          <Paragraph
            style={{
              width: 250,
              marginRight: 'auto',
              marginLeft: 'auto',
              marginTop: 80
            }}
          >
            TEAM ANALYTICS, OWNERS&apos; DASHBOARD, ECOSYSTEM EXPANSION
          </Paragraph>
        </Item>
        <Item>
          <Image src={imgLogo2} alt="roadmap" />
          <Paragraph
            style={{
              width: 250,
              marginRight: 'auto',
              marginLeft: 'auto',
              marginTop: 80
            }}
          >
            WTEAM ROLL OUT, WTEAM MARKETPLACE, TEAM SCHOLAR WALLETS
          </Paragraph>
        </Item>
        <Item>
          <Image src={imgLogo3} alt="roadmaps" />
          <Paragraph
            style={{
              width: 250,
              marginRight: 'auto',
              marginLeft: 'auto',
              marginTop: 80
            }}
          >
            WTEAM STAKING VAULTS, TEAM DAO, EXPANSION
          </Paragraph>
        </Item>
      </Columns>
    </Container>
  </div>
);

export default RoadmapSection;