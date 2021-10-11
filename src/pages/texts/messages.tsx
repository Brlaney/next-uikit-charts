import TextMessages from './components/TextMessages';
import Link from 'next/link';
import styles from '@/styles/Texts.module.scss';

export default function Messages () {
  return (
    <>
      <div id={styles.texts} className='uk-container-large'>
        <h1>Comparing texts</h1>
        <Link href='/texts'>
          <button id={styles.back} className='uk-button-default'>back</button>
        </Link>
        <div className={styles.timeline}>
          <TextMessages />
        </div>
      </div>
    </>
  )
};
