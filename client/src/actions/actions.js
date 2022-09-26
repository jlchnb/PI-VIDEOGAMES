import axios from 'axios';

export const GET_ALL_VIDEOGAMES = 'GET_ALL_VIDEOGAMES';

export function getAllVideogames(){
    return function(dispatch){
        axios.get(`http://localhost:3001/videogames`)
        .then(games =>
            dispatch({
                type: GET_ALL_VIDEOGAMES,
                payload: games.data
            })
        )
        .catch(error => console.log(error))
    }
}