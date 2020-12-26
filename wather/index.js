const axios = require('axios')
const BASE_URL = 'api.openweathermap.org/data/2.5/weather'
const API_KEY = '60e7b7ceba99a879175cda61e4da7725'

async function getWather(lat, lng) {
  try {
    const res = await axios.get(`https://${BASE_URL}?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    return res.data.main.temp
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  getWather
}