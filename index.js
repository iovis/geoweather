#!/usr/bin/env node

const geoLocate = require('./src/geoLocate');
const getTemperature = require('./src/getTemperature');

async function main() {
  const { lat, lon } = await geoLocate();
  const { main: { temp } } = await getTemperature(lat, lon);
  console.log(`${Math.round(temp)}º`);
}

main().catch(process.exit);
