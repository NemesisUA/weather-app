import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import './ForecastGallery.css'
import ForecastCard from "../forecastCard/ForecastCard";

function ForecastGallery() {
  const { activeCity, tripStart, tripEnd } = useSelector(state => state.trips.activeTrip);
  const [loading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    async function fetchTripForecast(param, start, end) {
      setLoading(true);

      try {
        const myApiKey = 'FZ9F2VRYXA295X39TLM8T9G53';
        const response = await fetch(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${param}/${start}/${end}?unitGroup=metric&include=days&key=${myApiKey}&contentType=json`
        );

        const data = await response.json();

        if (data) {
          setForecast(data);
          setLoading(false);
        }
      } catch (e) {
        setLoading(false);
      }
    }

    fetchTripForecast(activeCity, tripStart, tripEnd);
  }, [activeCity, tripStart, tripEnd])

  return forecast && (<div className="forecast-gallery">
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