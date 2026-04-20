export interface TmdbMovieDto {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  release_date: string;
  overview: string;
}

export interface TmdbPaginatedResponseDto {
  page: number;
  total_pages: number;
  total_results: number;
  results: TmdbMovieDto[];
}

export interface TmdbGenreDto {
  id: number;
  name: string;
}

export interface TmdbMovieDetailsDto extends TmdbMovieDto {
  genres: TmdbGenreDto[];
}
