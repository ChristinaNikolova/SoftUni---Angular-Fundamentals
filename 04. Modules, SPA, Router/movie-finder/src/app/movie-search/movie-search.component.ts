import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import IMovie from '../models/IMovie';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  public searchedMovies: Array < IMovie >;

    constructor(
      private moviesService: MoviesService,
      private route: ActivatedRoute
    ) {
      this.searchedMovies = [];
    }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      const query: string = params['query'];
      this.moviesService.getSearchedMovies(query).subscribe((data) => {
        this.searchedMovies = data;
      });
    });
  }
}
