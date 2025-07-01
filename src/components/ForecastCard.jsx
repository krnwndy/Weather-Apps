import React from "react";

const ForecastCard = ({ forecast }) => {
    if (!forecast || !forecast.list) return null;

    // Group forecast data by day (every 24 hours)
    const dailyForecast = forecast.list.filter((item, index) => index % 8 === 0).slice(0, 7);

    const getDayName = (dateString) => {
        const date = new Date(dateString);
        const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        return days[date.getDay()];
    };

    const getWeatherIcon = (weatherCode) => {
        // Simple weather icon mapping
        if (weatherCode >= 200 && weatherCode < 300) return '⛈️'; // Thunderstorm
        if (weatherCode >= 300 && weatherCode < 400) return '🌧️'; // Drizzle
        if (weatherCode >= 500 && weatherCode < 600) return '🌧️'; // Rain
        if (weatherCode >= 600 && weatherCode < 700) return '❄️'; // Snow
        if (weatherCode >= 700 && weatherCode < 800) return '🌫️'; // Atmosphere
        if (weatherCode === 800) return '☀️'; // Clear
        if (weatherCode >= 801 && weatherCode < 900) return '☁️'; // Clouds
        return '🌤️';
    };

    return (
        <div className="forecast-card">
            <h3>Perkiraan 7 Hari Kedepan</h3>
            <div className="forecast-grid">
                {dailyForecast.map((day, index) => (
                    <div key={index} className="forecast-item">
                        <div className="forecast-day">
                            {getDayName(day.dt_txt)}
                        </div>
                        <div className="forecast-icon">
                            {getWeatherIcon(day.weather[0].id)}
                        </div>
                        <div className="forecast-temp">
                            <span className="temp-max">{Math.round(day.main.temp_max)}°</span>
                            <span className="temp-min">{Math.round(day.main.temp_min)}°</span>
                        </div>
                        <div className="forecast-desc">
                            {day.weather[0].description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ForecastCard; 