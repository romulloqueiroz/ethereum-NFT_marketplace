import styled from 'styled-components'
import { color } from '../../styles'

const InputContainer = styled.div`
  width: 765px;
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
  height: 72px;
  box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
  padding-left: 16px;
  display: flex;
  align-items: center;
`

export {
  InputContainer,
  Title,
  Logo,
  StyledNavbar
}