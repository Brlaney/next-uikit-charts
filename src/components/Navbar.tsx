import styles from '@/styles/Home.module.scss';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <nav id='navbar' className='uk-navbar-container' uk-navbar='True'>

        {/* Left-end of navbar */}
        <div id='brand' className='uk-navbar-left'>
          <a
            className='uk-navbar-item uk-logo uk-margin-small-left'
            href='/'
          >
            Next UiKit
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
                      <a className='uk-text-lead' id='link'>Matrix</a>
                    </Link>
                  </li>

                  <li className='uk-nav-divider' />

                  {/* Dropdown link 2 */}
                  <li className='uk-*'>
                    <Link href='/matrix/trusses'>
                      <a className='uk-text-lead' id='link'>Trusses</a>
                    </Link>
                  </li>

                  {/* Dropdown link 3 */}
                  <li className='uk-*'>
                    <Link href='/matrix/beams'>
                      <a className='uk-text-lead' id='link'>Beams</a>
                    </Link>
                  </li>

                  {/* Dropdown link 4 */}
                  <li className='uk-*'>
                    <Link href='/matrix/frames'>
                      <a className='uk-text-lead' id='link'>Frames</a>
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
                      <a className='uk-text-lead' id='link'>Charts</a>
                    </Link>
                  </li>

                  <li className='uk-nav-divider' />

                  {/* Dropdown link 2 */}
                  <li className='uk-*'>
                    <Link href='/texts/comparison'>
                      <a className='uk-text-lead' id='link'>Comparison</a>
                    </Link>
                  </li>

                  {/* Dropdown link 3 */}
                  <li className='uk-*'>
                    <Link href='/texts/messages'>
                      <a className='uk-text-lead' id='link'>Combined</a>
                    </Link>
                  </li>

                  {/* Dropdown link 4 */}
                  <li className='uk-*'>
                    <Link href='/texts/stats'>
                      <a className='uk-text-lead' id='link'>Pie charts</a>
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
};

export default Navbar;
