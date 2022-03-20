import styled from 'styled-components';
import { H2, Paragraph } from 'components/Typo';

const Container = styled.div`
  max-width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubContainer = styled.div`
  display: flex;
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
      <H2>Metaverse and game exposure</H2>
      <div style={{ width: 602 }}>
        <Paragraph>
          TEAM™ carefully selects which metaverse and blockchain P2E games to
          participate in through a rigorous in-house curation methodology.
        </Paragraph>

        <Paragraph style={{ marginTop: 30 }}>
          Expand into other games with promising P2E economics as our player
          base grows and supporting infrastructure is present.
        </Paragraph>
      </div>
    </SubContainer>
  </Container>
);

export default MetaverseSection;
