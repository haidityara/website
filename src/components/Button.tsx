/* eslint-disable object-curly-newline */
import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';
import DownArrowSvg from 'public/assets/arrow_down.svg';
import ArrowSvg from 'public/assets/arrow.svg';

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
  onClick?: any;
  isActive?: boolean;
  type?: string;
  showIcon?: boolean;
}

const Button = forwardRef<HTMLDivElement, PropsWithChildren<ButtonProps>>(
  ({ onClick, children, showIcon = true, ...props }, ref) => {
    const arrow = props.type === 'down' ? <DownArrowSvg /> : <ArrowSvg />;
    return (
      <WrapperButton ref={ref} onClick={onClick} {...props}>
        {children}
        {showIcon && (
          <div style={{ marginLeft: 8, display: 'flex', alignItems: 'center' }}>
            {arrow}
          </div>
        )}
      </WrapperButton>
    );
  }
);

export default Button;
