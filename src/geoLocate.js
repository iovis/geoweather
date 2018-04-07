const axios = require('axios');

async function geoLocate() {
  const response = await axios.get('http://ip-api.com/json');
  return response.data;
}

module.exports = geoLocate;
