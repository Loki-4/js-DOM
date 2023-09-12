
const apiKey = 'e6ea251bfedb99dbd42635aee8c05ba9';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=YourCityName&appid=${apiKey}&units=metric`;

const weatherDataElement = document.querySelector('.weather-data');

async function getWeatherData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    if (response.ok) {
      const cityName = data.name;
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      
      weatherDataElement.innerHTML = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Weather: ${description}</p>
      `;
    } else {
      weatherDataElement.textContent = 'Error fetching weather data';
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    weatherDataElement.textContent = 'Error fetching weather data';
  }
}

// Call
getWeatherData();
