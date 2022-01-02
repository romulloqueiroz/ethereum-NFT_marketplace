import type { AppProps } from 'next/app'
import Global from '../styles/Global'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Global />
    <Component {...pageProps} />
  </>
)

export default MyApp