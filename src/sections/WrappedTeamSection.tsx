import styled from 'styled-components';
import { H3, Paragraph } from 'components/Typo';
import imgValueChain from 'public/assets/value-chain.png';
import imgEarn from 'public/assets/wrapped-team-earn.png';
import imgTrade from 'public/assets/wrapped-team-trade.png';
import imgDevelop from 'public/assets/wrapped-team-develop.png';
import imgEarth from 'public/assets/earth.png';
import bgLazy from 'public/assets/background-galaxy-lazy.png';
import ScrollAnimation from 'react-animate-on-scroll';
import Image from 'components/Image';
import useProgressiveImage from 'src/hooks/useProgressiveImage';

const EarthBG = styled.div<{ bgImage: string }>`
  background: url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SubContainer = styled.div`
  width: 80%;
  marign: auto;
  h3 {
    max-width: 480px;
  }
  > div {
    width: 100%;
    margin-top: 81px;
    text-align: center;
  }
`;

const ChildContainer = styled.div`
  max-width: 80%;
  margin: auto;
  div:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

const ChildSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // flex-wrap: wrap;
  gap: 150px;

  @media (max-width: 768px) {
    gap: 50px;
  }

  img {
    width: 550px;
  }
  h3 {
    display: inline-block;
  }
  > div {
    max-width: 361px;
    p {
      margin-top: 28px;
    }
  }
`;

const BigGlowText = styled.h2`
  width: 80%;
  margin: auto;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 100px;
  line-height: 105px;
  text-align: center;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: #00ff19;
  text-shadow: 0px 0px 20px rgba(0, 255, 25, 0.9);
  margin-top: 156px;

  @media (max-width: 768px) {
    font-size: 3rem;
    line-height: 0.9;
  }
`;

const WrappedTeamSection = () => {
  const bgImage = useProgressiveImage(imgEarth.src, bgLazy.src);
  return (
    <Container>
      <SubContainer>
        <H3 style={{ maxWidth: '60%', margin: 'auto' }}>
          WRAPPED TEAM (wTEAM) VALUE CHAIN
        </H3>
        <div>
          <Image objectFit="contain" src={imgValueChain} alt="" />
        </div>
      </SubContainer>

      <BigGlowText>How can I interact with these eSports teams?</BigGlowText>

      <EarthBG bgImage={bgImage}>
        <ChildContainer>
          <ChildSection>
            <div>
              <ScrollAnimation animateOnce animateIn="fadeInLeft">
                <H3>BET</H3>
                <Paragraph>
                  Pick your chosen champion or side and choose your stakes!
                </Paragraph>
              </ScrollAnimation>
            </div>
            <ScrollAnimation animateOnce animateIn="fadeInRight">
              <Image
                src={imgEarn}
                objectFit="contain"
                alt="earn"
                className="teamdao-pulse"
              />
            </ScrollAnimation>
          </ChildSection>
          <ChildSection>
            <div>
              <ScrollAnimation animateOnce animateIn="fadeInLeft">
                <H3>Trade</H3>
                <Paragraph>
                  Buy & Sell the NFTs of different eSports players and teams
                </Paragraph>
              </ScrollAnimation>
            </div>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInRight"
              style={{ maxWidth: 'unset' }}
            >
              <Image
                src={imgTrade}
                objectFit="contain"
                alt="trade"
                className="teamdao-pulse"
              />
            </ScrollAnimation>
          </ChildSection>
          <ChildSection>
            <div>
              <ScrollAnimation animateOnce animateIn="fadeInLeft">
                <H3>PARTICIPATE</H3>
                <Paragraph>
                  In the upside when these eSports players and teams win world
                  tournaments
                </Paragraph>
              </ScrollAnimation>
            </div>
            <ScrollAnimation animateOnce animateIn="fadeInRight">
              <Image
                src={imgDevelop}
                objectFit="contain"
                alt="develop"
                className="teamdao-pulse"
              />
            </ScrollAnimation>
          </ChildSection>
        </ChildContainer>
      </EarthBG>
    </Container>
  );
};

export default WrappedTeamSection;
