import { Component } from '@angular/core';
import { MovieService } from 'src/movie-store/services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Store';
  constructor(private movieService: MovieService){
    setTimeout(() => {
      this.movieService.dispatch();
    }, 5000);
  }
}
