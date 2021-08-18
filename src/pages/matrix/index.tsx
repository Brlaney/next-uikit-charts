import Link from 'next/link'
import styles from '@/styles/Matrix.module.scss'


export default function Matrix () {
  return (
    <>
      <div className='uk-container-large'>
        <div>
          <h1 className={styles.title}>Matrix Structural Analysis</h1>
        </div>
        <div className='uk-heading-divider uk-margin-bottom' />

        <div className='uk-flex uk-flex-right uk-flex-middle'>
          <h3 className={styles.subheading}>Select a system</h3>
        </div>

        <div id='container' className='uk-margin-left uk-width-1-1'>
          <div className={styles.parent}>
            <Link href='/matrix/truss'>
              <a className={styles.select}>Truss</a>
            </Link>
          </div>
        </div>
        <div id='container' className='uk-margin-left uk-width-1-1'>
          <div className={styles.parent}>
            <Link href='/matrix/beams'>
              <a className={styles.select}>Beams</a>
            </Link>
          </div>
        </div>

        <div id='container' className='uk-margin-left uk-width-1-1'>
          <div className={styles.parent}>
            <Link href='/matrix/frames'>
              <a className={styles.select}>Frames</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
