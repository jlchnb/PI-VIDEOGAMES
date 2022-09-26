import{
    GET_ALL_VIDEOGAMES
} from '../actions/actions'

const initialState = {
    videogames: [],
    videogamesCopy: []
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_ALL_VIDEOGAMES:
            return{
                ...state,
                videogames: action.payload,
                videogamesCopy: action.payload
            }
        default: return state;
    }

}