import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/movie-store/modals/movie.modal';
import { MovieService } from 'src/movie-store/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies$ : Observable<Movie[]>;

  constructor(private movieService: MovieService) { 
    this.movies$ = this.movieService.selectFromStore();
  }

  ngOnInit(): void {
  }

}
