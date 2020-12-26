const axios = require('axios')
const BASE_URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places'
const TEMP_TOKEN = 'pk.eyJ1IjoiamFzYW5oZHoiLCJhIjoiY2tqNTBlNGl6Mm5mYTJ4bTBvYTNkbm5weCJ9.iRK07np7_ZJPzGB5Wdb6lw'

async function getLocation(direction) {
  const query = encodeURI(direction)
  const res = await axios.get(`${BASE_URL}/${query}}.json?access_token=${TEMP_TOKEN}`)
  const data = res.data.features[0]
  if (data.length === 0) throw new Error('No hay resultados para', direction)
  return {
    direction: data.place_name,
    lng: data.center[0],
    lat: data.center[1]
  }
}

module.exports = {
  getLocation
}