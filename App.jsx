import React, { useState, useEffect } from 'react';

const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';

function App() {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    // Fetch current location
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      // Fetch weather data
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setTemperature(data.main.temp);
    });
  }, []);

  return (
    <div className="App">
      <h1>Weather App</h1>
      {temperature !== null ? (
        <p>Temperature: {temperature} °C</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
