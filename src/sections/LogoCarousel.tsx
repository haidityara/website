/* eslint-disable react/no-array-index-key */
import Image from 'components/Image';
import styled from 'styled-components';
import Slider from 'react-slick';

const cache: any = {};

function importAll(r: any) {
  r.keys().forEach((key: string) => {
    cache[key] = r(key);
  });
}

// Note from the docs -> Warning: The arguments passed to require.context must be literals!
/* @ts-ignore */
importAll(require.context('public/assets/logo/', false, /\.(png|jpe?g|svg)$/));

const images: any[] = Object.entries(cache).map((module) => module[1]);

const Container = styled.div`
  width: 100vw;
  overflow: hidden;
  margin-top: 135px;
`;

const LogoCarousel = () => (
  <Container>
    <Slider
      infinite
      dots={false}
      arrows={false}
      autoplay
      slidesToShow={10}
      slidesToScroll={5}
      centerMode
      responsive={[
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 8
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 6
          }
        }
      ]}
    >
      {images.map((e, idx) => (
        <div key={`${e}-${idx}`}>
          <Image src={e} alt="logo" />
        </div>
      ))}
    </Slider>
  </Container>
);

export default LogoCarousel;
