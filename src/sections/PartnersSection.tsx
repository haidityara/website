import styled from 'styled-components';
import { H2, H4, Paragraph } from 'components/Typo';
import imgBackground from 'public/assets/partners-background.png';
import imgAnimoca from 'public/assets/partners/partners-animoca.png';
import imgKrust from 'public/assets/partners/partners-krust.png';
import imgShima from 'public/assets/partners/partners-shima.png';
import imgAlgorand from 'public/assets/partners/partners-algorand.png';
import imgLibra from 'public/assets/partners/partners-libra.png';
import imgNexo from 'public/assets/partners/partners-nexo.png';
import imgGsr from 'public/assets/partners/partners-gsr.png';
import imgExcap from 'public/assets/partners/partners-excapital.png';
import imgBp from 'public/assets/partners/partners-bridgeport.png';
import imgOctava from 'public/assets/partners/partners-octava.png';
import imgReadWP from 'public/assets/whitepaper-container.png';
import Button from 'components/Button';
import Image from 'components/Image';

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
  flex-wrap: wrap;
  justify-content: space-around;
  > div {
    width: 20%;
  }
`;

const Item = styled.div`
  margin-bottom: 80px;
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
            <Image src={imgAnimoca} alt="partner" />
          </Item>
          <Item>
            <Image src={imgKrust} alt="partner" />
          </Item>
          <Item>
            <Image src={imgShima} alt="partner" />
          </Item>
          <Item>
            <Image src={imgAlgorand} alt="partner" />
          </Item>
          <Item>
            <Image src={imgLibra} alt="partner" />
          </Item>
          <Item>
            <Image src={imgNexo} alt="partner" />
          </Item>
          <Item>
            <Image src={imgGsr} alt="partner" />
          </Item>
          <Item>
            <Image src={imgExcap} alt="partner" />
          </Item>
          <Item>
            <Image src={imgBp} alt="partner" />
          </Item>
          <Item>
            <H4>Ap3 Capital</H4>
          </Item>
          <Item>
            <Image src={imgOctava} alt="partner" />
          </Item>
          <Item>
            <H4>NGC Ventures</H4>
          </Item>
          <Item>
            <H4>GSG</H4>
          </Item>
        </Columns>

        <div style={{ position: 'relative' }}>
          <div style={{ marginBottom: 80, width: '100%', minWidth: 700 }}>
            <Image src={imgReadWP} alt="partner" />
          </div>

          <div
            style={{
              position: 'absolute',
              width: 'calc(50% - 8%)',
              textAlign: 'left',
              padding: '2%',
              top: '32%',
              left: '4%',
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
        </div>
      </Container>
    </BgContainer>
  </div>
);

export default PartnersSection;
