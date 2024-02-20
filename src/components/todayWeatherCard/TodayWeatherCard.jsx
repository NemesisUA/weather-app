import './TodayWeatherCard.css'

function TodayWeatherCard({ city, today, temp }) {

  return (
    <div className='weather-card'>
      <h2>{today}</h2>
      <p>{temp}<sup>&#8451;</sup></p>
      <h3>{city}</h3>
    </div>
  )
}

export default TodayWeatherCard