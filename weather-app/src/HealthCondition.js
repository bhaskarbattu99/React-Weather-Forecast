// HealthCondition.js
import './HealthCondition.css';

const HealthCondition = ({ weather }) => {
  const { main, weather: weatherInfo } = weather;
  const healthConditions = [];

  // Check temperature conditions
  if (main.temp >20) {
    healthConditions.push({ message: "Stay hydrated and avoid prolonged exposure to the sun.", icon: "fas fa-sun" });
  } else if (main.temp < 5) {
    healthConditions.push({ message: "Dress warmly to prevent hypothermia.", icon: "fas fa-snowflake" });
  }

  // Check humidity conditions
  if (main.humidity > 20) {
    healthConditions.push({ message: "High humidity can cause discomfort; stay in cool places.", icon: "fas fa-tint" });
  }

  // Check weather conditions
  weatherInfo.forEach(condition => {
    if (condition.main === "Rain") {
      healthConditions.push({ message: "Carry an umbrella to stay dry.", icon: "fas fa-umbrella" });
    } else if (condition.main === "Clear") {
      healthConditions.push({ message: "A perfect day for outdoor activities.", icon: "fas fa-cloud-sun" });
    } else if (condition.main === "Snow") {
      healthConditions.push({ message: "Be cautious of slippery roads and walkways.", icon: "fas fa-snowman" });
    }
  });

  return (
    <div className="health-condition">
      <h2>Health Tips</h2>
      <ul>
        {healthConditions.map((condition, index) => (
          <li key={index}>
            <i className={condition.icon}></i> {condition.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthCondition;
