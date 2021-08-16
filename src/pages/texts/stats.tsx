import TextPie from './components/TextPie'

export default function Comparison () {
  return (
    <>
      <div className='uk-container-large' style={{ margin: '20px' }}>
        <h1>Text amounts</h1>
        <div className='uk-heading-divider uk-margin-large-bottom'></div>
        <TextPie />
          {/* <p className='uk-text-lead'>Brendan's total: <span className='uk-text-muted'>1,429</span></p>
          <p className='uk-text-lead'>Suzie's total: <span className='uk-text-muted'>1,245</span></p> */}
      </div>
    </>
  )
}
