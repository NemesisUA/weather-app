import { useEffect, useState } from 'react';
import TripsGallery from './components/tripsGallery/TripsGallery';
import TripForm from './components/newTripForm/TripForm';
import Search from './components/search/Search';
import TodayWeatherCard from './components/todayWeatherCard/TodayWeatherCard';
import './App.css';
import Modal from './components/modal/Modal';
import ForecastGallery from './components/forecastGallery/ForecastGallery';

function App() {
  const myApiKey = 'FZ9F2VRYXA295X39TLM8T9G53';
  const tripForecast = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[city]/[date1]/[date2]?unitGroup=metric&include=days&key=YOUR_API_KEY&contentType=json`
  //const todayForecast = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[city]/today?unitGroup=metric&include=days&key=YOUR_API_KEY&contentType=json`;


  const [city, setCity] = useState('');
  const [modal, setModal] = useState(false);


  return (
    <div className="container">
      <div className='trips-block'>
        <h1>Weather App</h1>
        {
          modal && (
            <Modal setModal={setModal} />
          )
        }
        {/* <Search
          city={city}
          setCity={setCity}
          handleSearch={handleSearch} /> */}

        <div className='trips-wrapper'>
          <TripsGallery trips={[{ name: 'lon' }, { name: 'ber' }]} />

          <button onClick={() => setModal(true)} className='open-modal-btn' >
            <span>+</span>
            <span>Add Trip</span>
          </button>
        </div>
        <ForecastGallery />
      </div>
      <TodayWeatherCard />
    </div>
  );
}

export default App;
