import type { NextPage } from 'next'
import { useEffect, useState, useCallback } from 'react'
import detectEthereumProvider from '@metamask/detect-provider'
import CloseSeaContract from '../truffle/abis/CloseSea.json'
import { ethers } from 'ethers'
import { ExternalProvider } from '@ethersproject/providers'

const Home: NextPage = () => {


  const getProvider = async () => {
    const provider = await detectEthereumProvider() as ExternalProvider
    if (provider !== window.ethereum) console.error('Do you have multiple wallets installed?')
    return new ethers.providers.Web3Provider(provider)
  }

  const getAccount = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    return accounts[0]
  }

  useEffect(() => {
    const loadEthereum = async () => {
      const provider = await getProvider()
      const account = await getAccount()
    }
    loadEthereum()
  }, [])


  return (
   <div>
     HOME
   </div>
  )
}

export default Home