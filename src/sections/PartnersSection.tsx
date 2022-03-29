import styled from 'styled-components';
import { H2, H4, Paragraph } from 'components/Typo';
import imgBackground from 'assets/partners-background.png';
import imgAnimoca from 'assets/partners-animoca.png';
import imgKrust from 'assets/partners-krust.png';
import imgShima from 'assets/partners-shima.png';
import imgAlgorand from 'assets/partners-algorand.png';
import imgLibra from 'assets/partners-libra.png';
import imgNexo from 'assets/partners-nexo.png';
import imgGsr from 'assets/partners-gsr.png';
import imgExcap from 'assets/partners-excapital.png';
import imgBp from 'assets/partners-bridgeport.png';
import imgOctava from 'assets/partners-octava.png';
import imgReadWP from 'assets/partners-readWhitepaper.svg';
import Button from 'components/Button';

const BgContainer = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 80%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(${imgBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: topg;
  position: relative;
`;

const Container = styled.div`
  max-width: 80%;
  margin: auto;
  text-align: center;
  min-height: 800px;
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
`;

const Item = styled.div`
  width: 100%;
`;

const PartnersSection = () => (
  <div>
    <BgContainer>
      <Container>
        <div style={{ marginBottom: 150 }}>
          <H2 style={{ display: 'inline-block' }}>Partners</H2>
        </div>
        <Columns>
          <Item>
            <img src={imgAnimoca} alt="partner" style={{ marginBottom: 80 }} />
          </Item>
          <Item>
            <img src={imgKrust} alt="partner" style={{ marginBottom: 80 }} />
          </Item>
          <Item>
            <img src={imgShima} alt="partner" style={{ marginBottom: 80 }} />
          </Item>
          <Item>
            <img src={imgShima} alt="partner" style={{ marginBottom: 80 }} />
          </Item>
        </Columns>
        <Columns>
          <Item>
            <img src={imgAlgorand} alt="partner" style={{ marginBottom: 80 }} />
          </Item>
          <Item>
            <img src={imgLibra} alt="partner" style={{ marginBottom: 80 }} />
          </Item>
          <Item>
            <img src={imgNexo} alt="partner" style={{ marginBottom: 80 }} />
          </Item>
          <Item>
            <img src={imgGsr} alt="partner" style={{ marginBottom: 80 }} />
          </Item>
        </Columns>
        <Columns>
          <Item>
            <img src={imgExcap} alt="partner" style={{ marginBottom: 80 }} />
          </Item>
          <Item>
            <img src={imgBp} alt="partner" style={{ marginBottom: 80 }} />
          </Item>
          <Item style={{ marginTop: 20 }}>
            <H4>Ap3 Capital</H4>
          </Item>
          <Item>
            <img src={imgOctava} alt="partner" style={{ marginBottom: 80 }} />
          </Item>
        </Columns>
        <Columns>
          <Item style={{ marginTop: 20 }}>
            <H4>NGC Ventures</H4>
          </Item>
          <Item style={{ marginTop: 20 }}>
            <H4>GSG</H4>
          </Item>
        </Columns>

        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              width: 'calc(50% - 4%)',
              textAlign: 'left',
              padding: '2%',
              top: '32%',
              minWidth: 400
            }}
          >
            <H4>Read the Whitepaper</H4>
            <Paragraph style={{ marginTop: 14 }}>
              Direct ownership: TEAM will directly own, develop and generate
              yield on high quality NFT and metaverse assets. Indirect
              ownership: TEAM retains 20% ownership of all assets purchased by
              TEAM owners.
            </Paragraph>

            <Button style={{ marginTop: 30 }}>Coming Soon</Button>
          </div>
          <img
            src={imgReadWP}
            alt="partner"
            style={{ marginBottom: 80, width: '100%', minWidth: 700 }}
          />
        </div>
      </Container>
    </BgContainer>
  </div>
);

export default PartnersSection;
