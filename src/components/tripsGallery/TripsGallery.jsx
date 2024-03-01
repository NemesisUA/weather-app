import { useSelector } from "react-redux"
import { useState } from "react"
import TripCard from "../tripCard/TripCard"
import './TripsGallery.css'
import Pagination from '../pagination/Pagination.js'

function TripsGallery({ cityQuery, needSort }) {
  const trips = useSelector(state => state.trips.trips);
  const activeTrip = useSelector(state => state.trips.activeTrip);

  const [currentPage, setCurrentPage] = useState(1);
  const total = trips.length;
  const limitPerPage = 3;

  return (<div className='pagination-wrapper'>
    <ul className="trips-gallery">
      {
        needSort ? (
          trips
            .filter(trip => trip.city.toLowerCase().includes(cityQuery.toLowerCase()))
            .sort((a, b) => a.startDate.localeCompare(b.startDate))
            .slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage)
            .map((trip) => (
              <TripCard key={trip.id} isActive={trip.id === activeTrip.id} {...trip} />
            ))
        ) : (
          trips
            .filter(trip => trip.city.toLowerCase().includes(cityQuery.toLowerCase()))
            .slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage)
            .map((trip) => (
              <TripCard key={trip.id} isActive={trip.id === activeTrip.id} {...trip} />
            ))
        )
      }
    </ul>

    <div className="container">
      <Pagination
        currentPage={currentPage}
        total={total}
        limit={limitPerPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  </div>
  )
}

export default TripsGallery