import React from 'react';

const BackgroundVideo = ({ weather }) => {
    const getVideoUrl = (weatherCode) => {
        // Weather code mapping for video backgrounds
        if (weatherCode >= 200 && weatherCode < 300) {
            return "assets/videos/thunder-strom.mp4"; // Thunderstorm
        }
        if (weatherCode >= 300 && weatherCode < 400) {
            return "assets/videos/drizzle.mp4"; // Drizzle
        }
        if (weatherCode >= 500 && weatherCode < 600) {
            return "assets/videos/rain.mp4"; // Rain
        }
        if (weatherCode >= 600 && weatherCode < 700) {
            return "assets/videos/snow.mp4"; // Snow
        }
        if (weatherCode >= 700 && weatherCode < 800) {
            return "assets/videos/atmoshfer.mp4"; // Atmosphere (fog, mist)
        }
        if (weatherCode === 800) {
            return "assets/videos/thunder-strom.mp4"; // Clear sky
        }
        if (weatherCode >= 801 && weatherCode < 900) {
            return "assets/videos/Clouds.mp4"; // Clouds
        }
        // Default video - sunny day
        return "assets/videos/sunny-day.mp4";
    };

    const videoUrl = weather ? getVideoUrl(weather.weather[0].id) : getVideoUrl(800);

    return (
        <div className="background-video-container">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="background-video"
            >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="video-overlay"></div>
        </div>
    );
};

export default BackgroundVideo; 