import {
  Injectable
} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {
  Observable,
  of
} from 'rxjs';
import IMovieDetails from 'src/app/models/IMovieDetails';
import {
  MoviesService
} from '../movies.service';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsResolver implements Resolve < IMovieDetails > {
  constructor(private moviesService: MoviesService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable < IMovieDetails > {
    const id: string = route.params['id'];
    return this.moviesService.getMovieDetailsById(id);
  }
}
