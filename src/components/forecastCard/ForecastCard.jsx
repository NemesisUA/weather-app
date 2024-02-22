import React from 'react'
import './ForecastCard.css'

function ForecastCard({ datetime, icon, tempmax, tempmin }) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Tursday', 'Friday', 'Saturday']

  return (
    <li className='forecast-card'>
      <p>{days[new Date(datetime).getDay()]}</p>
      <img src={`./assets/weatericons/${icon}.png`} alt={icon} />
      <p>{`${tempmax}\u00b0 / ${tempmin}\u00b0`}</p>
    </li>
  )
}

export default ForecastCard