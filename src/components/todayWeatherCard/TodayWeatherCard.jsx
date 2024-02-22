import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './TodayWeatherCard.css'

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
  ) : (
    <div className='weather-card'>
      <h2>{todayWeather?.days[0].datatime}</h2>
      <p>{todayWeather?.days[0].temp}<sup>&#8451;</sup></p>
      <h3>{activeTrip.activeCity}</h3>
      <p>Today is:</p>
      <p>{new Date(todayWeather?.days[0].datetime).toDateString()}</p>
      <p>Trip starts:</p>
      <p>{activeTrip.tripStart}</p>
    </div>
  )
}

export default TodayWeatherCard