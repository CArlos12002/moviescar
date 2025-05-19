// components/MovieCard/MovieCard.tsx
import Link from 'next/link';
import React from 'react';
import type { Movie } from '@/lib/types';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/placeholder.png';

  return (
    <Link
      href={`/movie/${movie.id}`}
      className="group relative block w-48 sm:w-56 md:w-64 m-2 overflow-visible rounded-lg
                 bg-gray-900 transform transition duration-300 hover:scale-105"
    >
      {/* Contenedor de la imagen con proporción 2:3 */}
      <div className="w-full aspect-[2/3] bg-gray-800 relative overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={movie.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Título de la película */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
        <h3 className="text-white text-sm font-semibold truncate">
          {movie.title}
        </h3>
      </div>

      {/* Panel holograma oscuro con descripción completa */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2
                      w-56 p-4 bg-black bg-opacity-75 backdrop-blur-sm
                      border border-gray-700 rounded-lg text-white text-xs
                      opacity-0 group-hover:opacity-100 shadow-lg
                      transition-all duration-300 scale-75 group-hover:scale-100
                      rotate-2 max-h-48 overflow-y-auto">
        <p className="whitespace-pre-wrap break-words">
          {movie.overview}
        </p>
      </div>
    </Link>
  );
}
