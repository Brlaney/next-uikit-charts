import Link from 'next/link'
import styles from '@/styles/Texts.module.scss'


export default function Texts () {
  return (
    <>
      <div className='uk-container-large uk-height-large'>
        <div>
          <h1 className={styles.title}>Text message data charts</h1>
        </div>
        <div className='uk-heading-divider uk-margin-bottom' />

        <div className='uk-flex uk-flex-right uk-flex-middle'>
          <h3 className={styles.subheading}>Select a chart</h3>
        </div>

        <div className='uk-margin-left uk-width-1-1'>
          <div className='uk-margin-small'>
            <Link href='/texts/comparison'>
              <a className={styles.select}>Comparison timeline</a>
            </Link>
          </div>
        </div>
        <div className='uk-margin-left uk-width-1-1'>
          <div className='uk-margin-small'>
            <Link href='/texts/messages'>
              <a className={styles.select}>Combined timeline</a>
            </Link>
          </div>
        </div>

        <div className='uk-margin-left uk-width-1-1'>
          <div className='uk-margin-small'>
            <Link href='/texts/stats'>
              <a className={styles.select}>Pie chart</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
