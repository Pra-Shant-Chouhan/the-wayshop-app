import Layout from '../components/Layout'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '../store'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>ThewayShop - Ecommerce</title>
    </Head>
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  </>
  )
}

export default MyApp
