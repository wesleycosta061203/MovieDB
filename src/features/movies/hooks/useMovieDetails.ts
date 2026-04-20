import { useQuery } from '@tanstack/react-query';
import { getMovieDetails } from '../api/movies.service';


export function useMovieDetails(movieId: number) {
  return useQuery({
    queryKey: ['movies', 'details', movieId],
    queryFn: () => getMovieDetails(movieId),
    enabled: Number.isFinite(movieId),
  });
}
