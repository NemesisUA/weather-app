import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTrip, setActiveTrip } from '../../store/tripSlice';
import isformValid from '../../utils/isFormValid';
import './TripForm.css';

function TripForm({ setModal }) {
  const dispatch = useDispatch();

  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleAddTrip = (e) => {
    e.preventDefault();

    if (isformValid(city, startDate, endDate)) {
      const id = new Date().toISOString();
      dispatch(setActiveTrip({ id, activeCity: city, tripStart: startDate, tripEnd: endDate }))
      dispatch(addTrip({ id, city, startDate, endDate }));
      setModal(false);
    }
  }

  return (
    <div className="trip">
      <form autoComplete="off" >
        <label htmlFor="city">
          <span className="required">* City</span>
        </label>
        <select
          className="city"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}>
          <option value="" disabled >Plese select a city</option>
          <option value="Berlin">Berlin</option>
          <option value="Paris">Paris</option>
          <option value="Tokyo">Tokyo</option>
          <option value="London">London</option>
          <option value="Kyiv">Kyiv</option>
        </select>

        <label htmlFor="startDate">
          <span className="required">* Start Date</span>
        </label>
        <input
          type='date'
          className="startDate"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)} />

        <label htmlFor="endDate">
          <span className="required">* End Date</span>
        </label>
        <input
          type='date'
          className="endDate"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)} />

        <div className='form-buttons-wrapper'>
          <button onClick={() => setModal(false)}>
            Cancel
          </button>

          <button onClick={handleAddTrip}>
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default TripForm