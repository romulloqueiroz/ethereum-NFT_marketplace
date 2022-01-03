import { useState, useContext } from 'react'
import Input from '../Input/Input'
import {
  InputContainer,
  Title,
  Logo,
  StyledNavbar,
  Button
} from './Navbar.styles'
import { Ethereum } from '../../context/EthereumContext'

const Navbar = () => {
  const { contract, nfts, setNfts } = useContext(Ethereum)
  const [token, setToken] = useState('')

  const mint = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await contract?.mint(token)
    if (res.data) {
      alert('Token minted!')
    }
    setToken('')
    setNfts([...nfts, token])
  }

  return (
    <form onSubmit={mint}>
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
            placeholder='Paste a url here to immortalize some shit on Ropsten as a NFT'
            onChange={e => setToken(e.target.value)}
            value={token}
          />
        </InputContainer>
        <Button 
          type='submit' 
          value='Create' 
        />
      </StyledNavbar>
    </form>
  )
}

export default Navbar