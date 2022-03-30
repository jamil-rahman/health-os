import React from 'react';
import InfoWidget from '../../components/InfoWidget/InfoWidget';
import './Home.css';

function Home() {
  return (
    <div className='home'>
        <InfoWidget title='Orders' value='33' />
        <InfoWidget title='Total Sales' value='BDT 2,918' />
        <InfoWidget title='Product Views' value='19,121' />
    </div>
  )
}

export default Home