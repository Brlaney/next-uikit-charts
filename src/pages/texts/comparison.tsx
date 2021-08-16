import TextsByAuthor from './components/TextsByAuthor'
import Link from 'next/link'


export default function Comparison () {
  return (
    <>
      <div className='uk-container-large' style={{ margin: '20px' }}>
        <h1>Comparing texts</h1>
        <div className='uk-float-right'>
          <Link href='/texts'>
            <a className='uk-button-default'>back</a>
          </Link>
        </div>
        <div className='uk-heading-divider uk-margin-large-bottom' />
        <TextsByAuthor />
      </div>
    </>
  )
}
