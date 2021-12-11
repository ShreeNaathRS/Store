import { createFeatureSelector, createSelector } from "@ngrx/store";

const movieFeature = createFeatureSelector('movies');

export const loadMovies = createSelector(movieFeature,(state: any)=>state.movies)

