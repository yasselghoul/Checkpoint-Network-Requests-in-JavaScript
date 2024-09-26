const apiKey = ''; 

const cityInput = document.getElementById('cityInput');
const locationElement = document.querySelector('.location');
const temperatureElement = document.querySelector('.temperature');
const descriptionElement = document.querySelector('.description');

function getWeatherData() {
  const city = cityInput.value.trim();
  if (!city) return; 

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temperature = Math.floor(data.main.temp - 273.15); 
      const description = data.weather[0].main;
      const location = data.name;

      locationElement.textContent = location;
      temperatureElement.textContent = `${temperature}°C`;
      descriptionElement.textContent = description;
    })
    .catch(error => console.error(error));
}
