import Link from 'next/link'
import styles from '../assets/css/Home.module.css'

const Navbar = () => {
  return (
    <>
      <nav className='uk-navbar-container' uk-navbar='True' style={{ borderBottom: '1px solid #eaeaea', backgroundColor: 'var(--bg-dark)' }}>

        {/* Left-end of navbar */}
        <div className='uk-navbar-left'>
          <span className='uk-margin-left' uk-icon='icon: expand; ratio: 1.75' style={{ color: 'var(--secondary-color' }} />
          <a className='uk-active uk-navbar-item uk-logo uk-margin-small-left' href='/' style={{ paddingLeft: 0, fontSize: '32px', color: '#eaeaea' }}>
            Brendan Laney Design
          </a>

          <ul className='uk-navbar-nav'>

            <li className='uk-*'>
              <Link href='/matrix'>
                <a className={styles.navlink}>Matrix Stiffness</a>
              </Link>
            </li>

            <li className='uk-*'>
              <Link href='/tweets'>
                <a className={styles.navlink}>Popular Tweets</a>
              </Link>
            </li>

            <li className='uk-*'>
              <Link href='/icons'>
                <a className={styles.navlink}>Icons</a>
              </Link>
            </li>

            <li className='uk-*'>
              <a href='#'>Texts</a>
              <div className='uk-navbar-dropdown'>
                <ul className='uk-nav uk-navbar-dropdown-nav'>

                  {/* Dropdown link 1 */}
                  <li className='uk-*'>
                    <Link href='/texts'>
                      <a className='uk-text-lead' style={{ color: 'var(--bg-dark)' }}>Overall</a>
                    </Link>
                  </li>
                  
                  {/* Dropdown link 2 */}
                  <li className='uk-*'>
                    <Link href='/texts/comparison'>
                      <a className='uk-text-lead' style={{ color: 'var(--bg-dark)' }}>Split</a>
                    </Link>
                  </li>

                  {/* Dropdown link 3 */}
                  <li className='uk-*'>
                    <Link href='/texts/stats'>
                      <a className='uk-text-lead' style={{ color: 'var(--bg-dark)' }}>Stats</a>
                    </Link>
                  </li>

                </ul>

              </div>
            </li>
          </ul>
        </div>
  
        {/* Right-end of Navbar */}
        <div className='uk-navbar-right'>
          <ul className='uk-navbar-nav'>
            <li className='uk-*'>
              <Link href='/about'>
                <a id='right-nav-icon' className='uk-icon-link uk-margin-small-right' uk-icon='info' />
              </Link>
            </li>
          </ul>
        </div>

      </nav>
    </>
  )
}

export default Navbar
