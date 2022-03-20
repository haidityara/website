import Logo from '../assets/team-dao-logo.png'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const NavContainer = styled.div`
  display: flex;
`

const Header = () => (
  <HeaderContainer>
    <Logo />
    <NavContainer></NavContainer>
  </HeaderContainer>
)

export default Header
