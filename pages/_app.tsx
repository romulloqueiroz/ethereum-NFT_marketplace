import type { AppProps } from 'next/app'
import Global from '../styles/Global'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>CloseSea, the smallest NFT marketplace</title>
    </Head>
    <Global />
    <Component {...pageProps} />
  </>
)

export default MyApp