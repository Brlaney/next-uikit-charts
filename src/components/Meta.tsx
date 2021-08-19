import Head from 'next/head'


const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/next-uikit-charts.svg' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title:
    'Next | UiKit',
  keywords:
    'Brendan Laney, web-development, civil engineer, website design, marketing, advertising, next js, react, dev, coding, programming',
  description:
    'A basic Next.js web application that uses UiKit for UI components and React-Charts-2/Chart.js for sleek plots and graphs.'
}

export default Meta
