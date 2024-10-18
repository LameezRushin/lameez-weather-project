import React, { useState } from "react";
import axios, {isCancel, AxiosError} from 'axios';

export default function Weather(props) {
  let [city, setCity] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit() {
    Event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=5201594abea9f3e38b70e65b11a80c24&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="weatherApp">
      <h1>Weather App</h1>
      <form className="weather" onSubmit={handleSubmit}>
        <input
          className="search"
          type="search"
          autoFocus
          placeholder="Enter a City"
          onChange={updateCity}
        />
        <input className="submit" type="submit" value="Search" />
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>
            Temperature: <strong>{Math.round(weather.temperature)}°C</strong>
          </li>
          <li>
            Description: <strong>{weather.description}</strong>
          </li>
          <li>
            Humidity: <strong>{weather.humidity}%</strong>
          </li>
          <li>
            Wind: <strong>{weather.wind}km/h</strong>
          </li>
          <li>
            <img src={weather.icon} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
