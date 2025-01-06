
import './Forecast.css';

// Define a functional component named Forecast
const Forecast = ({ forecast }) => {
    // Function to get the day name from a date string
    const getDayName = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { weekday: 'long' });
    };

    // Function to check if a given date string is today's date
    const isToday = (dateStr) => {
        const today = new Date();
        const date = new Date(dateStr);
        return date.getDate() === today.getDate() &&
               date.getMonth() === today.getMonth() &&
               date.getFullYear() === today.getFullYear();
    };

    // Filter the forecast data to exclude today's date
    const filteredForecast = forecast.filter(item => !isToday(item.dt_txt));

    // Log the forecast data to the console
    console.log(forecast);

    // Return the JSX to render the forecast
    return (
        <div className="forecast">
            <div className="forecast-header">
                <marquee direction="right">
                    <h1> Atmospheric Forecast-Weather</h1>
                </marquee>
            </div>
            {/* Container for the forecast cards */}
            <div className="forecast-cards">
                {/* Map through the filtered forecast data and create a card for each item */}
                {filteredForecast.map((item, index) => {
                    // Get the weather icon code from the weather array
                    const weatherIconCode = item.weather[0].icon;
                    // Construct the URL for the weather icon image
                    const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;

                    return (
                        <div key={index} className="forecast-card">
                            <img className="forecast-icon" src={weatherIconUrl} alt={item.weather[0].description} />
                           <p className="forecast-day">{getDayName(item.dt_txt)}</p>
                            <p className="forecast-date">{new Date(item.dt_txt).toLocaleDateString()}</p>
                            <p className="forecast-temp">
                                <i className="fas fa-thermometer-half"></i> Temp: <span className="percentage">{item.main.temp}°C</span>
                            </p>
                            <p className="forecast-condition">
                                <i className="fas fa-cloud-sun"></i> Condition: {item.weather[0].description} 
                            </p>
                            <p className="forecast-humidity">
                                <i className="fas fa-tint"></i> Humidity: <span className="percentage">{item.main.humidity}%</span>
                            </p>
                            <p className="forecast-wind">
                                <i className="fas fa-wind"></i> Wind Speed: <span className="percentage">{item.wind.speed} m/s</span>
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Forecast;
