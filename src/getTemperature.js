require('dotenv').config();
const axios = require('axios');

async function getTemperature(lat, lon) {
  const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`);
  return response.data;
}

module.exports = getTemperature;
