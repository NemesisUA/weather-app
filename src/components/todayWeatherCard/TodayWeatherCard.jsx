import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './TodayWeatherCard.css';
import getDayOfaWeek from '../../utils/getDayOfaWeek';
import CountDown from '../countDown/CountDown';

function TodayWeatherCard() {
  const [loading, setLoading] = useState(false);
  const [todayWeather, setTodayWeather] = useState(null);
  const activeTrip = useSelector(state => state.trips.activeTrip);

  useEffect(() => {
    async function fetchTodayWeather(param) {
      setLoading(true);

      try {
        const myApiKey = 'FZ9F2VRYXA295X39TLM8T9G53';
        const response = await fetch(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${param}/today?unitGroup=metric&include=days&key=${myApiKey}&contentType=json`
        );

        const data = await response.json();

        if (data) {
          setTodayWeather(data);
          setLoading(false);
        }
      } catch (e) {
        setLoading(false);
      }
    }

    fetchTodayWeather(activeTrip.activeCity);
  }, [activeTrip.activeCity])



  return loading ? (
    <div>Loading...</div>
  ) : todayWeather && (
    <div className='weather-card'>
      <h3>{getDayOfaWeek(new Date().toDateString())}</h3>
      <p className='today-weater'>
        <img
          src={`./assets/weatericons/${todayWeather.days[0].icon}.png`}
          alt={todayWeather.days[0].icon}
        />
        <span>{todayWeather.days[0].temp}<sup>&#8451;</sup></span>
      </p>
      <h2>{activeTrip.activeCity}</h2>
      <CountDown />
    </div>
  )
}

export default TodayWeatherCard