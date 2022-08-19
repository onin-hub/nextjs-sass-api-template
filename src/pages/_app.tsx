import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import '../sass/css/sass/main.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
