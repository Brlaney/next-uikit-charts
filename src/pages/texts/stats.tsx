import TextPie from './components/TextPie';
import Link from 'next/link';
import styles from '@/styles/Texts.module.scss';

export default function Comparison () {
  return (
    <>
      <div id={styles.container} className='uk-container-large'>
        <h1>Text amounts</h1>
        <Link href='/texts'>
          <button id={styles.back} className='uk-button-default'>back</button>
        </Link>
        <div className={styles.chartContainer}>
          <TextPie />
        </div>
      </div>
    </>
  )
};
