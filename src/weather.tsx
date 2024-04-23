const API_KEY = 'd29d332e8c753e19ffbb3c480405a843';

export async function fetchWeather() {
  try {
    // Fetch weather data for Edmond, Oklahoma
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Edmond, US&appid=${API_KEY}&units=metric`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();
    console.log('Weather data:', data); // Log the entire data object
    return {
      temperature: data.main.temp,
      city: data.name
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}
