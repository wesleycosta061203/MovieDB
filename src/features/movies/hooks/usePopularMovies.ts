import { useQuery } from '@tanstack/react-query';
import { getPopularMovies } from '../api/movies.service';


export function usePopularMovies(page: number) {
  return useQuery({
    queryKey: ['movies', 'popular', page],
    queryFn: () => getPopularMovies(page),
  });
}
