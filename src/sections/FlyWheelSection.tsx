import styled from 'styled-components';
import { H2, H4, Paragraph } from 'components/Typo';
import imgSteamFlyWheel from 'public/assets/fly-wheel.png';
import imgSteamFlyWheelToken from 'public/assets/fly-wheel-token.png';
import Button from 'components/Button';
import imgCloud from 'public/assets/cloud.png';
import bgLazy from 'public/assets/background-galaxy-lazy.png';
import { Parallax } from 'react-scroll-parallax';
import { useEffect, useState, useRef } from 'react';
import Image from 'components/Image';
import useProgressiveImage from 'src/hooks/useProgressiveImage';

const Container = styled.div<{ bgImage: string }>`
  margin-top: 50px;
  background: url(${({ bgImage }) => bgImage});
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
  gap: 30px;
  marign: auto;
  display: flex;
  h2 {
    max-width: 350px;
  }
  > div {
    width: 100%;
    margin-top: 81px;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
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

  > div {
    width: unset;
    flex: 1;

    @media (max-width: 768px) {
      padding-left: 2px;
      padding-right: 2px;
    }
  }
`;

const infos = [
  {
    title: 'PLAYERS',
    content: [
      '% of player earmings governed by DAO, purchase $TEAM',
      'Players are paid in $TEAM with the option to stake $TEAM for higher yields'
    ]
  },
  {
    title: 'OWNERS',
    content: [
      'Owners pay wrapped team markups & marketplace transaction fees with $TEAM'
    ]
  },
  {
    title: 'ASSETS',
    content: [
      'DAO retains ownership % of all wTEAMs, creating exposure to asset appreciation w/out depreciation risk.',
      '$TEAM holders have voting rights on DAO assets'
    ]
  }
];

const FlyWheelSection = () => {
  const bgImage = useProgressiveImage(imgCloud.src, bgLazy.src);
  const [selected, setSelected] = useState(0);
  const intervalRef = useRef<any>(null);

  const data = infos[selected];

  useEffect(() => {
    const interval = setInterval(() => setSelected((v) => (v + 1) % 3), 5000);
    intervalRef.current = interval;
    return () => {
      clearInterval(interval);
      intervalRef.current = null;
    };
  }, []);

  const handleSelect = (index: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setSelected(index);
  };

  return (
    <Container id="token" bgImage={bgImage}>
      <SubContainer>
        <div style={{ maxWidth: 350, height: 400 }}>
          <H2>$TEAM FLYWHEEL</H2>
          <ButtonContainer>
            <Button onClick={() => handleSelect(0)} isActive={selected === 0}>
              PLAYERS
            </Button>
            <Button onClick={() => handleSelect(1)} isActive={selected === 1}>
              OWNERS
            </Button>
            <Button onClick={() => handleSelect(2)} isActive={selected === 2}>
              ASSETS
            </Button>
          </ButtonContainer>
          <ParagraphContainer style={{ marginTop: 50 }}>
            <H4>{data.title}</H4>
            <Paragraph>
              <ul>
                {data.content.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </Paragraph>
          </ParagraphContainer>
        </div>

        <div style={{ position: 'relative' }}>
          <Parallax translateY={[-5, 5]}>
            <Parallax
              className="teamdao-pulse"
              translateY={[-5, 5]}
              style={{
                position: 'absolute',
                bottom: '28%',
                right: '30%',
                zIndex: 100,
                width: '20%'
              }}
            >
              <Image src={imgSteamFlyWheelToken} alt="" objectFit="contain" />
            </Parallax>
            <Image src={imgSteamFlyWheel} alt="" objectFit="contain" />
          </Parallax>
        </div>
      </SubContainer>
      <div style={{ width: '100%', height: 100 }} />
    </Container>
  );
};

export default FlyWheelSection;
