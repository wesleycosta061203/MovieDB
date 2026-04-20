import { useNavigate, useSearchParams } from 'react-router-dom';
import { EmptyState } from '../../../shared/components/feedback/EmptyState';
import { ErrorState } from '../../../shared/components/feedback/ErrorState';
import { LoadingState } from '../../../shared/components/feedback/LoadingState';
import { MovieGrid } from '../components/MovieGrid';
import { Pagination } from '../components/Pagination';
import { useSearchMovies } from '../hooks/useSearchMovies';

function getPageFromParams(searchParams: URLSearchParams): number {
  const pageValue = Number(searchParams.get('page') ?? 1);
  return Number.isFinite(pageValue) && pageValue > 0 ? pageValue : 1;
}

export function SearchPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') ?? '';
  const page = getPageFromParams(searchParams);
  const { data, isLoading, isError, error } = useSearchMovies(query, page);

  const handlePageChange = (nextPage: number) => {
    setSearchParams({ q: query, page: String(nextPage) });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!query.trim()) {
    return (
      <EmptyState
        title="Nenhum termo de busca informado"
        description="Digite algo na barra de busca para encontrar filmes pelo título."
      />
    );
  }

  if (isLoading) {
    return <LoadingState />;
  }

  if (isError) {
    return <ErrorState message={error.message} />;
  }

  if (!data.results.length) {
    return (
      <EmptyState
        title="Nenhum filme encontrado"
        description={`Não encontramos resultados para \"${query}\".`}
        action={
          <button
            type="button"
            onClick={() => navigate('/')}
            className="rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            Explorar filmes
          </button>
        }
      />
    );
  }

  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <span className="inline-flex rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-400">
          Busca
        </span>
        <h1 className="text-3xl font-bold text-white">
          Resultados para: <span className="text-accent-400">&quot;{query}&quot;</span>
        </h1>
        <p className="text-sm text-slate-400">Encontrados {data.totalResults} filmes.</p>
      </div>

      <MovieGrid movies={data.results} highlightTerm={query} />
      <Pagination page={data.page} totalPages={Math.min(data.totalPages, 500)} onPageChange={handlePageChange} />
    </section>
  );
}
