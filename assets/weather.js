var lat = '48.7596';
var lon = '-113.7870';
var apiKey = '8cec26e69161f7f456b3daae120c0839';

// Update the units to 'imperial' to get temperatures in Fahrenheit
var currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

function getWeatherForecast() {
  // Fetch current weather
  fetch(currentWeatherUrl)
    .then(response => response.json())
    .then(currentWeatherData => {
      displayCurrentWeather(currentWeatherData);
      // Fetch forecast after current weather is successfully retrieved
      return fetch(forecastUrl);
    })
    .then(response => response.json())
    .then(forecastData => {
      displayWeatherForecast(forecastData);
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}

function displayCurrentWeather(weatherData) {
  var currentWeatherElement = document.getElementById('current-weather');
  var date = new Date(weatherData.dt * 1000).toDateString();
  var iconCode = weatherData.weather[0].icon;
  var iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
  var temperature = weatherData.main.temp;
  var humidity = weatherData.main.humidity;
  var windSpeed = weatherData.wind.speed;

  currentWeatherElement.innerHTML = `
    <h2>Current Weather for Glacier National Park</h2>
    <p><strong>Date:</strong> ${date}</p>
    <img src="${iconUrl}" alt="${weatherData.weather[0].description}">
    <p><strong>Temperature:</strong> ${temperature}°F</p>
    <p><strong>Humidity:</strong> ${humidity}%</p>
    <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
  `;
}

function displayWeatherForecast(weatherData) {
  var forecastElement = document.getElementById('weather-forecast');
  forecastElement.innerHTML = '<h2>5-Day Forecast</h2>';

  weatherData.list.forEach(function(forecast, index) {
    if (index % 8 === 0) {
      var date = new Date(forecast.dt * 1000).toDateString();
      var iconCode = forecast.weather[0].icon;
      var iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
      var temperature = forecast.main.temp;
      var humidity = forecast.main.humidity;
      var windSpeed = forecast.wind.speed;

      var forecastDiv = document.createElement('div');
      forecastDiv.className = 'weather-forecast-item';
      forecastDiv.innerHTML = `
        <p><strong>Date:</strong> ${date}</p>
        <img src="${iconUrl}" alt="${forecast.weather[0].description}">
        <p><strong>Temperature:</strong> ${temperature}°F</p>
        <p><strong>Humidity:</strong> ${humidity}%</p>
        <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
      `;
      forecastElement.appendChild(forecastDiv);
    }
  });
}

getWeatherForecast();
