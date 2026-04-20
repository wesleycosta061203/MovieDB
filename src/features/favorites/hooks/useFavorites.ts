import { useFavoritesContext } from '../store/FavoritesProvider';


export function useFavorites() {
  return useFavoritesContext();
}
