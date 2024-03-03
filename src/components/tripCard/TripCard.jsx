import { useDispatch } from "react-redux";
import { setActiveTrip } from "../../store/tripSlice";
import './TripCard.css';
import formatDateString from "../../utils/formatDateString"

function TripCard({ id, city, startDate, endDate, isActive }) {
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
    <div
      className={isActive ? 'trip-card active-card' : 'trip-card'}
      onClick={handleClick}>
      <img
        className='city-img'
        src={`./assets/citiesImages/${city}.jpg`}
        alt={city} />
      <h2>{city}</h2>
      <p>{`${formatDateString(startDate)} - ${formatDateString(endDate)}`}</p>
    </div>
  )
}

export default TripCard