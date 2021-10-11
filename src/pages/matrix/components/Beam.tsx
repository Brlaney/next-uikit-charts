import { Scatter } from 'react-chartjs-2';

// defaults.global.tooltips.enabled = false
// defaults.global.legend.display = false

const Beam = () => {
  return (
    <div className='uk-flex uk-flex-center uk-flex-middle'>
      <Scatter
        data={{
          datasets: [
            {
              data: [
                {
                  x: 0,
                  y: 0
                },
                {
                  x: 25,
                  y: 0
                },
                {
                  x: 50,
                  y: 0
                }
              ],
              pointRadius: [
                8,
                8,
                8
              ],
              pointHitRadius: [
                15,
                15,
                15
              ],
              pointHoverRadius: [
                6,
                6,
                6
              ],
              pointBackgroundColor: [
                'rgba(228, 241, 254, 1)',
                'rgba(228, 241, 254, 1)',
                'rgba(228, 241, 254, 1)'
              ],
              pointBorderColor: [
                'rgba(36, 37, 42, 1)',
                'rgba(36, 37, 42, 1)',
                'rgba(36, 37, 42, 1)'
              ],
              label: 'Undeformed',
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
                  x: 25,
                  y: -0.05
                },
                {
                  x: 50.025,
                  y: 0.03
                }
              ],
              pointRadius: [
                8,
                8,
                8
              ],
              pointHitRadius: [
                15,
                15,
                15
              ],
              pointHoverRadius: [
                6,
                6,
                6
              ],
              pointBackgroundColor: [
                'rgba(228, 241, 254, 1)',
                'rgba(228, 241, 254, 1)',
                'rgba(228, 241, 254, 1)'
              ],
              pointBorderColor: [
                'rgba(36, 37, 42, 1)',
                'rgba(36, 37, 42, 1)',
                'rgba(36, 37, 42, 1)'
              ],
              label: 'Deformed',
              borderColor: '#c45850',
              fill: false
            }
          ]
        }}
        height={420}
        width={1100}
        options={{
          layout: {
            padding: {
              left: 25,
              right: 25,
              top: 50,
              bottom: 15
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
};

export default Beam;
