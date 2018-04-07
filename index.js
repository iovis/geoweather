const geoLocate = require('./src/geoLocate');

async function main() {
  const { lat, lon } = await geoLocate();
  console.log({ lat, lon });
}

main();
