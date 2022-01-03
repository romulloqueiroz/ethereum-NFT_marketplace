import React from 'react'
import Input from '../Input/Input'
import {
  InputContainer,
  Title,
  Logo,
  StyledNavbar
} from './Navbar.styles'

const Navbar = () => {
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
        />
      </InputContainer>
    </StyledNavbar>
  )
}

export default Navbar