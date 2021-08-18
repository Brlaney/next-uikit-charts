import Meta from './Meta'
import Navbar from './Navbar'
import styles from '@/styles/Home.module.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
