import { FC } from 'react'
import styled from 'styled-components'
import { ReactComponent as ArrowSvg } from '../assets/arrow.svg'

const WrapperButton = styled.div`
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
  min-width: 181px;
  font-size: 20px;
  line-height: 24px;
`

const Button: FC = ({ children }) => (
  <WrapperButton>
    {children}
    <ArrowSvg style={{ marginLeft: 8 }} />
  </WrapperButton>
)

export default Button
