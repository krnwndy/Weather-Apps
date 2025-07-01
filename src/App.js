import './App.css';
import React, { useState } from "react"
import SearchBar from "./components/SearchBar";
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
import BackgroundVideo from './components/BackgroundVideo';
import { fetchWeatherByCity, fetchForecastByCity } from './services/weatherApi';

const TEST_WEATHER_OPTIONS = [
  { label: 'Normal (API)', value: '' },
  { label: 'Thunderstorm', value: 201 },
  { label: 'Drizzle', value: 301 },
  { label: 'Rain', value: 501 },
  { label: 'Snow', value: 601 },
  { label: 'Atmosphere (Fog/Mist)', value: 741 },
  { label: 'Clear Sky', value: 800 },
  { label: 'Clouds', value: 802 },
  { label: 'Sunny Day (Default)', value: 9999 },
];

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [testWeatherCode, setTestWeatherCode] = useState("");

  const handleSearch = async (city) => {
    setLoading(true)
    setError("")
    try {
      // Fetch both current weather and forecast
      const [weatherData, forecastData] = await Promise.all([
        fetchWeatherByCity(city),
        fetchForecastByCity(city)
      ]);
      
      setWeather(weatherData)
      setForecast(forecastData)
    } catch (err) {
      setError(err.message)
      setWeather(null)
      setForecast(null)
    } 
    setLoading(false)
  }

  // Jika testWeatherCode dipilih, override weather untuk background video
  let backgroundWeather = weather;
  if (testWeatherCode) {
    backgroundWeather = {
      weather: [
        { id: Number(testWeatherCode) }
      ]
    };
  }

  return (
    <div className="App">
      <BackgroundVideo weather={backgroundWeather} />
      <div className="content">
        <h1>Weather App</h1>
        <div style={{ marginBottom: 20 }}>
          <label htmlFor="test-weather">Tes Cuaca: </label>
          <select
            id="test-weather"
            value={testWeatherCode}
            onChange={e => setTestWeatherCode(e.target.value)}
            style={{ padding: '8px', borderRadius: '8px', fontSize: '1rem' }}
          >
            {TEST_WEATHER_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        <SearchBar onSearch={handleSearch} />
        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}
        {weather && <WeatherCard weather={weather} />}
        {forecast && <ForecastCard forecast={forecast} />}
      </div>
    </div>
  );
}

export default App;
