import './chart.css';
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
  } from "recharts";

export default function Chart({data, title, dataKey, isGrid, xAxis}) {
  return (
    <div className='chart'>
        <h3 className='chart-title'>{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}> 
            <LineChart data={data}>
                <XAxis dataKey={xAxis} strokeWidth='1.5' />
                <Line type='monotone' dataKey={dataKey} stroke="#14aaef" />
                <Tooltip />
                {isGrid && <CartesianGrid stroke="#ebebeb" strokeDasharray='5 5' />}
                <Legend />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
// the aspect is for each 400 px width it will be 100 px 