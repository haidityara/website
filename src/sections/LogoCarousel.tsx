import styled from 'styled-components';

const cache: any = {};

function importAll(r: any) {
  r.keys().forEach((key: string) => {
    cache[key] = r(key);
  });
}
// Note from the docs -> Warning: The arguments passed to require.context must be literals!
/* @ts-ignore */
importAll(require.context('assets/logo/', false, /\.(png|jpe?g|svg)$/));

const images = Object.entries(cache).map((module) => module[1]);

const ImageContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const Container = styled.div`
  display: flex;
  width: 100vw;
  overflow: hidden;
  margin-top: 135px;
`;

const LogoCarousel = () => (
  <Container>
    <ImageContainer>
      {images.map((e) => (
        <div style={{ width: 85, height: 85 }}>
          <img
            src={e as any}
            alt="logo"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      ))}
    </ImageContainer>
  </Container>
);

export default LogoCarousel;
