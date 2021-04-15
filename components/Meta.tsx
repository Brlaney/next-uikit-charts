import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'My Dev Work',
  keywords: 'Brendan Laney, web-development, civil engineer, website design, marketing, advertising, next js, react, dev, coding, programming',
  description: 'A simple react web application to showcase my web-development abilities',
}

export default Meta
