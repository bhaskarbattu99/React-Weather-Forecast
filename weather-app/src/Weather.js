// Import the React library, which is needed to create React components
import React from 'react';
import './Weather.css';

// Define a functional component named Weather that receives a 'weather' prop
const Weather = ({ weather }) => {
  // Destructure the 'weather' object to extract specific properties
  const { name, sys, main, weather: weatherDetails, wind, timezone } = weather;

  // Construct the URL for the country flag image using the country code from the 'sys' object
  const countryFlagUrl = `https://flagsapi.com/${sys.country}/flat/64.png`;

  // Get the weather icon code from the weatherDetails array:
  const weatherIconCode = weatherDetails[0].icon;
  // Construct the URL for the weather icon image:
  const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;

  // Function to get the current day name from a Date object
  const getDayName = (date) => {
    // Array containing the names of the days of the week
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // Return the name of the day for the given Date object
    return days[date.getDay()];
  };

  // Function to get the formatted date and time based on the city's timezone offset
  const getFormattedDateTime = (timezoneOffset) => {
    // Create a new Date object for the current date and time
    const date = new Date();
    // Convert the current date to UTC (removing the timezone information)
    const utcDate = new Date(date.toUTCString().slice(0, -4));
    // Calculate the local date and time based on the timezone offset
    const localDate = new Date(utcDate.getTime() + timezoneOffset * 1000);
    // Get the name of the day for the local date
    const dayName = getDayName(localDate);
    // Get the local date as a string
    const dateString = localDate.toLocaleDateString();
    // Get the local time as a string
    const timeString = localDate.toLocaleTimeString();
    // Return the formatted date and time string
    return `${dayName}, ${dateString}, <span className="time">${timeString}</span>`; 
  };

  // Get the formatted date and time based on the city's timezone
  const formattedDateTime = getFormattedDateTime(timezone);

  // Log the 'weather' data to the console for debugging purposes
  console.log(weather);

  // Return the JSX to render the weather card component
  return (
    <div className="weather-card">
      <h3 className='h3'>Current Weather</h3>
        <img className="weather-icon" src={weatherIconUrl} alt={weatherDetails[0].description} />
      {/* Render the city name and country flag */}
      <h2><i className="fas fa-map-marker-alt"></i> {name} <img className="country-flag" src={countryFlagUrl} alt={sys.country} /></h2>
      {/* Display the formatted date and time */}
      <p className="day-name" dangerouslySetInnerHTML={{ __html: formattedDateTime }}></p>
      {/* Render the temperature information */}
      <p className="weather-info">
        <i className="fas fa-thermometer-half"></i> Temperature: <span className="percentage">{main.temp}°C</span>
      </p>
      {/* Render the weather condition description with the icon */}
      <p className="weather-info">
        <i className="fas fa-cloud-sun"></i> Condition: {weatherDetails[0].description}
      </p>
      {/* Render the humidity information */}
      <p className="weather-info">
        <i className="fas fa-tint"></i> Humidity: <span className="percentage">{main.humidity}%</span>
      </p>
      {/* Render the wind speed information */}
      <p className="weather-info">
        <i className="fas fa-wind"></i> Wind Speed: <span className="percentage">{wind.speed} m/s</span>
      </p>
    </div>
    
  );
};

export default Weather;
