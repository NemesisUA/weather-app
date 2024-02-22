import React, { useEffect, useState } from 'react'
import './Sort.css'
import { useSelector, useDispatch } from 'react-redux';
import { sortTrips } from '../../store/tripSlice';

function Sort() {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const trips = useSelector(state => state.trips.trips);

  useEffect(() => {
    if (isChecked) {
      dispatch(sortTrips(trips))
    }
  }, [isChecked])

  return (
    <div className='sort-block'>
      <input
        type="checkbox"
        id='sort'
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label htmlFor='sort'>Sort by start date</label>
    </div>
  )
}

export default Sort