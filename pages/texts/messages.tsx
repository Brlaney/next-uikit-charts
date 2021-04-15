import TextMessages from '../../components/TextComponents/TextMessages'

export default function Messages () {
  return (
    <>
      <div className='uk-container-large' style={{ margin: '20px' }}>
        <h1>Comparing texts</h1>
        <div className='uk-heading-divider uk-margin-large-bottom' />
        <TextMessages />
      </div>
    </>
  )
}
