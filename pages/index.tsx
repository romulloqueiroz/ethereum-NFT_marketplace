import type { NextPage } from 'next'
import { useEffect, useState, useCallback } from 'react'
import detectEthereumProvider from '@metamask/detect-provider'
import CloseSeaContract from '../truffle/abis/CloseSea.json'
import { ethers } from 'ethers'
import { ExternalProvider } from '@ethersproject/providers'
import { Navbar, Card } from '../components'
import styled from 'styled-components'

const Home: NextPage = () => {
  const [token, setToken] = useState('')
  const [nfts, setNfts] = useState<string[]>([])
  const [account, setAccount] = useState([])
  const [contract, setContract] = useState<ethers.Contract>()

  const getProvider = async () => {
    const provider = await detectEthereumProvider() as ExternalProvider
    if (provider !== window.ethereum) console.error('Do you have multiple wallets installed?')
    return new ethers.providers.Web3Provider(provider)
  }

  const getAccount = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    return accounts[0]
  }

  const getContract = useCallback(async (newProvider: ethers.providers.Web3Provider) => {
    const networkID: keyof typeof CloseSeaContract.networks = 
      await window.ethereum.request({ method: 'net_version' })
    const networkData = CloseSeaContract.networks[networkID]
    const signer = newProvider.getSigner()

    if(networkData) {
      const abi = CloseSeaContract.abi
      const address = networkData.address
      const contract = new ethers.Contract(address, abi, signer)
      return contract
    } else {
      console.error('Contract not deployed to detected network')
    }
  }, [])

  const getNFTs = async (contract: ethers.Contract) => {
    const totalSupply = await contract.totalSupply()
    console.log('TOTAL SUPPLY: ', ethers.utils.formatUnits(totalSupply, 0))
    const nftArr = []
    for (let i = 0; i < totalSupply; i++) {
      nftArr.push(await contract.nftArr(i))
    }
    setNfts(nftArr)
    console.log('NFTs: ', nftArr)
  }

  useEffect(() => {
    const loadEthereum = async () => {
      const provider = await getProvider()
      const account = await getAccount()
      const contract = await getContract(provider)
      setAccount(account)
      setContract(contract)
    }
    loadEthereum()
  }, [getContract])

  useEffect(() => {
    if (contract) getNFTs(contract)
  }, [contract])

  return (
   <>
      <Navbar />
      <Container>
        <Grid>
         {nfts?.map((item, idx) => <Card key={idx} src={item} />)}
        </Grid> 
      </Container>
   </>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-gap: 16px;
  width: 100%;
  grid-template-columns: repeat(6, 1fr);

  @media (max-width: 2148px) {
    max-width: 1751px;
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1856px) {
    max-width: 1459px;
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1564px) {
    max-width: 1167px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1272px) {
    max-width: 875px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 980px) {
    max-width: 583px;
    grid-template-columns: repeat(1, 1fr);
  }
`

export default Home