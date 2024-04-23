import { useEffect, useState } from 'react';
import { fetchWeather } from "./weather"

interface WeatherData {
  temperature: number;
  city: string;
}

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const getWeather = async () => {
      const data = await fetchWeather();
      setWeatherData(data);
    };
    getWeather();
  }, []);

  return (
    <div>
      <h3>Current Weather</h3>
      {weatherData ? (
        <div>
          <p>City: {weatherData.city}</p>
          <p>Temperature: {weatherData.temperature}°C</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;

