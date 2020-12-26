const { getLocation } = require('./place')
const { getWather } = require('./wather')
const argv = require('yargs').options({
  address: {
    alias: 'd',
    desc: 'city address to get the weather',
    demand: true,
  }
}).argv

async function getInfo(direction) {
  try {
    const coords = await getLocation(direction)
    const temp = await getWather(coords.lat, coords.lng)
    return `El clima de ${coords.direction} es de ${temp}.`
  } catch(e) {
    return `No se pudo determinar el clima de ${direction}`
  }
}

getInfo(argv.address)
  .then(console.log)
  .catch(console.log)
