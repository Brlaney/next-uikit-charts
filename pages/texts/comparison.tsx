import TextsByAuthor from '../../components/TextsByAuthor'

export default function Comparison () {
  return (
    <>
      <div className='uk-container-large' style={{ margin: '20px' }}>
        <h1>Comparing texts</h1>
        <div className='uk-heading-divider uk-margin-large-bottom'></div>
        <TextsByAuthor />
      </div>
    </>
  )
}
