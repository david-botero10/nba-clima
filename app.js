const team = require('./team/team')
const clima = require('./clima/clima')
const colors = require('colors');

const argv = require('yargs').options( {

    id_Team: {
        alias:'i',
        desc: 'ID del equipo a consultar',
        demand: true
    }
}).argv;

const getInfo = async( identificacion ) => {
    
    try {
        const city = await team.getInfoTeam( identificacion );

        const climaDatos = await clima.getClima( city.Ciudad )

        return `El equipo consultado es: ${city.Nombre.green} que juega en la conferencia ${city.Conferencia.red} con sede en la ciudad de ${city.Ciudad.yellow}, ciudad en la cual la temperatura actual es de ${climaDatos.Temperatura} con un estado de ${climaDatos.Estado.blue}`
    } catch (e) {
        return `No se pudo obtener los datos con el ID ${id} `;
    }
}

getInfo( argv.id_Team )
        .then( console.log)
        .catch( console.log)

