/**
 * Formata a nota TMDB para uma casa decimal.
 */
export function formatVoteAverage(value: number): string {
  return value.toFixed(1);
}

/**
 * Formata uma data ISO para o locale pt-BR.
 */
export function formatReleaseDate(value: string): string {
  if (!value) {
    return 'Data não informada';
  }

  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${value}T00:00:00`));
}
