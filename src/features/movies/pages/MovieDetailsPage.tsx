import { Heart } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { ErrorState } from '../../../shared/components/feedback/ErrorState';
import { LoadingState } from '../../../shared/components/feedback/LoadingState';
import { formatReleaseDate, formatVoteAverage } from '../../../shared/utils/format';
import { getBackdropUrl } from '../../../shared/utils/image';
import { useFavorites } from '../../favorites/hooks/useFavorites';
import { useMovieDetails } from '../hooks/useMovieDetails';

export function MovieDetailsPage() {
  const { id } = useParams();
  const movieId = Number(id);
  const { data, isLoading, isError, error } = useMovieDetails(movieId);
  const { isFavorite, toggleFavorite } = useFavorites();

  if (isLoading) {
    return <LoadingState />;
  }

  if (isError || !data) {
    return <ErrorState message={error?.message ?? 'Filme não encontrado.'} />;
  }

  const backdropUrl = getBackdropUrl(data.backdropPath);
  const favorite = isFavorite(data.id);

  return (
    <section className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
      <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-surface-800 shadow-card">
        {backdropUrl ? (
          <img src={backdropUrl} alt={data.title} className="h-full min-h-[320px] w-full object-cover object-center" />
        ) : (
          <div className="flex min-h-[320px] items-center justify-center text-sm text-slate-400">Imagem indisponível</div>
        )}
      </div>

      <div className="rounded-[2rem] border border-slate-800 bg-surface-800/80 p-6 shadow-card">
        <h1 className="text-4xl font-bold text-white">{data.title}</h1>

        <div className="mt-4 flex flex-wrap gap-2">
          {data.genres.map((genre) => (
            <span key={genre.id} className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-300">
              {genre.name}
            </span>
          ))}
        </div>

        <div className="mt-6 space-y-2 text-sm text-slate-300">
          <p>
            <span className="font-semibold text-white">Data de lançamento:</span> {formatReleaseDate(data.releaseDate)}
          </p>
          <p>
            <span className="font-semibold text-white">Nota TMDB:</span>{' '}
            <span className="inline-flex rounded-full bg-accent-400 px-2.5 py-1 font-bold text-slate-950">
              {formatVoteAverage(data.voteAverage)}
            </span>
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold text-white">Sinopse</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">{data.overview || 'Sinopse não disponível.'}</p>
        </div>

        <button
          type="button"
          onClick={() =>
            toggleFavorite({
              id: data.id,
              title: data.title,
              posterPath: data.posterPath,
              backdropPath: data.backdropPath,
              voteAverage: data.voteAverage,
              releaseDate: data.releaseDate,
            })
          }
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-rose-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-600"
        >
          <Heart size={16} className={favorite ? 'fill-white text-white' : ''} />
          {favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        </button>
      </div>
    </section>
  );
}
