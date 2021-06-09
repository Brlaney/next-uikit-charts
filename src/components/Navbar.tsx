import styles from '../assets/css/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <nav className='uk-navbar-container' uk-navbar='True' style={{ borderBottom: '1px solid #eaeaea', backgroundColor: 'var(--bg-dark)' }}>

        {/* Left-end of navbar */}
        <div className='uk-navbar-left'>
          <a className='uk-active uk-navbar-item uk-logo uk-margin-small-left' href='/' style={{ paddingLeft: 0, fontSize: '32px', color: '#eaeaea' }}>
            BL designs
          </a>

          <ul className='uk-navbar-nav'>

            {/* Matrix dropdown menu */}
            <li className='uk-*'>
              <a href='#'>Matrix</a>
              <div className='uk-navbar-dropdown'>
                <ul className='uk-nav uk-navbar-dropdown-nav'>

                  {/* Dropdown link 1 */}
                  <li className='uk-*'>
                    <Link href='/matrix'>
                      <a className='uk-text-lead' style={{ color: 'var(--bg-dark)' }}>Matrix</a>
                    </Link>
                  </li>

                  <li className='uk-nav-divider' />

                  {/* Dropdown link 2 */}
                  <li className='uk-*'>
                    <Link href='/matrix/trusses'>
                      <a className='uk-text-lead' style={{ color: 'var(--bg-dark)' }}>Trusses</a>
                    </Link>
                  </li>

                  {/* Dropdown link 3 */}
                  <li className='uk-*'>
                    <Link href='/matrix/beams'>
                      <a className='uk-text-lead' style={{ color: 'var(--bg-dark)' }}>Beams</a>
                    </Link>
                  </li>

                  {/* Dropdown link 4 */}
                  <li className='uk-*'>
                    <Link href='/matrix/frames'>
                      <a className='uk-text-lead' style={{ color: 'var(--bg-dark)' }}>Frames</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Texts dropdown menu */}
            <li className='uk-*'>
              <a href='#'>Texts</a>
              <div className='uk-navbar-dropdown'>
                <ul className='uk-nav uk-navbar-dropdown-nav'>

                  {/* Dropdown link 1 */}
                  <li className='uk-*'>
                    <Link href='/texts'>
                      <a className='uk-text-lead' style={{ color: 'var(--bg-dark)' }}>Texts</a>
                    </Link>
                  </li>

                  <li className='uk-nav-divider' />

                  {/* Dropdown link 2 */}
                  <li className='uk-*'>
                    <Link href='/texts/comparison'>
                      <a className='uk-text-lead' style={{ color: 'var(--bg-dark)' }}>Comparison timeline</a>
                    </Link>
                  </li>

                  {/* Dropdown link 3 */}
                  <li className='uk-*'>
                    <Link href='/texts/messages'>
                      <a className='uk-text-lead' style={{ color: 'var(--bg-dark)' }}>Combined timeline</a>
                    </Link>
                  </li>

                  {/* Dropdown link 4 */}
                  <li className='uk-*'>
                    <Link href='/texts/stats'>
                      <a className='uk-text-lead' style={{ color: 'var(--bg-dark)' }}>Pie charts</a>
                    </Link>
                  </li>
                </ul>
              </div>
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
