import Link from 'next/link'
import styles from '@/styles/Texts.module.scss'


export default function Texts() {
  return (
    <>
      {/* Page header */}
      <div id='parent' className='uk-container-large uk-height-large'>
        <div>
          <h1 className={styles.title}>
            Text message data
          </h1>
        </div>
        <div className='uk-heading-divider uk-margin-bottom' />
        <div id='subheader' className='uk-flex uk-flex-middle'>
          <h2 className={styles.subtitle}>
            Select a sample chart
          </h2>
        </div>

        {/* Link container */}
        <div
          id='linkContainer'
          className='uk-grid-row uk-grid-row-large uk-child-width-1-3 uk-text-center'
          uk-grid
        >
          {/* Link 1 */}
          <div id='card' className='uk-width-1-1'>
            <Link href='/texts/comparison'>
              <a
                id='select'
                className='uk-display-block uk-card uk-card-body uk-card-default uk-link-toggle uk-width-1-1'
              >
                <span id='text' className='uk-text-lead'>
                  Comparison Timeline
                </span>
              </a>
            </Link>
          </div>
          {/* Link 2 */}
          <div id='card' className='uk-width-1-1'>
            <Link href='/texts/messages'>
              <a
                id='select'
                className='uk-display-block uk-card uk-card-body uk-card-default uk-link-toggle uk-width-1-1'
              >
                <span id='text' className='uk-text-lead'>
                  Combined Timeline
                </span>
              </a>
            </Link>
          </div>
          {/* Link 3 */}
          <div id='card' className='uk-width-1-1'>
            <Link href='/texts/stats'>
              <a
                id='select'
                className='uk-display-block uk-card uk-card-body uk-card-default uk-link-toggle uk-width-1-1'
              >
                <span id='text' className='uk-text-lead'>
                  Stats Pie Chart
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
