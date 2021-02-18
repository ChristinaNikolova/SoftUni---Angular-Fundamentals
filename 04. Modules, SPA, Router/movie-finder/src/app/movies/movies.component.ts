import {
  Component,
  OnInit
} from '@angular/core';

import IMovie from '../models/IMovie';
import {
  MoviesService
} from '../service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public popularMovies: Array < IMovie > ;
  public upcomingMovies: Array < IMovie > ;
  public topRatedMovies: Array < IMovie > ;
  public nowPlayingMovies: Array < IMovie > ;

  constructor(private moviesService: MoviesService) {
    this.popularMovies = [];
    this.upcomingMovies = [];
    this.topRatedMovies = [];
    this.nowPlayingMovies = [];
  }

  ngOnInit(): void {
    this.moviesService.getPopularMovies().subscribe((data) => {
      this.popularMovies = data;
    });

    this.moviesService.getUpcomingMovies().subscribe((data) => {
      this.upcomingMovies = data;
    });

    this.moviesService.getTopRatedMovies().subscribe((data) => {
      this.topRatedMovies = data;
    });

    this.moviesService.getNowPlayingMovies().subscribe((data) => {
      this.nowPlayingMovies = data;
    });
  }
}
