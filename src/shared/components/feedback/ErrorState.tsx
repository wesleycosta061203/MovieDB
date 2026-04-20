interface ErrorStateProps {
  message?: string;
}

export function ErrorState({ message = 'Ocorreu um erro ao carregar os dados.' }: ErrorStateProps) {
  return (
    <div className="rounded-2xl border border-rose-500/20 bg-rose-500/10 p-8 text-center shadow-card">
      <p className="font-semibold text-rose-200">Não foi possível concluir a operação.</p>
      <p className="mt-2 text-sm text-rose-100/80">{message}</p>
    </div>
  );
}
