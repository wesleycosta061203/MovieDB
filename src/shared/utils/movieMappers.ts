import type { MovieDetails, MovieSummary, PaginatedMovies } from '../types/movie';
import type {
  TmdbMovieDetailsDto,
  TmdbMovieDto,
  TmdbPaginatedResponseDto,
} from '../types/tmdb';

/**
 * Normaliza um filme da API da TMDB para o contrato interno da UI.
 */
export function mapMovieSummary(dto: TmdbMovieDto): MovieSummary {
  return {
    id: dto.id,
    title: dto.title,
    posterPath: dto.poster_path,
    backdropPath: dto.backdrop_path,
    voteAverage: dto.vote_average,
    releaseDate: dto.release_date,
  };
}

/**
 * Normaliza a resposta paginada de filmes.
 */
export function mapPaginatedMovies(dto: TmdbPaginatedResponseDto): PaginatedMovies {
  return {
    page: dto.page,
    totalPages: dto.total_pages,
    totalResults: dto.total_results,
    results: dto.results.map(mapMovieSummary),
  };
}

/**
 * Normaliza os detalhes de um filme.
 */
export function mapMovieDetails(dto: TmdbMovieDetailsDto): MovieDetails {
  return {
    ...mapMovieSummary(dto),
    overview: dto.overview,
    genres: dto.genres,
  };
}
