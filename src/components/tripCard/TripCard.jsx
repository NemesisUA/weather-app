import { useDispatch } from "react-redux";
import { setActiveTrip } from "../../store/tripSlice";
import './TripCard.css';

function TripCard({ id, city, startDate, endDate }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setActiveTrip({
      id: id,
      activeCity: city,
      tripStart: startDate,
      tripEnd: endDate,
    }))
  }

  return (
    <div className='trip-card' onClick={handleClick}>
      <img
        className='city-img'
        src={`./assets/citiesImages/${city}.jpg`}
        alt={city} />
      <h2>{city}</h2>
      <p><span>{startDate}</span> - <span>{endDate}</span></p>
    </div>
  )
}

export default TripCard