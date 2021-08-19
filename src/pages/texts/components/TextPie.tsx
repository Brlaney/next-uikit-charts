import { Pie } from 'react-chartjs-2'


const TextPie = () => {
  return (
    <div className='uk-height-large uk-flex uk-flex-center uk-flex-middle uk-margin'>
      <Pie
        data={{
          datasets: [
            {
              data: [
                1429,
                1245
              ],
              borderColor: '#d6d6d6',
              borderWidth: 1.3,
              backgroundColor: [
                '#001f63',
                '#d600f2'
              ],
            },
          ],
          labels: [
                'Bo',
                'Bill'
              ],
        }}
        height={550}
        width={1200}
        options={{
          layout: {
            padding: {
              left: 25,
              right: 25,
              top: 50,
              bottom: 35
            },
            margin: {
              left: 20,
              right: 20,
              top: 20,
              bottom: 30
            },
          },
          legend: {
            display: true,
            labels: {
              fontFamily: 'Sans-serif',
              fontColor: '#3b4750',
              fontSize: 24,
              padding: 30,
              boxWidth: 60
            }
          },
        }}
      />
    </div>
  )
}

export default TextPie
