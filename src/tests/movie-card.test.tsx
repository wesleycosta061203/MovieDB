import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { FavoritesProvider } from '../features/favorites/store/FavoritesProvider';
import { MovieCard } from '../features/movies/components/MovieCard';

const movie = {
  id: 10,
  title: 'Duna',
  posterPath: null,
  backdropPath: null,
  voteAverage: 8.2,
  releaseDate: '2024-03-15',
};

function renderWithProviders() {
  const queryClient = new QueryClient();

  return render(
    <QueryClientProvider client={queryClient}>
      <FavoritesProvider>
        <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <MovieCard movie={movie} />
        </MemoryRouter>
      </FavoritesProvider>
    </QueryClientProvider>,
  );
}

describe('MovieCard', () => {
  it('renderiza o título do filme e permite favoritar', async () => {
    const user = userEvent.setup();
    renderWithProviders();

    expect(screen.getByText('Duna')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /adicionar aos favoritos/i }));

    expect(screen.getByRole('button', { name: /remover dos favoritos/i })).toBeInTheDocument();
  });
});