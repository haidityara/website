import Footer from 'components/Footer';
import Header from 'components/Header';
import styled from 'styled-components';

const Body = styled.div`
  color: white;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`;

const ComingSoonPage = () => (
  <div>
    <Header />
    <Body>Coming soon</Body>
    <Footer />
  </div>
);

export default ComingSoonPage;
