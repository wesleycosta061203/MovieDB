interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  const canGoBack = page > 1;
  const canGoForward = page < totalPages;

  return (
    <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-surface-800/70 px-4 py-4 shadow-card sm:flex-row">
      <button
        type="button"
        onClick={() => onPageChange(page - 1)}
        disabled={!canGoBack}
        className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-brand-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
      >
        Página anterior
      </button>

      <p className="text-sm text-slate-300">
        Página <span className="font-semibold text-white">{page}</span> de{' '}
        <span className="font-semibold text-white">{totalPages}</span>
      </p>

      <button
        type="button"
        onClick={() => onPageChange(page + 1)}
        disabled={!canGoForward}
        className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Próxima página
      </button>
    </div>
  );
}
