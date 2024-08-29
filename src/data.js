async function requestWeatherData(city) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=JX65RC7925Y7DFRV87MBRPKKG&contentType=json`;
  try {
    const response = await fetch(url, { mode: 'cors' });
    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
}

function cleanWeatherData(data) {
  return {
    description: data.description,
    conditions: data.currentConditions.conditions,
    temperature: data.currentConditions.temp,
    icon: data.currentConditions.icon,
    uvIndex: data.currentConditions.uvindex,
  };
}

// Function to get cleaned weather data for a given city
async function getCleanedWeatherData(city) {
  const rawData = await requestWeatherData(city);
  if (!rawData) {
    return null;
  }
  return cleanWeatherData(rawData);
}

export default getCleanedWeatherData;

// we want .description | .currentConditions.conditions | .currentConditions.temp | .currentConditions.icon | currentConditions.uvindex
