export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
  overview: string;
  release_date: string;
}

export interface MovieDetail extends Movie {
  genres: { id: number; name: string }[];
  runtime: number | null;
  tagline: string | null;
}