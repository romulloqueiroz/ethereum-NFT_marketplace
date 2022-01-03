import styled from 'styled-components'
import { cleanButton, color, shadow } from '../../styles'

const InputContainer = styled.div`
  width: 765px;
  margin-left: 20px;
`

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  margin-left: 10px;
  font-size: 1.4rem;
`

const Logo = styled.img`
  height: 40px;
  width: 40px;
`

const StyledNavbar = styled.nav`
  width: 100vw;
  height: 72px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  ${shadow.standard};
  margin-bottom: 36px;
`

const Button = styled.input`
  ${cleanButton};
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: ${color.darkGrey};
  margin: 0 20px;
`

export {
  InputContainer,
  Title,
  Logo,
  StyledNavbar,
  Button
}