import React from 'react'
import styled from 'styled-components'
import Input from '../Input/Input'

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
      <Input 
        placeholder='Immortalize some shit as a NFT'
      />
    </StyledNavbar>
  )
}

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

export default Navbar