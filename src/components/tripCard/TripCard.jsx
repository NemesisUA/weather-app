import './TripCard.css'

function TripCard({ city, startDate, endDate }) {
  return (
    <div className='trip-card'>
      <img
        className='city-img'
        src={`./assets/citiesImages/${city}.png`}
        alt={city} />
      <h2>{city}</h2>
      <p><span>{startDate}</span> - <span>{endDate}</span></p>
    </div>
  )
}

export default TripCard