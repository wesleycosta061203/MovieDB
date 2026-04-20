import type { FavoriteMovie } from '../../../shared/types/movie';

export interface FavoritesState {
  items: FavoriteMovie[];
}

export type FavoritesAction =
  | { type: 'hydrate'; payload: FavoriteMovie[] }
  | { type: 'toggle'; payload: FavoriteMovie }
  | { type: 'remove'; payload: number };
