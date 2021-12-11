import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { GetMovies } from '../actions/movie.action';
import * as fromReducer from '../reducers/movie.reducer';
import * as fromSelector from "../selectors/movie.selector";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private store: Store<fromReducer.State>, private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get('/store/study');
  }

  dispatch(){
    this.store.dispatch(new GetMovies());
  }

  selectFromStore(){
    return this.store.select(fromSelector.loadMovies).pipe(
      filter((movies) => {
        return !!movies;
      }),
      take(2)
    );
  }
  
}
