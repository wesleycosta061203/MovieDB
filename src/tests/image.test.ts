import { describe, expect, it, vi } from 'vitest';

vi.stubEnv('VITE_TMDB_IMAGE_BASE_URL', 'https://image.tmdb.org/t/p');

const { getPosterUrl, getBackdropUrl } = await import('../shared/utils/image');

describe('image helpers', () => {
  it('monta a URL do poster no tamanho w300', () => {
    expect(getPosterUrl('/poster.jpg')).toBe('https://image.tmdb.org/t/p/w300/poster.jpg');
  });

  it('monta a URL do backdrop no tamanho original', () => {
    expect(getBackdropUrl('/backdrop.jpg')).toBe('https://image.tmdb.org/t/p/original/backdrop.jpg');
  });
});
