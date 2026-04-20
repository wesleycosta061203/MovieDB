import type { FavoritesAction, FavoritesState } from './favorites.types';


export function favoritesReducer(state: FavoritesState, action: FavoritesAction): FavoritesState {
  switch (action.type) {
    case 'hydrate':
      return {
        items: action.payload,
      };

    case 'toggle': {
      const exists = state.items.some((item) => item.id === action.payload.id);

      if (exists) {
        return {
          items: state.items.filter((item) => item.id !== action.payload.id),
        };
      }

      return {
        items: [...state.items, action.payload],
      };
    }

    case 'remove':
      return {
        items: state.items.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
}
