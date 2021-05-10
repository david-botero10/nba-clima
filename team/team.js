const axios = require('axios');

const getInfoTeam = async( id ) => {

    const id_equipo = id;

    const instance = axios.create({
        
        baseURL: `https://free-nba.p.rapidapi.com/teams/${id_equipo}`,
        timeout: 1000,
        headers: {'x-rapidapi-key': 'c6e73fd1c2msh6eb8f1edc05075cp1fe6b8jsnfeea2fd0ac0c'}
  });
  
  const resp = await instance.get();

  if (  id > 30) {

        throw new Error(`No existe un equipo con este ID: ${ id }`)
  }

  const data = resp.data;
  const Nombre = data.full_name;
  const Division = data.division;
  const Conferencia = data.conference;
  const Ciudad = data.city

  return {
      Nombre,
      Division,
      Conferencia,
      Ciudad
  }
} 

module.exports = {
    getInfoTeam
}