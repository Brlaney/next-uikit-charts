import { Bar, defaults } from 'react-chartjs-2'

defaults.global.legend.display = false
defaults.global.defaultFontFamily = 'Sans-serif'

const TextMessages = () => {
  return (
    <div className='uk-height-large uk-flex uk-flex-center uk-flex-middle uk-margin'>
      <Bar
        data={{
          datasets: [
            {
              data: [
                { x: '2020-2-22', y: 4 },
                { x: '2020-2-23', y: 1 },
                { x: '2020-2-24', y: 10 },
                { x: '2020-2-25', y: 2 },
                { x: '2020-2-26', y: 10 },
                { x: '2020-2-27', y: 18 },
                { x: '2020-2-28', y: 9 },
                { x: '2020-2-29', y: 4 },
                { x: '2020-3-1', y: 1 },
                { x: '2020-3-2', y: 5 },
                { x: '2020-3-3', y: 17 },
                { x: '2020-3-5', y: 12 },
                { x: '2020-3-6', y: 15 },
                { x: '2020-3-7', y: 13 },
                { x: '2020-3-9', y: 16 },
                { x: '2020-3-10', y: 16 },
                { x: '2020-3-11', y: 4 },
                { x: '2020-3-12', y: 9 },
                { x: '2020-3-13', y: 8 },
                { x: '2020-3-14', y: 11 },
                { x: '2020-3-15', y: 25 },
                { x: '2020-3-16', y: 1 },
                { x: '2020-3-17', y: 1 },
                { x: '2020-3-19', y: 18 },
                { x: '2020-3-20', y: 1 },
                { x: '2020-3-21', y: 7 },
                { x: '2020-3-22', y: 1 },
                { x: '2020-3-23', y: 1 },
                { x: '2020-3-24', y: 3 },
                { x: '2020-3-25', y: 3 },
                { x: '2020-3-26', y: 4 },
                { x: '2020-3-27', y: 4 },
                { x: '2020-3-28', y: 11 },
                { x: '2020-3-30', y: 2 },
                { x: '2020-3-31', y: 6 },
                { x: '2020-4-1', y: 13 },
                { x: '2020-4-2', y: 8 },
                { x: '2020-4-3', y: 3 },
                { x: '2020-4-4', y: 6 },
                { x: '2020-4-5', y: 6 },
                { x: '2020-4-6', y: 6 },
                { x: '2020-4-7', y: 5 },
                { x: '2020-4-8', y: 1 },
                { x: '2020-4-9', y: 1 },
                { x: '2020-4-10', y: 1 },
                { x: '2020-4-11', y: 4 },
                { x: '2020-4-12', y: 2 },
                { x: '2020-4-14', y: 3 },
                { x: '2020-4-15', y: 3 },
                { x: '2020-4-16', y: 4 },
                { x: '2020-4-21', y: 2 },
                { x: '2020-4-23', y: 5 },
                { x: '2020-4-24', y: 2 },
                { x: '2020-4-25', y: 1 },
                { x: '2020-4-26', y: 5 },
                { x: '2020-4-27', y: 3 },
                { x: '2020-4-29', y: 4 },
                { x: '2020-4-30', y: 1 },
                { x: '2020-5-1', y: 2 },
                { x: '2020-5-2', y: 1 },
                { x: '2020-5-4', y: 16 },
                { x: '2020-5-5', y: 46 },
                { x: '2020-5-6', y: 49 },
                { x: '2020-5-7', y: 4 },
                { x: '2020-5-8', y: 8 },
                { x: '2020-5-10', y: 1 },
                { x: '2020-5-11', y: 1 },
                { x: '2020-5-12', y: 4 },
                { x: '2020-5-13', y: 1 },
                { x: '2020-5-14', y: 2 },
                { x: '2020-5-16', y: 1 },
                { x: '2020-5-17', y: 1 },
                { x: '2020-5-18', y: 2 },
                { x: '2020-5-19', y: 2 },
                { x: '2020-5-21', y: 1 },
                { x: '2020-5-22', y: 1 },
                { x: '2020-5-23', y: 1 },
                { x: '2020-5-24', y: 2 },
                { x: '2020-5-27', y: 1 },
                { x: '2020-5-28', y: 2 },
                { x: '2020-5-29', y: 5 },
                { x: '2020-5-30', y: 1 },
                { x: '2020-5-31', y: 1 },
                { x: '2020-6-1', y: 4 },
                { x: '2020-6-2', y: 5 },
                { x: '2020-6-3', y: 24 },
                { x: '2020-6-4', y: 3 },
                { x: '2020-6-6', y: 1 },
                { x: '2020-6-7', y: 6 },
                { x: '2020-6-9', y: 18 },
                { x: '2020-6-10', y: 1 },
                { x: '2020-6-11', y: 16 },
                { x: '2020-6-12', y: 4 },
                { x: '2020-6-13', y: 3 },
                { x: '2020-6-14', y: 11 },
                { x: '2020-6-15', y: 4 },
                { x: '2020-6-16', y: 7 },
                { x: '2020-6-18', y: 1 },
                { x: '2020-6-19', y: 25 },
                { x: '2020-6-20', y: 4 },
                { x: '2020-6-21', y: 6 },
                { x: '2020-6-22', y: 3 },
                { x: '2020-6-23', y: 10 },
                { x: '2020-6-24', y: 12 },
                { x: '2020-6-25', y: 3 },
                { x: '2020-6-26', y: 10 },
                { x: '2020-6-27', y: 18 },
                { x: '2020-6-28', y: 46 },
                { x: '2020-6-29', y: 25 },
                { x: '2020-7-1', y: 6 },
                { x: '2020-7-2', y: 12 },
                { x: '2020-7-3', y: 5 },
                { x: '2020-7-4', y: 8 },
                { x: '2020-7-5', y: 6 },
                { x: '2020-7-6', y: 17 },
                { x: '2020-7-7', y: 6 },
                { x: '2020-7-8', y: 10 },
                { x: '2020-7-9', y: 16 },
                { x: '2020-7-10', y: 3 },
                { x: '2020-7-11', y: 11 },
                { x: '2020-7-12', y: 6 },
                { x: '2020-7-13', y: 10 },
                { x: '2020-7-14', y: 16 },
                { x: '2020-7-15', y: 8 },
                { x: '2020-7-16', y: 2 },
                { x: '2020-7-17', y: 11 },
                { x: '2020-7-18', y: 8 },
                { x: '2020-7-19', y: 2 },
                { x: '2020-7-20', y: 5 },
                { x: '2020-7-21', y: 1 },
                { x: '2020-7-22', y: 4 },
                { x: '2020-7-23', y: 1 },
                { x: '2020-7-24', y: 11 },
                { x: '2020-7-25', y: 11 },
                { x: '2020-7-26', y: 9 },
                { x: '2020-7-27', y: 11 },
                { x: '2020-7-28', y: 7 },
                { x: '2020-7-29', y: 8 },
                { x: '2020-7-30', y: 16 },
                { x: '2020-7-31', y: 10 },
                { x: '2020-8-1', y: 4 },
                { x: '2020-8-2', y: 2 },
                { x: '2020-8-3', y: 19 },
                { x: '2020-8-4', y: 5 },
                { x: '2020-8-5', y: 6 },
                { x: '2020-8-6', y: 3 },
                { x: '2020-8-7', y: 6 },
                { x: '2020-8-8', y: 12 },
                { x: '2020-8-9', y: 3 },
                { x: '2020-8-10', y: 6 },
                { x: '2020-8-11', y: 5 },
                { x: '2020-8-12', y: 5 },
                { x: '2020-8-13', y: 12 },
                { x: '2020-8-14', y: 14 },
                { x: '2020-8-15', y: 5 },
                { x: '2020-8-17', y: 5 },
                { x: '2020-8-18', y: 15 },
                { x: '2020-8-19', y: 4 },
                { x: '2020-8-20', y: 8 },
                { x: '2020-8-21', y: 2 },
                { x: '2020-8-22', y: 15 },
                { x: '2020-8-23', y: 12 },
                { x: '2020-8-24', y: 15 },
                { x: '2020-8-25', y: 6 },
                { x: '2020-8-27', y: 14 },
                { x: '2020-8-28', y: 13 },
                { x: '2020-8-30', y: 10 },
                { x: '2020-8-31', y: 4 },
                { x: '2020-9-3', y: 7 },
                { x: '2020-9-4', y: 4 },
                { x: '2020-9-5', y: 2 },
                { x: '2020-9-6', y: 2 },
                { x: '2020-9-9', y: 3 },
                { x: '2020-9-10', y: 2 },
                { x: '2020-9-11', y: 18 },
                { x: '2020-9-12', y: 14 },
                { x: '2020-9-13', y: 3 },
                { x: '2020-9-14', y: 5 },
                { x: '2020-9-15', y: 9 },
                { x: '2020-9-20', y: 8 },
                { x: '2020-9-21', y: 5 },
                { x: '2020-9-25', y: 3 },
                { x: '2020-9-26', y: 11 },
                { x: '2020-9-27', y: 1 },
                { x: '2020-10-2', y: 4 },
                { x: '2020-10-3', y: 1 },
                { x: '2020-10-4', y: 19 },
                { x: '2020-10-5', y: 6 },
                { x: '2020-10-6', y: 11 },
                { x: '2020-10-7', y: 7 },
                { x: '2020-10-10', y: 9 },
                { x: '2020-10-11', y: 12 },
                { x: '2020-10-12', y: 10 },
                { x: '2020-10-13', y: 19 },
                { x: '2020-10-14', y: 20 },
                { x: '2020-10-15', y: 3 },
                { x: '2020-10-17', y: 9 },
                { x: '2020-10-18', y: 6 },
                { x: '2020-10-19', y: 2 },
                { x: '2020-10-20', y: 12 },
                { x: '2020-10-21', y: 21 },
                { x: '2020-10-22', y: 30 },
                { x: '2020-10-23', y: 21 },
                { x: '2020-10-24', y: 8 },
                { x: '2020-10-25', y: 1 },
                { x: '2020-10-26', y: 15 },
                { x: '2020-10-27', y: 5 },
                { x: '2020-10-28', y: 4 },
                { x: '2020-10-29', y: 4 },
                { x: '2020-10-30', y: 4 },
                { x: '2020-10-31', y: 10 },
                { x: '2020-11-1', y: 3 },
                { x: '2020-11-2', y: 9 },
                { x: '2020-11-3', y: 10 },
                { x: '2020-11-4', y: 21 },
                { x: '2020-11-5', y: 4 },
                { x: '2020-11-7', y: 5 },
                { x: '2020-11-8', y: 5 },
                { x: '2020-11-9', y: 3 },
                { x: '2020-11-10', y: 9 },
                { x: '2020-11-11', y: 11 },
                { x: '2020-11-12', y: 18 },
                { x: '2020-11-13', y: 9 },
                { x: '2020-11-14', y: 10 },
                { x: '2020-11-15', y: 7 },
                { x: '2020-11-16', y: 4 },
                { x: '2020-11-17', y: 2 },
                { x: '2020-11-20', y: 7 },
                { x: '2020-11-21', y: 5 },
                { x: '2020-11-22', y: 4 },
                { x: '2020-11-23', y: 2 },
                { x: '2020-11-24', y: 9 },
                { x: '2020-11-25', y: 1 },
                { x: '2020-11-27', y: 3 },
                { x: '2020-11-28', y: 7 },
                { x: '2020-11-29', y: 2 },
                { x: '2020-11-30', y: 5 },
                { x: '2020-12-1', y: 8 },
                { x: '2020-12-2', y: 3 },
                { x: '2020-12-4', y: 4 },
                { x: '2020-12-5', y: 3 },
                { x: '2020-12-6', y: 4 },
                { x: '2020-12-7', y: 3 },
                { x: '2020-12-8', y: 2 },
                { x: '2020-12-9', y: 2 },
                { x: '2020-12-11', y: 4 },
                { x: '2020-12-12', y: 6 },
                { x: '2020-12-13', y: 3 },
                { x: '2020-12-15', y: 3 },
                { x: '2020-12-16', y: 11 },
                { x: '2020-12-18', y: 5 },
                { x: '2020-12-19', y: 3 },
                { x: '2020-12-20', y: 8 },
                { x: '2020-12-21', y: 7 },
                { x: '2020-12-22', y: 10 },
                { x: '2020-12-23', y: 2 },
                { x: '2020-12-24', y: 7 },
                { x: '2020-12-25', y: 2 },
                { x: '2020-12-26', y: 7 },
                { x: '2020-12-27', y: 3 },
                { x: '2020-12-29', y: 9 },
                { x: '2020-12-30', y: 8 },
                { x: '2020-12-31', y: 6 },
                { x: '2021-1-1', y: 1 },
                { x: '2021-1-2', y: 6 },
                { x: '2021-1-3', y: 4 },
                { x: '2021-1-4', y: 6 },
                { x: '2021-1-5', y: 8 },
                { x: '2021-1-6', y: 7 },
                { x: '2021-1-7', y: 3 },
                { x: '2021-1-8', y: 3 },
                { x: '2021-1-9', y: 2 },
                { x: '2021-1-10', y: 5 },
                { x: '2021-1-11', y: 15 },
                { x: '2021-1-13', y: 4 },
                { x: '2021-1-14', y: 3 },
                { x: '2021-1-15', y: 5 },
                { x: '2021-1-16', y: 1 },
                { x: '2021-1-17', y: 6 },
                { x: '2021-1-18', y: 2 },
                { x: '2021-1-19', y: 1 },
                { x: '2021-1-20', y: 8 },
                { x: '2021-1-21', y: 4 },
                { x: '2021-1-22', y: 3 },
                { x: '2021-1-23', y: 7 },
                { x: '2021-1-24', y: 18 },
                { x: '2021-1-25', y: 24 },
                { x: '2021-1-26', y: 36 },
                { x: '2021-1-27', y: 23 },
                { x: '2021-1-28', y: 26 },
                { x: '2021-1-29', y: 19 },
                { x: '2021-1-30', y: 21 },
                { x: '2021-1-31', y: 8 },
                { x: '2021-2-1', y: 5 },
                { x: '2021-2-2', y: 4 },
                { x: '2021-2-3', y: 4 },
                { x: '2021-2-4', y: 7 },
                { x: '2021-2-5', y: 7 },
                { x: '2021-2-6', y: 8 },
                { x: '2021-2-7', y: 6 },
                { x: '2021-2-8', y: 11 },
                { x: '2021-2-9', y: 10 },
                { x: '2021-2-10', y: 12 },
                { x: '2021-2-11', y: 12 },
                { x: '2021-2-12', y: 3 },
                { x: '2021-2-13', y: 4 },
                { x: '2021-2-14', y: 5 },
                { x: '2021-2-15', y: 7 },
                { x: '2021-2-16', y: 7 },
                { x: '2021-2-17', y: 25 },
                { x: '2021-2-18', y: 35 },
                { x: '2021-2-19', y: 31 },
                { x: '2021-2-20', y: 9 },
                { x: '2021-2-21', y: 4 },
                { x: '2021-2-22', y: 2 },
                { x: '2021-2-23', y: 6 },
                { x: '2021-2-24', y: 2 },
                { x: '2021-2-25', y: 8 },
                { x: '2021-2-26', y: 7 },
                { x: '2021-2-27', y: 3 },
                { x: '2021-2-28', y: 22 },
                { x: '2021-3-1', y: 8 },
                { x: '2021-3-2', y: 8 },
                { x: '2021-3-3', y: 2 },
                { x: '2021-3-4', y: 1 },
                { x: '2021-3-5', y: 5 },
                { x: '2021-3-6', y: 8 },
                { x: '2021-3-7', y: 7 },
                { x: '2021-3-8', y: 4 },
                { x: '2021-3-9', y: 11 },
                { x: '2021-3-10', y: 7 },
                { x: '2021-3-13', y: 3 },
                { x: '2021-3-14', y: 5 },
                { x: '2021-3-15', y: 14 },
                { x: '2021-3-16', y: 23 },
                { x: '2021-3-17', y: 11 },
                { x: '2021-3-18', y: 12 },
                { x: '2021-3-19', y: 7 },
                { x: '2021-3-20', y: 12 },
                { x: '2021-3-21', y: 20 },
                { x: '2021-3-22', y: 8 }
              ],
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
            },
          },
        }}
      />
    </div>
  )
}

export default TextMessages;
