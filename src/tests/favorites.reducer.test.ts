import { describe, expect, it } from 'vitest';
import { favoritesReducer } from '../features/favorites/store/favorites.reducer';
import type { FavoritesState } from '../features/favorites/store/favorites.types';

const initialState: FavoritesState = {
  items: [],
};

const movie = {
  id: 1,
  title: 'Interestelar',
  posterPath: '/poster.jpg',
  backdropPath: null,
  voteAverage: 8.7,
  releaseDate: '2014-11-05',
};

describe('favoritesReducer', () => {
  it('adiciona um filme quando ele ainda não existe na lista', () => {
    const nextState = favoritesReducer(initialState, { type: 'toggle', payload: movie });

    expect(nextState.items).toHaveLength(1);
    expect(nextState.items[0]).toEqual(movie);
  });

  it('remove um filme quando ele já existe na lista', () => {
    const stateWithMovie: FavoritesState = { items: [movie] };
    const nextState = favoritesReducer(stateWithMovie, { type: 'toggle', payload: movie });

    expect(nextState.items).toHaveLength(0);
  });
});
