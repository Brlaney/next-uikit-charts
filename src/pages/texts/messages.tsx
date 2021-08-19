import TextMessages from './components/TextMessages'
import Link from 'next/link'


export default function Messages () {
  return (
    <>
      <div id='texts' className='uk-container-large'>
        <h1>Comparing texts</h1>
        <Link href='/texts'>
          <button className='uk-button-default'>back</button>
        </Link>
        <div className='uk-heading-divider uk-margin-large-bottom' />
        <TextMessages />
      </div>
    </>
  )
}
