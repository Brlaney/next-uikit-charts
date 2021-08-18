import Layout from '@/components/Layout'
import 'uikit/dist/js/uikit.js'
import 'uikit/dist/css/uikit.css'
import '@/styles/globals.scss'


export default function App ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
