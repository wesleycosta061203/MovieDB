export function LoadingState() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-surface-800/70 p-8 text-center shadow-card">
      <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-brand-500 border-t-transparent" />
      <p className="text-sm text-slate-300">Carregando filmes...</p>
    </div>
  );
}
