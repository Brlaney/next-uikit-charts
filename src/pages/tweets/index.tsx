import { server } from '../../config'
import TweetList from './components/TweetList'

export default function Tweet ({ tweets }) {
  return (
    <>
      <TweetList tweets={tweets} />
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/tweets`)
  const tweets = await res.json()

  return {
    props: {
      tweets
    }
  }
}
