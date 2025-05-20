// src/services/movies/getFavouriteMovies.ts
import type { MovieDetail } from '@/lib/types';
import { getMovieById } from './getMovieById';

export async function getFavouriteMovies(): Promise<MovieDetail[]> {
  if (typeof window === 'undefined') {
    return [];
  }

  const saved = sessionStorage.getItem('favorites');
  const favIds = saved ? (JSON.parse(saved) as number[]) : [];
  const results: MovieDetail[] = [];

  for (const id of favIds) {
    const movie = await getMovieById(id);
    if (movie) {
      results.push(movie);
    }
  }

  return results;
}