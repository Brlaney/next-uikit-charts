import Layout from '../components/Layout'
import 'uikit/dist/js/uikit.js'
import 'uikit/dist/css/uikit.css'
import '../assets/css/globals.css'

export default function App ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
