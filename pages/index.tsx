// import { server } from '../config'

export default function Home () {
  return (
    <>
      <div className='uk-heading-divider uk-margin-large-top'>
        <h1 className='uk-heading-large'>
          Welcome,
        </h1>
        <h3 className='uk-text-lead'>
          A conglomerate of random component based features
        </h3>
      </div>
      <div className='uk-text-center'>
        <h1 className='uk-heading-small' style={{ color: 'var(--secondary-color)' }}>
          <span className='uk-text-lead'>designed by </span>Brendan Laney
        </h1>
      </div>
    </>
  )
}
