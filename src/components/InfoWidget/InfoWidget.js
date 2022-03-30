import './InfoWidget.css';

function InfoWidget({title, value}) {
  return (
      <div className='overview'>
        <div className='overview-item'>
            <span className='overview-title'>{title}</span>
            <div className='overview-details'>
                <span className='overview-value'>{value}</span>       
            </div>
            <span className='overview-subtext text-muted'>This week</span>
        </div>
        </div>
  )
}

export default InfoWidget