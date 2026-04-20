import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { EmptyState } from '../../../shared/components/feedback/EmptyState';
import type { FavoriteMovie } from '../../../shared/types/movie';
import { MovieGrid } from '../../movies/components/MovieGrid';
import { useFavorites } from '../hooks/useFavorites';

type SortOption = 'title-asc' | 'title-desc' | 'vote-desc';

function sortFavorites(items: FavoriteMovie[], sortOption: SortOption): FavoriteMovie[] {
  const sorted = [...items];

  switch (sortOption) {
    case 'title-asc':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case 'title-desc':
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    case 'vote-desc':
      return sorted.sort((a, b) => b.voteAverage - a.voteAverage);
    default:
      return sorted;
  }
}

export function FavoritesPage() {
  const { favorites } = useFavorites();
  const [sortOption, setSortOption] = useState<SortOption>('title-asc');

  const sortedFavorites = useMemo(() => sortFavorites(favorites, sortOption), [favorites, sortOption]);

  if (!favorites.length) {
    return (
      <EmptyState
        title="Nenhum filme favorito ainda"
        description="Comece explorando filmes populares e adicione seus títulos favoritos."
        action={
          <Link
            to="/"
            className="inline-flex rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            Explorar filmes
          </Link>
        }
      />
    );
  }

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <span className="inline-flex rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-400">
            Favoritos
          </span>
          <h1 className="text-3xl font-bold text-white">Meus filmes favoritos</h1>
          <p className="text-sm text-slate-400">Gerencie e organize sua lista pessoal.</p>
        </div>

        <label className="flex flex-col gap-2 text-sm text-slate-300">
          Ordenar por:
          <select
            value={sortOption}
            onChange={(event) => setSortOption(event.target.value as SortOption)}
            className="rounded-xl border border-slate-700 bg-surface-800 px-4 py-3 text-slate-100 outline-none"
          >
            <option value="title-asc">Título (A-Z)</option>
            <option value="title-desc">Título (Z-A)</option>
            <option value="vote-desc">Nota (maior-menor)</option>
          </select>
        </label>
      </div>

      <MovieGrid movies={sortedFavorites} removable />
    </section>
  );
}
