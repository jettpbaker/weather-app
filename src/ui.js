import clear_day from './images/clear-day.png';
import clear_night from './images/clear-night.png';
import cloudy from './images/cloudy.png';
import fog from './images/fog.png';
import hail from './images/hail.png';
import partly_cloudy_day from './images/partly-cloudy-day.png';
import partly_cloudy_night from './images/partly-cloudy-night.png';
import rain_snow_showers_day from './images/rain-snow-showers-day.png';
import rain_snow_showers_night from './images/rain-snow-showers-night.png';
import rain_snow from './images/rain-snow.png';
import rain from './images/rain.png';
import showers_day from './images/showers-day.png';
import showers_night from './images/showers-night.png';
import sleet from './images/sleet.png';
import snow_showers_day from './images/snow-showers-day.png';
import snow_showers_night from './images/snow-showers-night.png';
import snow from './images/snow.png';
import thunder_rain from './images/thunder-rain.png';
import thunder_showers_day from './images/thunder-showers-day.png';
import thunder_showers_night from './images/thunder-showers-night.png';
import thunder from './images/thunder.png';
import wind from './images/wind.png';

const images = {
  'clear-day': clear_day,
  'clear-night': clear_night,
  cloudy,
  fog,
  hail,
  'partly-cloudy-day': partly_cloudy_day,
  'partly-cloudy-night': partly_cloudy_night,
  'rain-snow-showers-day': rain_snow_showers_day,
  'rain-snow-showers-night': rain_snow_showers_night,
  'rain-snow': rain_snow,
  rain,
  'showers-day': showers_day,
  'showers-night': showers_night,
  sleet,
  'snow-showers-day': snow_showers_day,
  'snow-showers-night': snow_showers_night,
  snow,
  'thunder-rain': thunder_rain,
  'thunder-showers-day': thunder_showers_day,
  'thunder-showers-night': thunder_showers_night,
  thunder,
  wind,
};

function updateUI(weatherData) {
  const changeCondition = (function () {
    const { conditions } = weatherData;
    const condition = document.querySelector('#condition');
    condition.textContent = conditions;
  })();

  const changeIcon = (function () {
    const { icon } = weatherData;
    console.log(icon);
    const imageContainer = document.querySelector('#conditions > img');

    imageContainer.src = images[icon];
    imageContainer.alt = icon;
  })();
}

export default updateUI;
