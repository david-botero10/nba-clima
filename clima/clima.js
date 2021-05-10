const axios = require('axios');



const getClima = async( city ) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8389dbed6939ed4545bc23c16e94d6a1&units=metric&lang=sp`)

    const data = resp.data;

    const Temperatura = data.main.temp;
    const Estado = data.weather[0].description;

    return {
        Temperatura,
        Estado
    }
}

module.exports = {
    getClima
}