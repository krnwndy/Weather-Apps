const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
const BASE_URL = "https://api.openweathermap.org/data/2.5"
const WEATHER_URL = `${BASE_URL}/weather`
const FORECAST_URL = `${BASE_URL}/forecast`

export async function fetchWeatherByCity(city) {
    const response = await fetch (
        `${WEATHER_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=id`
    )
    if (!response.ok) {
        throw new Error("Kota tidak ditemukan")
    }
    return response.json()
}

export async function fetchForecastByCity(city) {
    const response = await fetch(
        `${FORECAST_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=id`
    )
    if (!response.ok) {
        throw new Error("Kota tidak ditemukan")
    }
    return response.json()
}
