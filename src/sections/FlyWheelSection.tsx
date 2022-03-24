import styled from 'styled-components';
import { H2, H4, Paragraph } from 'components/Typo';
import imgSteamFlyWheel from 'assets/fly-wheel.png';

// const EarthBG = styled.div`
//   background: url(${imgEarth});
//   background-size: cover;
//   background-position: bottom;
//   background-repeat: no-repeat;
//   width: 100%;
// `;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SubContainer = styled.div`
  width: 65%;
  marign: auto;
  display: flex;
  h2 {
    width: 350px;
  }
  > div {
    width: 100%;
    margin-top: 81px;
  }
`;

const FlyWheelSection = () => (
  <Container>
    <SubContainer>
      <div>
        <H2>$TEAM FLYWHEEL</H2>
        <div>
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
        </div>
      </div>
      <div>
        <img width="100%" src={imgSteamFlyWheel} alt="" />
      </div>
    </SubContainer>
  </Container>
);

export default FlyWheelSection;
