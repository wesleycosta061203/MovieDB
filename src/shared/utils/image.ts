import { getRequiredEnv } from '../lib/env';

function getImageBaseUrl(): string {
  return getRequiredEnv('VITE_TMDB_IMAGE_BASE_URL');
}

/**
 * Monta a URL do poster do filme.
 */
export function getPosterUrl(path: string | null): string | null {
  return path ? `${getImageBaseUrl()}/w300${path}` : null;
}

/**
 * Monta a URL do backdrop do filme.
 */
export function getBackdropUrl(path: string | null): string | null {
  return path ? `${getImageBaseUrl()}/original${path}` : null;
}
