import React from "react";

const WeatherCard = ({ weather }) => {
    if (!weather) return null

    return(
        <div className="weather-card">
            <h2>{weather.name}</h2>
            <p className="weather-description">{weather.weather[0].description}</p>
            <div className="weather-info">
                <div className="weather-item">
                    <h3>Suhu</h3>
                    <p>{Math.round(weather.main.temp)}°C</p>
                </div>
                <div className="weather-item">
                    <h3>Kelembapan</h3>
                    <p>{weather.main.humidity}%</p>
                </div>
                <div className="weather-item">
                    <h3>Angin</h3>
                    <p>{weather.wind.speed} m/s</p>
                </div>
                <div className="weather-item">
                    <h3>Tekanan</h3>
                    <p>{weather.main.pressure} hPa</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;