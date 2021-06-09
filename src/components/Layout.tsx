import Meta from './Meta'
import Navbar from './Navbar'
import styles from '../assets/css/Home.module.css'

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
