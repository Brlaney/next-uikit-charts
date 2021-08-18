import TextMessages from './components/TextMessages'

export default function Messages () {
  return (
    <>
      <div id='texts' className='uk-container-large'>
        <h3>Comparing texts</h3>
        <div className='uk-heading-divider' />
        <TextMessages />
      </div>
    </>
  )
}
