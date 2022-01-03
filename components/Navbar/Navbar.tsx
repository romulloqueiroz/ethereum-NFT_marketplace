import { useState } from 'react'
import Input from '../Input/Input'
import {
  InputContainer,
  Title,
  Logo,
  StyledNavbar,
  Button
} from './Navbar.styles'

const Navbar = () => {
  const [token, setToken] = useState('')

  return (
    <StyledNavbar>
      <Logo 
        src='assets/logo.png'
        alt='CloseSea Logo'
      />
      <Title>
        CloseSea
      </Title>
      <InputContainer>
        <Input 
          placeholder='Immortalize some shit on Ropsten as a NFT'
          onChange={(e) => setToken(e.target.value)}
        />
      </InputContainer>
      <Button>
        Create
      </Button>
    </StyledNavbar>
  )
}

export default Navbar