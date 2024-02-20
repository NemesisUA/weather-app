import { useSelector } from "react-redux"
import TripCard from "../tripCard/TripCard"
import './TripsGallery.css'

function TripsGallery() {
  const trips = useSelector(state => state.trips.trips);

  const callTripModal = () => {
    // call modal window
    alert('modal!!!!')
  }

  console.log('trips-', trips);
  return (
    <ul className="trips-gallery">
      {
        trips.map((trip) => (
          <TripCard key={trip.id} {...trip} />
        ))
      }

      <li key={'add'}>
        <button onClick={callTripModal} >
          <span>+</span>
          <span>Add Trip</span>
        </button>
      </li>
    </ul>
  )
}

export default TripsGallery