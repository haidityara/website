import styled from 'styled-components';
import imgLoading from 'public/assets/animated-loader.gif';
import Image from 'components/Image';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingScreen = () => (
  <Container>
    <Image src={imgLoading} alt="loading" />
  </Container>
);

export default LoadingScreen;
