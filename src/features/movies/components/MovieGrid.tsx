import type { MovieSummary } from '../../../shared/types/movie';
import { MovieCard } from './MovieCard';

interface MovieGridProps {
  movies: MovieSummary[];
  highlightTerm?: string;
  removable?: boolean;
}

export function MovieGrid({ movies, highlightTerm, removable = false }: MovieGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} highlightTerm={highlightTerm} removable={removable} />
      ))}
    </div>
  );
}
