import Layout from '../components/Layout'
import Uikit from '../components/Uikit'
import '../assets/css/uikit.css'
import '../assets/css/globals.css'

export default function App ({ Component, pageProps }) {
  return (
    <Layout>
      <Uikit>
        <Component {...pageProps} />
      </Uikit>
    </Layout>
  )
}
