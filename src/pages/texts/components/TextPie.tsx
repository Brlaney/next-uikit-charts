import { Pie } from 'react-chartjs-2';

const TextPie = () => {
  return (
    <>
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
        height={800}
        width={800}
        options={{
          layout: {
            padding: {
              left: 20,
              right: 20,
              top: 20,
              bottom: 20
            },
            margin: {
              left: 20,
              right: 20,
              top: 20,
              bottom: 20
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
    </>
  )
};

export default TextPie;
