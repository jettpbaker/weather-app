import './styles.css';
import getCleanedWeatherData from './data';
import updateUI from './ui';

let weatherData;

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('#search');
  const city = input.value;
  getCleanedWeatherData(city).then((value) => {
    console.log(value);
    weatherData = value;
    updateUI(weatherData);
  });
});

// Hello World
