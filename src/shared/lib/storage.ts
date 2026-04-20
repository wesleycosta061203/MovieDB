const FAVORITES_STORAGE_KEY = 'tmdb-moviedb-app:favorites';

export function readStorageValue<T>(key: string, fallback: T): T {
  const rawValue = window.localStorage.getItem(key);

  if (!rawValue) {
    return fallback;
  }

  try {
    return JSON.parse(rawValue) as T;
  } catch {
    return fallback;
  }
}

export function writeStorageValue<T>(key: string, value: T): void {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export { FAVORITES_STORAGE_KEY };