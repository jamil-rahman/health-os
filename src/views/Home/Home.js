import Chart from '../../components/Charts/Chart';
import InfoWidget from '../../components/InfoWidget/InfoWidget';
import './Home.css';
import {storeData} from '../../dummyData'

function Home() {
  return (
    <div className='home'>
        <h3 className='heading'>Oveview</h3>
        <div className='widgets'>
        <InfoWidget title='Orders' value='33' />
        <InfoWidget title='Total Sales' value='BDT 2,918' />
        <InfoWidget title='Product Views' value='19,121' />
        </div>
    <Chart data={storeData} title='Store Visits Analysis' isGrid={true} dataKey="Store Views" xAxis="month"/>
    </div>
  )
}

export default Home