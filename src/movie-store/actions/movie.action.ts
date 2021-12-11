import { Action } from "@ngrx/store";
import { Movie } from "../modals/movie.modal";

export enum ActionTypes {
    GetMovies = '[Movies Page] Load Movies',
    GetMoviesSuccess = '[Movies API] Movies Loaded Success',
    GetMoviesFailure = '[Movies API] Movies Loaded Failure'
}

export class GetMovies implements Action{
    readonly type = ActionTypes.GetMovies;
}

export class GetMoviesSuccess implements Action{
    readonly type = ActionTypes.GetMoviesSuccess;
    
    constructor(public movies: Movie[]){}
}

export class GetMoviesFailure implements Action{
    readonly type = ActionTypes.GetMoviesFailure;
}

export type ActionsUnion = GetMovies | GetMoviesSuccess | GetMoviesFailure;