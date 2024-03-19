import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2';

ChartJs.register(
  ArcElement,
  Tooltip,
  Legend
)
export default function DoughnutChart({data, options}:any) {
  return (
    <>
      <div className='doughnut-container'>
        <Doughnut
          data={data}
          options={options} />
      </div>
    </>
  )
}