import { useSelector } from "react-redux"
import TripCard from "../tripCard/TripCard"
import './TripsGallery.css'

function TripsGallery() {
  const trips = useSelector(state => state.trips.trips);

  return (
    <ul className="trips-gallery">
      {
        trips.map((trip) => (
          <TripCard key={trip.id} {...trip} />
        ))
      }
    </ul>
  )
}

export default TripsGallery