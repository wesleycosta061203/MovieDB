import { useQuery } from '@tanstack/react-query';
import { searchMovies } from '../api/movies.service';

export function useSearchMovies(query: string, page: number) {
  return useQuery({
    queryKey: ['movies', 'search', query, page],
    queryFn: () => searchMovies(query, page),
    enabled: Boolean(query.trim()),
  });
}
