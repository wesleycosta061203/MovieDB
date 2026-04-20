export interface MovieSummary {
  id: number;
  title: string;
  posterPath: string | null;
  backdropPath: string | null;
  voteAverage: number;
  releaseDate: string;
}

export interface MovieDetails extends MovieSummary {
  overview: string;
  genres: Array<{ id: number; name: string }>;
}

export interface PaginatedMovies {
  page: number;
  totalPages: number;
  totalResults: number;
  results: MovieSummary[];
}

export interface FavoriteMovie {
  id: number;
  title: string;
  posterPath: string | null;
  backdropPath: string | null;
  voteAverage: number;
  releaseDate: string;
}
