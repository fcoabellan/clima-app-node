const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=179a237eae9778fc8b96d9997eff9df2&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}