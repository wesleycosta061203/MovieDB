import { createBrowserRouter } from 'react-router-dom';
import { AppShell } from '../../shared/components/layout/AppShell';
import { HomePage } from '../../features/movies/pages/HomePage';
import { SearchPage } from '../../features/movies/pages/SearchPage';
import { MovieDetailsPage } from '../../features/movies/pages/MovieDetailsPage';
import { FavoritesPage } from '../../features/favorites/pages/FavoritesPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: 'movie/:id',
        element: <MovieDetailsPage />,
      },
      {
        path: 'favorites',
        element: <FavoritesPage />,
      },
    ],
  },
]);
