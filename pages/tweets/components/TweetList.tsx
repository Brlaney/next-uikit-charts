import TweetItem from './TweetItem'

const TweetList = ({ tweets }) => {
  return (
    <>
      <div className='uk-flex uk-flex-center uk-child-width-1-1 uk-flex-wrap-around' uk-grid='true' uk-scrollspy='cls: uk-animation-fade; target: .uk-flex; delay: 175; repeat: false' style={{ width: '1000px' }}>
        {tweets.map((tweet) => (
          <div key={tweet.id} style={{ fontFamily: 'Rubik, sans-serif' }}>
            <TweetItem tweet={tweet} />
          </div>
        ))}
      </div>
    </>
  )
}

export default TweetList
