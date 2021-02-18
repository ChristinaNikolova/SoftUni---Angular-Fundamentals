import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  Observable
} from 'rxjs';
import {
  map
} from 'rxjs/operators'

import IMovie from '../models/IMovie';
import IMovieDetails from '../models/IMovieDetails';

const API_KEY = '?api_key=ec5ce43b8ff1abb603c358cf80e47c03';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const BASE_URL_ALT = 'https://api.themoviedb.org/3/';
const POPULAR_MOVIES = 'popular';
const UPCOMING_MOVIES = 'upcoming';
const TOP_RATED_MOVIES = 'top_rated';
const NOW_PLAYING_MOVIES = 'now_playing';
const SEARCHED_MOVIES = 'search/movie';

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
      );
  }

  public getTopRatedMovies(): Observable < Array < IMovie >> {
    return this.http
      .get < Array < IMovie >> (BASE_URL + TOP_RATED_MOVIES + API_KEY)
      .pipe(
        map((data) => data['results'].slice(0, 6))
      );
  }

  public getNowPlayingMovies(): Observable < Array < IMovie >> {
    return this.http
      .get < Array < IMovie >> (BASE_URL + NOW_PLAYING_MOVIES + API_KEY)
      .pipe(
        map((data) => data['results'].slice(0, 6))
      );
  }

  public getMovieDetailsById(id: string): Observable < IMovieDetails > {
    return this.http.get < IMovieDetails > (BASE_URL + `${id}` + API_KEY)
  }

  public getSearchedMovies(query: string): Observable < Array < IMovie >> {
    return this.http
      .get < Array < IMovie >> (BASE_URL_ALT + SEARCHED_MOVIES + API_KEY + `&query=${query}`)
      .pipe(
        map((data) => data['results'])
      );
  }
}
