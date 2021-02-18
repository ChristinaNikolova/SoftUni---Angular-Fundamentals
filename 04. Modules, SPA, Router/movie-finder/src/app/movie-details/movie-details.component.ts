import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IMovieDetails from '../models/IMovieDetails';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  public movie: IMovieDetails;
  public genres: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.movie = this.route.snapshot.data['singleMovie'];
    this.genres = this.movie.genres.map((genre) => genre['name']).join(' ');
  }
}
