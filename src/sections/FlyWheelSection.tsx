import styled from 'styled-components';
import { H2, H4, Paragraph } from 'components/Typo';
import imgSteamFlyWheel from 'assets/fly-wheel.png';
import Button from 'components/Button';
import imgCloud from 'assets/cloud.png';
import { Parallax } from 'react-scroll-parallax';
import { useEffect, useState } from 'react';

const Container = styled.div`
  margin-top: 50px;
  background: url(${imgCloud});
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SubContainer = styled.div`
  width: 80%;
  marign: auto;
  display: flex;
  h2 {
    max-width: 350px;
  }
  > div {
    width: 100%;
    margin-top: 81px;
  }
`;

const ParagraphContainer = styled.div`
  max-width: 255px;
  h4 {
    display: inline-block;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 8px;
  max-width: 350px;
  svg {
    display: none;
  }
`;

const FlyWheelSection = () => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSelected((v) => (v + 1) % 3), 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Container>
      <SubContainer>
        <div style={{ width: 350 }}>
          <Parallax translateY={[10, -10]}>
            <H2>$TEAM FLYWHEEL</H2>
            <ButtonContainer>
              <Button isActive={selected === 0}>PLAYER</Button>
              <Button isActive={selected === 1}>ASSETS</Button>
              <Button isActive={selected === 2}>OWNER</Button>
            </ButtonContainer>
            <ParagraphContainer style={{ marginTop: 50 }}>
              <H4>PLAYERS</H4>
              <Paragraph>
                <ul>
                  <li>% of player earmings governed by DAO, purchase $TEAM</li>
                  <li>
                    Players are paid in $TEAM with the option to stake $TEAM for
                    higher yields
                  </li>
                </ul>
              </Paragraph>
            </ParagraphContainer>
          </Parallax>
        </div>

        <div>
          <Parallax translateY={[-5, 5]}>
            <img width="95%" src={imgSteamFlyWheel} alt="" />
          </Parallax>
        </div>
      </SubContainer>
    </Container>
  );
};

export default FlyWheelSection;
