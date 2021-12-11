import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { ActionTypes, GetMoviesSuccess } from "../actions/movie.action";
import { MovieService } from "../services/movie.service";

@Injectable()
export class MovieEffect{

    constructor(private actions$: Actions,private moviesService: MovieService) {}

    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType(ActionTypes.GetMovies),
        mergeMap(() => this.moviesService.getAll()
          .pipe(
            map(movies => {
                console.log('Effects',movies);
                return (new GetMoviesSuccess(movies));
            }),
            catchError(() => EMPTY)
          ))
        )
      );
}