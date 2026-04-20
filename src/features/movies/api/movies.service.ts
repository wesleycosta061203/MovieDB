import { http } from '../../../shared/api/http';
import { mapMovieDetails, mapPaginatedMovies } from '../../../shared/utils/movieMappers';
import type { MovieDetails, PaginatedMovies } from '../../../shared/types/movie';
import type { TmdbMovieDetailsDto, TmdbPaginatedResponseDto } from '../../../shared/types/tmdb';

function getLanguage() {
  return import.meta.env.VITE_TMDB_LANGUAGE ?? 'pt-BR';
}

function getRegion() {
  return import.meta.env.VITE_TMDB_REGION ?? 'BR';
}


export async function getPopularMovies(page: number): Promise<PaginatedMovies> {
  const { data } = await http.get<TmdbPaginatedResponseDto>('/movie/popular', {
    params: {
      language: getLanguage(),
      region: getRegion(),
      page,
    },
  });

  return mapPaginatedMovies(data);
}

export async function searchMovies(query: string, page: number): Promise<PaginatedMovies> {
  const { data } = await http.get<TmdbPaginatedResponseDto>('/search/movie', {
    params: {
      query,
      include_adult: false,
      language: getLanguage(),
      page,
    },
  });

  return mapPaginatedMovies(data);
}

export async function getMovieDetails(movieId: number): Promise<MovieDetails> {
  const { data } = await http.get<TmdbMovieDetailsDto>(`/movie/${movieId}`, {
    params: {
      language: getLanguage(),
    },
  });

  return mapMovieDetails(data);
}
