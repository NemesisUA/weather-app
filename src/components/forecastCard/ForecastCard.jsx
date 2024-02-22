import getDayOfaWeek from '../../utils/getDayOfaWeek'
import './ForecastCard.css'

function ForecastCard({ datetime, icon, tempmax, tempmin }) {

  return (
    <li className='forecast-card'>
      <p>{getDayOfaWeek(datetime)}</p>
      <img src={`./assets/weatericons/${icon}.png`} alt={icon} />
      <p>{`${tempmax}\u00b0 / ${tempmin}\u00b0`}</p>
    </li>
  )
}

export default ForecastCard