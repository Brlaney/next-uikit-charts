import { Line, defaults } from 'react-chartjs-2'

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'
defaults.global.hover.animationDuration = 750

const Frame = () => {
  return (
    <div className='uk-flex uk-flex-center uk-flex-middle'>
      <Line
        data={{
          datasets: [
            {
              data: [
                {
                  x: 0,
                  y: 5
                },
                {
                  x: 10,
                  y: 5
                }
              ],
              pointRadius: [
                7,
                7
              ],
              pointHitRadius: [
                8,
                8
              ],
              pointHoverRadius: [
                5,
                5
              ],
              pointBackgroundColor: [
                'rgba(228, 241, 254, 1)',
                'rgba(228, 241, 254, 1)'
              ],
              pointBorderColor: [
                'rgba(36, 37, 42, 1)',
                'rgba(36, 37, 42, 1)'
              ],
              label: 'Member 1',
              borderColor: '#343a40',
              fill: false
            },
            {
              data: [
                {
                  x: 0,
                  y: 0
                },
                {
                  x: 10,
                  y: 5
                }
              ],
              pointRadius: [
                7,
                7
              ],
              pointHitRadius: [
                8,
                8
              ],
              pointHoverRadius: [
                5,
                5
              ],
              pointBackgroundColor: [
                'rgba(228, 241, 254, 1)',
                'rgba(228, 241, 254, 1)'
              ],
              pointBorderColor: [
                'rgba(36, 37, 42, 1)',
                'rgba(36, 37, 42, 1)'
              ],
              label: 'Member 2',
              borderColor: '#343a40',
              fill: false
            },
            {
              data: [
                {
                  x: 0,
                  y: 5
                },
                {
                  x: 9.65,
                  y: 4.75
                }
              ],
              pointRadius: [
                7,
                7
              ],
              pointHitRadius: [
                8,
                8
              ],
              pointHoverRadius: [
                5,
                5
              ],
              pointBackgroundColor: [
                'rgba(226, 106, 106, 1)',
                'rgba(226, 106, 106, 1)'
              ],
              pointBorderColor: [
                'rgba(36, 37, 42, 1)',
                'rgba(36, 37, 42, 1)'
              ],
              label: 'Deformed 1',
              borderColor: '#c45850',
              fill: false
            },
            {
              data: [
                {
                  x: 0,
                  y: 0
                },
                {
                  x: 9.65,
                  y: 4.75
                }
              ],
              pointRadius: [
                7,
                7
              ],
              pointHitRadius: [
                8,
                8
              ],
              pointHoverRadius: [
                5,
                5
              ],
              pointBackgroundColor: [
                'rgba(226, 106, 106, 1)',
                'rgba(226, 106, 106, 1)'
              ],
              pointBorderColor: [
                'rgba(36, 37, 42, 1)',
                'rgba(36, 37, 42, 1)'
              ],
              label: 'Deformed 2',
              borderColor: '#c45850',
              fill: false
            }
          ]
        }}
        height={450}
        width={700}
        options={{
          layout: {
            padding: {
              left: 25,
              right: 25,
              top: 50,
              bottom: 15
            }
          },
          legend: {
            display: true,
            labels: {
              fontFamily: 'Sans-serif',
              fontSize: 18,
              padding: 30,
              boxWidth: 20
            }
          },
          scales: {
            yAxes: [{
              ticks: {
                display: false
              },
              gridLines: {
                display: false
              }
            }],
            xAxes: [{
              ticks: {
                display: false
              },
              gridLines: {
                display: false
              }
            }]
          }
        }}
      />
    </div>
  )
}

export default Frame;
