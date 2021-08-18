import { Bar } from 'react-chartjs-2'
import { data } from '@/lib/data/texts-one'


const TextMessages = () => {
  return (
    <div className='uk-height-large uk-flex uk-flex-center uk-flex-middle uk-margin'>
      <Bar
        data={{
          datasets: [
            {
              data: [{data}],
              label: 'Text message occurrance',
              borderColor: '#cecece',
              backgroundColor: '#001f63',
            },
          ]
        }}
        height={550}
        width={1200}
        options={{
          scales: {
            xAxes: [{
              type: 'time',
              time: {
                unit: 'month'
              }
            }]
          },
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
            }
          }
        }}
      />
    </div>
  )
}

export default TextMessages
