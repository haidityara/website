import styled from 'styled-components';
import { H2, Paragraph } from 'components/Typo';
import ScrollAnimation from 'react-animate-on-scroll';

const Container = styled.div`
  max-width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 700px;
`;

const SubContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  h2 {
    width: 359px;
  }
  p {
    font-size: 25px;
    line-height: 29px;
  }
`;

const MetaverseSection = () => (
  <Container>
    <SubContainer>
      <ScrollAnimation animateOnce animateIn="fadeInLeft">
        <H2>Metaverse and game exposure</H2>
      </ScrollAnimation>
      <ScrollAnimation animateOnce animateIn="fadeInRight">
        <div style={{ maxWidth: 602 }}>
          <Paragraph>
            TEAM DAO rigorously curates our list of games (web2 & web3) to
            ensure quality and sustainability.
          </Paragraph>

          <Paragraph style={{ marginTop: 30 }}>
            Expand into other games with promising P2E economics as our player
            base grows and supporting infrastructure is present.
          </Paragraph>
        </div>
      </ScrollAnimation>
    </SubContainer>
  </Container>
);

export default MetaverseSection;
