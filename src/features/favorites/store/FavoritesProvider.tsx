import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import type { FavoriteMovie } from '../../../shared/types/movie';
import { FAVORITES_STORAGE_KEY, readStorageValue, writeStorageValue } from '../../../shared/lib/storage';
import { favoritesReducer } from './favorites.reducer';

interface FavoritesContextValue {
  favorites: FavoriteMovie[];
  isFavorite: (movieId: number) => boolean;
  toggleFavorite: (movie: FavoriteMovie) => void;
  removeFavorite: (movieId: number) => void;
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

function getInitialFavoritesState() {
  return {
    items: readStorageValue<FavoriteMovie[]>(FAVORITES_STORAGE_KEY, []),
  };
}

export function FavoritesProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(favoritesReducer, undefined, getInitialFavoritesState);

  useEffect(() => {
    writeStorageValue(FAVORITES_STORAGE_KEY, state.items);
  }, [state.items]);

  const value = useMemo<FavoritesContextValue>(
    () => ({
      favorites: state.items,
      isFavorite: (movieId) => state.items.some((item) => item.id === movieId),
      toggleFavorite: (movie) => dispatch({ type: 'toggle', payload: movie }),
      removeFavorite: (movieId) => dispatch({ type: 'remove', payload: movieId }),
    }),
    [state.items],
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavoritesContext() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('useFavoritesContext deve ser utilizado dentro de FavoritesProvider.');
  }

  return context;
}