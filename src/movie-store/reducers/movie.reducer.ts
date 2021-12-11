import { ActionsUnion, ActionTypes } from "../actions/movie.action";
import { Movie } from "../modals/movie.modal";

export interface State{
    movies: Movie[];
}

export const initialState: State = {
    movies: []
}

export function reducer(state = initialState, action: ActionsUnion): State{
    switch(action.type){
        case ActionTypes.GetMovies: {
            return state;
        }
        case ActionTypes.GetMoviesSuccess: {
            console.log('reducer', action.movies)
            return {
                ...state,
                movies: action.movies
            }
        }
        case ActionTypes.GetMoviesFailure: {
            return {
                ...state,
                movies: []
            }
        }
        default:
            return state;
    }
}