import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import TripsGallery from './components/tripsGallery/TripsGallery';
import TodayWeatherCard from './components/todayWeatherCard/TodayWeatherCard';
import './App.css';
import Modal from './components/modal/Modal';
import ForecastGallery from './components/forecastGallery/ForecastGallery';

import SearchForm from './components/searchForm/SearchForm';

function App() {
  const [modal, setModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const cityQuery = searchParams.get('city') || '';
  const needSort = searchParams.get('needSort') || false;

  return (
    <div className="container">
      <div className='trips-block'>
        <h1>Weather App</h1>
        {
          modal && (
            <Modal setModal={setModal} />
          )
        }

        < SearchForm className='search-block'
          setSearchParams={setSearchParams}
          cityQuery={cityQuery}
          needSort={needSort}
        />

        <div className='trips-wrapper'>
          <TripsGallery cityQuery={cityQuery} needSort={needSort} />

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
