import { useEffect, useState, useCallback, createContext } from 'react'
import detectEthereumProvider from '@metamask/detect-provider'
import CloseSeaContract from '../truffle/abis/CloseSea.json'
import { ethers } from 'ethers'
import { ExternalProvider } from '@ethersproject/providers'

export const Ethereum = createContext<any>(null)

const EthereumContext: React.FC = ({ children }) => {
  const [nfts, setNfts] = useState<string[]>([])
  const [account, setAccount] = useState([])
  const [contract, setContract] = useState<ethers.Contract>()

  const getProvider = async () => {
    try {
      const provider = await detectEthereumProvider() as ExternalProvider
      if (provider !== window.ethereum) console.error('Do you have multiple wallets installed?')
      return new ethers.providers.Web3Provider(provider)
    } catch (error) {
      alert('Please install MetaMask in order to use the dApp.')
      return null
    }
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
      alert('Contract not deployed to detected network')
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
      if (provider) {
        const account = await getAccount()
        const contract = await getContract(provider)
        setAccount(account)
        setContract(contract)
      }
    }
    loadEthereum()
  }, [getContract])

  useEffect(() => {
    if (contract) getNFTs(contract)
  }, [contract])


  return (
    <Ethereum.Provider value={{
      nfts,
      account,
      contract
    }}>
      {children}
    </Ethereum.Provider>
  )
}

export default EthereumContext