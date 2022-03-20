import styled from 'styled-components';
import imgLoading from 'assets/animated-loader.gif';

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
    <img src={imgLoading} alt="loading" />
  </Container>
);

export default LoadingScreen;
