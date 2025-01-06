import './HourlyForecast.css';
// Defining the HourlyForecast component
const HourlyForecast = ({ hourlyForecast }) => {
    console.log(hourlyForecast);
    return (
        <div className="hourly-forecast">
            <h2>Hourly Forecast</h2>
            <div className="hourly-forecast-list">
                {hourlyForecast.map((hour, index) => (
                    <div key={index} className="hourly-forecast-item">
                        <p><i className={`fas ${getWeatherIconClass(hour.weather[0].main)}`}></i> </p>
                        <p>{new Date(hour.dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                        <p>{hour.main.temp} °C</p>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

// Helper function to get FontAwesome icon class based on weather condition
const getWeatherIconClass = (weatherCondition) => {
    switch (weatherCondition) {
        case 'Clear':
            return 'fa-sun';
        case 'Clouds':
            return 'fa-cloud';
        case 'Rain':
            return 'fa-cloud-showers-heavy';
        case 'Snow':
            return 'fa-snowflake';
        case 'Thunderstorm':
            return 'fa-bolt';
        default:
            return 'fa-cloud';
    }
};

export default HourlyForecast;
