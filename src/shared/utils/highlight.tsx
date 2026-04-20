import type { ReactNode } from 'react';

/**
 * Destaca o termo buscado dentro do texto informado.
 */
export function highlightText(text: string, term: string): ReactNode {
  if (!term.trim()) {
    return text;
  }

  const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${escapedTerm})`, 'gi'));

  return parts.map((part, index) => {
    const isMatch = part.toLowerCase() === term.toLowerCase();

    if (!isMatch) {
      return part;
    }

    return (
      <mark key={`${part}-${index}`} className="rounded bg-accent-400 px-1 py-0.5 text-slate-900">
        {part}
      </mark>
    );
  });
}
