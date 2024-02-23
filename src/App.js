import { useState } from 'react';
import TripsGallery from './components/tripsGallery/TripsGallery';
import TodayWeatherCard from './components/todayWeatherCard/TodayWeatherCard';
import './App.css';
import Modal from './components/modal/Modal';
import ForecastGallery from './components/forecastGallery/ForecastGallery';
import Search from './components/search/Search';
import Sort from './components/sort/Sort';

function App() {
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

        <div className='search-block'>
          <Search />
          <Sort />
        </div>

        <div className='trips-wrapper'>
          <TripsGallery />

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
