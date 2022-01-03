import type { AppProps } from 'next/app'
import Global from '../styles/Global'
import Head from 'next/head'
import EthereumContext from '../context/EthereumContext'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <EthereumContext>
    <Head>
      <title>CloseSea, the smallest NFT marketplace</title>
    </Head>
    <Global />
    <Component {...pageProps} />
  </EthereumContext>
)

export default MyApp