import { useSelector } from "react-redux"
import TripCard from "../tripCard/TripCard"
import './TripsGallery.css'

function TripsGallery({ cityQuery, needSort }) {
  const trips = useSelector(state => state.trips.trips);

  return (
    <ul className="trips-gallery">
      {
        needSort ? (
          trips
            .filter(trip => trip.city.includes(cityQuery))
            .sort((a, b) => a.startDate.localeCompare(b.startDate))
            .map((trip) => (
              <TripCard key={trip.id} {...trip} />
            ))
        ) : (
          trips
            .filter(trip => trip.city.includes(cityQuery))
            .sort((a, b) => a.id.localeCompare(b.id) ? -1 : 1)
            .map((trip) => (
              <TripCard key={trip.id} {...trip} />
            ))
        )
      }
    </ul>
  )
}

export default TripsGallery