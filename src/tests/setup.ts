import '@testing-library/jest-dom';
import { vi } from 'vitest';

vi.stubEnv('VITE_TMDB_IMAGE_BASE_URL', 'https://image.tmdb.org/t/p');
