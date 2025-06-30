import React from "react";
const WeatherCard = ({weather}) => {
    if (!weather) return null

    return(
        <div className="weather-card">
            <h2>{weather.name}</h2>
            <p>{weather.weather[0].description}</p>
            <p>Suhu: {weather.main.temp}°C</p>
            <p>Kelembapan: {weather.main.humidity}</p>
            <p>Angin{weather.wind.speed} m/s</p>
        </div>

    )
}

export default WeatherCard;