// Importing necessary modules and components
import React, { useState } from 'react';
import axios from 'axios';
import Weather from './Weather';
import Forecast from './Forecast';
import HourlyForecast from './HourlyForecast'; 
import HealthCondition from './HealthCondition'; 
import Footer from './Footer';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Defining the main App component
const App = () => {
    // Declaring state variables using useState hook
    const [city, setCity] = useState(''); // City name input by the user
    const [weather, setWeather] = useState(null); // Current weather data
    const [hourlyForecast, setHourlyForecast] = useState([]); // Current day's hourly forecast data
    const [forecast, setForecast] = useState([]); // Weather forecast data
    const [error, setError] = useState(''); // Error message for invalid city
    const [darkMode, setDarkMode] = useState(false); // Toggle for dark mode

    // Function to handle search action
    const handleSearch = async () => {
        try {
            const apiKey = 'a0f75694caf21e192b09ed8c5438f382'; // API key for OpenWeatherMap
            const weatherResponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            ); // Fetching current weather data
            setWeather(weatherResponse.data); // Setting the weather state
            setError(''); // Clearing any previous error message

            const forecastResponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
            ); // Fetching weather forecast data
            const dailyForecast = forecastResponse.data.list.filter(item => item.dt_txt.includes("12:00:00"));
            setForecast(dailyForecast.slice(0, 5)); // Setting daily forecast state 

            const hourlyResponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
            ); 
            // Fetching hourly forecast data
            const today = new Date().toISOString().split('T')[0];
            // console.log(today);
            const hourlyForecastData = hourlyResponse.data.list.filter(item => item.dt_txt.includes(today));
            setHourlyForecast(hourlyForecastData);
        } catch (error) {
            setError('Oops! That city name doesn\'t seem right. Try again'); // error message if API call fails
            setWeather(null); // Clearing weather state
            setForecast([]); // Clearing forecast state
            setHourlyForecast([]); // Clearing hourly forecast state
        }                   
    };

    // Function to handle Enter key press event
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch(); // Trigger search on Enter key press
        }
    };

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode); // Toggle dark mode state
    };

    // Render the app UI
    return (
        <div className={darkMode ? 'app dark-mode' : 'app light-mode'}>
            <h1 className="main-heading">Weather Report</h1>
            <button onClick={toggleDarkMode} className="mode-toggle">
                {darkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
            </button>
            <div className="search-bar">
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Specify a city name"
                    className="search-input"
                />
                <button onClick={handleSearch} className="search-button">Look for</button>
            </div>
            {error && <p className="error-message">{error}</p>}
             
            <div className='both'>
            {weather && <Weather weather={weather} />}
            <div className='hour-health'>{hourlyForecast.length > 0 && <HourlyForecast hourlyForecast={hourlyForecast} />} 
            {weather && <HealthCondition weather={weather} />}</div>
            
           
            </div>
            {forecast.length > 0 && <Forecast forecast={forecast} />}
            <Footer />
        </div>
    );
};

export default App;
