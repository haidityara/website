import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';
import imgHexagon from 'public/assets/hexagon.png';

const Wrapper = styled.div`
  font-family: 'Technology';
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  line-height: 42px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #414141;
  width: calc(300px - 40px);
  height: 300px;
  position: relative;
  padding: 0 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${imgHexagon.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
}

const HexagonTag = forwardRef<HTMLDivElement, PropsWithChildren<ButtonProps>>(
  ({ onClick, children, ...props }, ref) => (
    <Wrapper ref={ref} {...props}>
      {children}
    </Wrapper>
  )
);

export default HexagonTag;
