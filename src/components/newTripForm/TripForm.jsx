import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTrip } from '../../store/tripSlice';
import './TripForm.css';

function TripForm() {
  const dispatch = useDispatch();

  const [city, setCity] = useState('')


  const handleAddTrip = (e) => {
    e.preventDefault();
    dispatch(addTrip({ city }));
    console.log('cyty-', city);
  }

  return (
    <div className="trip">
      <form autoComplete="off" onSubmit={handleAddTrip}>
        <label htmlFor="city">
          <span className="required">* City</span>
        </label>
        <input
          className="city"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)} />

        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default TripForm