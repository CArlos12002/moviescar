// src/services/api.ts
import axios from 'axios';
import Config from '../config';

const api = axios.create({
  baseURL: Config.baseUrl,           // https://api.themoviedb.org/3
  params: {
    // API Key v3 para todas las llamadas públicas
    api_key: Config.apiKey,
    language: 'es-ES',                // idioma por defecto
  },
});

// (Opcional) Ejemplo de interceptor para logging o manejo de errores
api.interceptors.response.use(
  response => response,
  error => {
    console.error('[TMDB API Error]', error.response?.status, error.message);
    return Promise.reject(error);
  }
);

export default api;
