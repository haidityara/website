import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import { H3 } from 'components/Typo';
import bgBottom from 'public/assets/bottom-background.png';
import bgBottomLazy from 'public/assets/bottom-background-lazy.png';
import imgRobot from 'public/assets/robot-no-reflect.png';
import imgFragment1 from 'public/assets/bottom-fragment1.png';
import imgFragment2 from 'public/assets/bottom-fragment2.png';
import ScrollAnimation from 'react-animate-on-scroll';
import Image from 'components/Image';
import useProgressiveImage from 'src/hooks/useProgressiveImage';
import ChervonLeft from 'public/assets/chervon-left.svg';

const data = {
  EMAIL_FORM_ACTION:
    'https://script.google.com/macros/s/AKfycbxKg7lfAKoAVG8GiLV9ooNk01BLepCOZT5kDvrFbtigNhPn0yRCBZFZI9iM3rHGb5o3/exec',
  EMAIL_FORM_RECEIVER: 'truonghaibang1997@gmail.com'
};

const BgContainer = styled.div<{ bgImage: string }>`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 80%,
      rgba(0, 0, 0, 1) 100%
    ),
    url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;

const InputContainer = styled.div`
  position: relative;
  svg {
    margin-left: -24px;
  }
  white-space: nowrap;
`;

const Input = styled.input`
  width: 250px;
  height: 48px;
  border: none;
  outline: none;
  color: #858585;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  background: #171717;
  padding: 0 43px;
  margin-top: 28px;

  &:after {
    content: '>';
  }
`;

const BeginSectionContainer = styled.div`
  max-width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  min-height: 800px;
  justify-content: center;
`;

const EmailContainer = styled.div`
  position: absolute;
  margin-top: 40%;
  margin-left: 20%;
`;

const RobotGalaxySection = () => {
  const bgImage = useProgressiveImage(bgBottom.src, bgBottomLazy.src);
  const buttonStyle = {
    marginTop: 50,
    width: 25,
    border: 'none',
    cursor: 'pointer',
    background: '#171717',
    height: '48px'
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const formData = new FormData();
    formData.append('email', email);
    fetch(data.EMAIL_FORM_ACTION, {
      method: 'POST',
      body: formData
    }).then(() => {
      window.location.reload();
    });
  };

  return (
    <BgContainer bgImage={bgImage}>
      <BeginSectionContainer>
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <Parallax easing="easeIn" translateY={[100, 0]}>
            <div style={{ position: 'relative' }}>
              <Parallax speed={10}>
                <div
                  style={{
                    position: 'absolute',
                    top: -200,
                    transform: 'scale(130%)'
                  }}
                >
                  <Image
                    objectFit="contain"
                    className="teamdao-pulse"
                    src={imgFragment1}
                    alt=""
                  />
                </div>
              </Parallax>
              <Parallax speed={10}>
                <div
                  style={{
                    position: 'absolute',
                    top: -250
                  }}
                >
                  <Image className="teamdao-pulse" src={imgRobot} alt="" />
                </div>
              </Parallax>
              <Parallax speed={20}>
                <div
                  style={{
                    position: 'absolute',
                    top: 50,
                    left: -200,
                    width: 250
                  }}
                >
                  <Image
                    objectFit="contain"
                    className="teamdao-pulse"
                    src={imgFragment2}
                    alt=""
                  />
                </div>
              </Parallax>
              <div style={{ width: 400, height: 10, visibility: 'hidden' }} />
            </div>
          </Parallax>
        </ScrollAnimation>
        <EmailContainer>
          <H3>Receive</H3>
          <H3>transmission</H3>
          <form
            onSubmit={submitForm}
            className="gform"
            method="POST"
            action={data.EMAIL_FORM_ACTION}
            data-email={data.EMAIL_FORM_RECEIVER}
          >
            <InputContainer>
              <Input type="email" name="email" placeholder="Your e-mail" />
              <button type="submit" style={buttonStyle}>
                <ChervonLeft />
              </button>
            </InputContainer>
          </form>
        </EmailContainer>
      </BeginSectionContainer>
    </BgContainer>
  );
};
export default RobotGalaxySection;
