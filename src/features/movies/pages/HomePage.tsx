import { useSearchParams } from 'react-router-dom';
import { ErrorState } from '../../../shared/components/feedback/ErrorState';
import { LoadingState } from '../../../shared/components/feedback/LoadingState';
import { Pagination } from '../components/Pagination';
import { MovieGrid } from '../components/MovieGrid';
import { usePopularMovies } from '../hooks/usePopularMovies';

function getPageFromParams(searchParams: URLSearchParams): number {
  const pageValue = Number(searchParams.get('page') ?? 1);
  return Number.isFinite(pageValue) && pageValue > 0 ? pageValue : 1;
}

export function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = getPageFromParams(searchParams);
  const { data, isLoading, isError, error } = usePopularMovies(page);

  const handlePageChange = (nextPage: number) => {
    setSearchParams({ page: String(nextPage) });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return <LoadingState />;
  }

  if (isError) {
    return <ErrorState message={error.message} />;
  }

  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <span className="inline-flex rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-400">
          Página inicial
        </span>
        <h1 className="text-3xl font-bold text-white">Filmes populares</h1>
        <p className="text-sm text-slate-400">Explore os títulos em destaque da TMDB.</p>
      </div>

      <MovieGrid movies={data.results} />
      <Pagination page={data.page} totalPages={Math.min(data.totalPages, 500)} onPageChange={handlePageChange} />
    </section>
  );
}
