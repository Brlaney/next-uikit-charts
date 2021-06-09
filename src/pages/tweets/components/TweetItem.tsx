import Link from 'next/link'

const TweetItem = ({ tweet }) => {
  return (
    <>
      <div className='uk-flex uk-flex-column uk-flex-center uk-width-1-2@s uk-padding-small uk-margin' style={{ border: '1px solid #eaeaea' }}>

        <h5 className='uk-heading-small' style={{ marginBottom: '0', paddingBottom: '0' }}>
          <Link href='#'>
            <a target='_blank' rel='noopener noreferrer'>{tweet.username}</a>
          </Link>
        </h5>
        <h6 className='uk-text-lead' style={{ marginTop: '0', paddingTop: '0' }}>
          {tweet.name}
        </h6>

        <div>
          <table className='uk-table uk-table-middle uk-table-divider'>
            <thead style={{ paddingBottom: '0' }}>
              <tr>
                <th>Replies</th>
                <th>Retweets</th>
                <th>Likes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className='uk-text-lead uk-label' style={{ color: '#fff' }}>{tweet.retweets_count}</span></td>
                <td><span className='uk-text-lead uk-label' style={{ color: '#fff' }}>{tweet.replies_count}</span></td>
                <td><span className='uk-text-lead uk-label' style={{ color: '#fff' }}>{tweet.likes_count}</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <p className='uk-text-lead'>{tweet.tweet}</p>
        </div>

      </div>
    </>
  )
}

export default TweetItem
