import { Injectable } from '@angular/core';
import { environment } from '../enviroments/enviroment';
import { Movie, MovieDetail  } from '../models/movie.model';
import { TmdbResponse } from '../models/tmdb-response.model';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private apiUrl = environment.apiBaseUrl;

}
