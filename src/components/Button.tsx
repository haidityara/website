import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';
import ArrowSvg from 'public/assets/arrow_down.svg';

const WrapperButton = styled.div<{ isActive?: boolean }>`
  color: #00ff19;
  font-weight: 500;
  border: 1px solid #00ff19;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #153300;
  box-shadow: -1px 1px 14px rgba(0, 0, 0, 0.15),
    0px 19px 16px rgba(0, 0, 0, 0.09);
  border-radius: 8px;
  padding: 15.5px 17px;
  width: 181px;
  font-size: 20px;
  line-height: 24px;
  transition: 0.2s ease all;
  cursor: pointer;

  ${({ isActive }) => (isActive ? 'background-color: #3f701e;' : '')}

  &:hover {
    background-color: #3f701e;
  }
`;

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
  isActive?: boolean;
}

const Button = forwardRef<HTMLDivElement, PropsWithChildren<ButtonProps>>(
  ({ onClick, children, ...props }, ref) => (
    <WrapperButton ref={ref} onClick={onClick} {...props}>
      {children}
      <div style={{ marginLeft: 8, display: 'flex', alignItems: 'center' }}>
        <ArrowSvg />
      </div>
    </WrapperButton>
  )
);

export default Button;
