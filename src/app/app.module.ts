import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from "@angular/common/http";
import { MoviesComponent } from './components/movies/movies.component';
import { StoreModule } from '@ngrx/store';
import { MovieEffect } from "../movie-store/effects/movie.effect";
import * as fromReducer from "../movie-store/reducers/movie.reducer";


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('movies',fromReducer.reducer),
    EffectsModule.forRoot([MovieEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
