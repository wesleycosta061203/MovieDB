import { Heart, Trash2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { FavoriteMovie, MovieSummary } from '../../../shared/types/movie';
import { formatVoteAverage } from '../../../shared/utils/format';
import { getPosterUrl } from '../../../shared/utils/image';
import { highlightText } from '../../../shared/utils/highlight';
import { useFavorites } from '../../favorites/hooks/useFavorites';

interface MovieCardProps {
  movie: MovieSummary;
  highlightTerm?: string;
  removable?: boolean;
}

function toFavoriteMovie(movie: MovieSummary): FavoriteMovie {
  return {
    id: movie.id,
    title: movie.title,
    posterPath: movie.posterPath,
    backdropPath: movie.backdropPath,
    voteAverage: movie.voteAverage,
    releaseDate: movie.releaseDate,
  };
}

export function MovieCard({ movie, highlightTerm = '', removable = false }: MovieCardProps) {
  const { isFavorite, toggleFavorite, removeFavorite } = useFavorites();
  const favorite = isFavorite(movie.id);
  const posterUrl = getPosterUrl(movie.posterPath);

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-800 bg-surface-800 shadow-card transition hover:-translate-y-1 hover:border-brand-500/40">
      <div className="relative">
        <Link to={`/movie/${movie.id}`} className="block">
          {posterUrl ? (
            <img src={posterUrl} alt={movie.title} className="h-80 w-full object-cover object-center" loading="lazy" />
          ) : (
            <div className="flex h-80 items-center justify-center bg-surface-700 text-sm text-slate-400">
              Poster indisponível
            </div>
          )}
        </Link>

        <button
          type="button"
          onClick={() => (removable ? removeFavorite(movie.id) : toggleFavorite(toFavoriteMovie(movie)))}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/80 text-white transition hover:scale-105"
          aria-label={removable ? 'Remover dos favoritos' : favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          {removable ? (
            <Trash2 size={18} className="text-slate-100" />
          ) : (
            <Heart size={18} className={favorite ? 'fill-rose-500 text-rose-500' : 'text-slate-100'} />
          )}
        </button>
      </div>

      <div className="flex items-end justify-between gap-3 p-4">
        <div className="min-w-0">
          <Link to={`/movie/${movie.id}`} className="block text-sm font-semibold text-slate-100 transition group-hover:text-brand-300">
            <span className="line-clamp-2">{highlightText(movie.title, highlightTerm)}</span>
          </Link>
        </div>

        <div className="inline-flex shrink-0 items-center gap-1 rounded-full bg-accent-400 px-2.5 py-1 text-xs font-bold text-slate-950">
          <Star size={12} fill="currentColor" />
          {formatVoteAverage(movie.voteAverage)}
        </div>
      </div>
    </article>
  );
}
