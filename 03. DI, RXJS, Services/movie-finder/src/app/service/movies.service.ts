import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import IMovie from '../models/IMovie';

const API_KEY = '?api_key=ec5ce43b8ff1abb603c358cf80e47c03';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const POPULAR_MOVIES = 'popular';
const UPCOMING_MOVIES = 'upcoming';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) {}

  public getPopularMovies(): Observable < Array < IMovie >> {
    return this.http
    .get < Array < IMovie >> (BASE_URL + POPULAR_MOVIES + API_KEY)
    .pipe(
      map((data) => data['results'].slice(0, 6))
    );
  }

  public getUpcomingMovies(): Observable < Array < IMovie >> {
    return this.http
    .get < Array < IMovie >> (BASE_URL + UPCOMING_MOVIES + API_KEY)
    .pipe(
      map((data) => data['results'].slice(0, 6))
    )
  }
}
