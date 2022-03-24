import styled from 'styled-components';
import HexagonTag from 'components/HexagonTag';
import { H3 } from 'components/Typo';
import imgNum1 from 'assets/number1-stroke.png';
import imgNum2 from 'assets/number2-stroke.png';
import imgNum3 from 'assets/number3-stroke.png';
import BlurredCircle from 'components/BlurredCircle';

const Container = styled.div`
  position: relative;
  max-width: 80%;
  margin: auto;
  min-height: 593px;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 96px;
  min-height: 435px;
  align-items: center;
  transform: translateX(144px);
`;

const NumberContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
`;

const RecruimentProcessSection = () => (
  <Container>
    <H3 style={{ width: 562 }}>Automated and scalable recruitment process</H3>
    <div style={{ position: 'relative', marginTop: 36 }}>
      <NumberContainer>
        <img src={imgNum1} alt="number-1" />
        <img src={imgNum2} alt="number-2" style={{ marginLeft: 173 }} />
        <img src={imgNum3} alt="number-3" style={{ marginLeft: 100 }} />
      </NumberContainer>
      <TagContainer>
        <HexagonTag>Iniciate / Recruit</HexagonTag>
        <HexagonTag>Gamified Training</HexagonTag>
        <HexagonTag>Scholar</HexagonTag>
      </TagContainer>
    </div>
    <BlurredCircle left="94vw" top={100} />
  </Container>
);

export default RecruimentProcessSection;
