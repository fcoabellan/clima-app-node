const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//lugar.getLugarLatLng(argv.direccion)
//  .then(console.log)

//clima.getClima(40.750000, -74.000000)
//    .then(console.log)
//    .catch(console.log);

const getInfo = async(direccion) => {

    // El clima de XXXX es de XX
    // No se pudo determinar el clima de XXXX

    try {
        const resLugar = await lugar.getLugarLatLng(argv.direccion);
        const resClima = await clima.getClima(resLugar.lat, resLugar.lng);
        return `El clima de ${direccion} es de ${resClima}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);