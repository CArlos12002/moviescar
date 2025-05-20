// src/services/movies/getUpcomingMovies.ts
import type { MovieDetail } from '@/lib/types';
import api from '../api'; // Importa tu instancia de Axios configurada

export async function getUpcomingMovies(): Promise<MovieDetail[]> {
  try {
    const { data } = await api.get<{ results: MovieDetail[] }>('/movie/upcoming', {
      params: {
        sort_by: 'primary_release_date.desc', // Ordenar por fecha de lanzamiento descendente
        'primary_release_date.gte': new Date().toISOString().split('T')[0], // Filtrar por fechas futuras
        page: 1,
      },
    });
    return data.results;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Error fetching upcoming movies:', message);
    return [];
  }
}