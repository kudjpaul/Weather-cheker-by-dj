require('dotenv').config();
const fetchData = require('./api');

const getWeather = async (city) => {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const data = await fetchData(url);
  if (data) {
    const { temp } = data.main;
    const { description } = data.weather[0];
    console.log(`Текущая температура в ${city}: ${temp}°C. Описание: ${description}.`);
  }
};

// Пример использования:
getWeather('London');
