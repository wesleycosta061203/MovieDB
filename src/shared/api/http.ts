import axios from 'axios';
import { getRequiredEnv } from '../lib/env';

export const http = axios.create({
  baseURL: getRequiredEnv('VITE_TMDB_API_BASE_URL'),
  headers: {
    Authorization: `Bearer ${getRequiredEnv('VITE_TMDB_BEARER_TOKEN')}`,
    'Content-Type': 'application/json',
  },
});
