import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import './ForecastGallery.css'
import ForecastCard from "../forecastCard/ForecastCard";

function ForecastGallery() {
  const { activeCity, tripStart } = useSelector(state => state.trips.activeTrip);
  const [loading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);


  async function fetchTodayWeather(param, start, end) {
    setLoading(true);

    try {
      const myApiKey = 'FZ9F2VRYXA295X39TLM8T9G53';
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${param}/${start}/${end}?unitGroup=metric&include=days&key=${myApiKey}&contentType=json`
      );

      const data = await response.json();

      if (data) {
        setForecast(data);
        console.log('forecast', forecast);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTodayWeather(activeCity, tripStart, '2024-03-14');
  }, [])

  return loading ? (
    <p>Loading...</p>
  ) : forecast && (<div className="forecast-gallery">
    <h3>Trip Forecast:</h3>
    <ul className="forecast-list">
      {
        forecast?.days.map((day) => (
          <ForecastCard key={day.datetime} {...day} />
        ))
      }
    </ul>
  </div>
  )
}

export default ForecastGallery