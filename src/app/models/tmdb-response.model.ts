import { Movie } from "../models/movie.model"

export interface TmdbResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}