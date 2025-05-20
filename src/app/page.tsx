// src/app/page.tsx

import MovieCard from '@/components/MovieCard/MovieCard';
import { getMarvelMovies } from "@/services/movies/getMarvelMovies";
import { getUpcomingMovies } from "@/services/movies/getUpcomingMovies"; // Nueva función para próximas películas
import type { Movie, MovieDetail } from '@/lib/types';
import Link from 'next/link';
import { FaPlayCircle, FaEye } from 'react-icons/fa'; // Iconos para los botones

export default async function HomePage() {
  const marvelMovies: Movie[] = await getMarvelMovies();
  const upcomingMovies: MovieDetail[] = await getUpcomingMovies(); // Llama a la función para obtener películas próximas

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white p-6">
      {/* Hero Section */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900 to-black opacity-20 animate-pulse"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-400 drop-shadow mb-6 animate-fade-in-down">
            🎬 Explora un Universo de Películas
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in">
            Descubre las últimas películas, revive tus clásicos favoritos y crea tu propia colección.
          </p>
          <div className="space-x-4">
            <Link
              href="/explore"
              className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 animate-bounce"
            >
              <FaEye className="mr-2" /> Explorar Todas las Películas
            </Link>
            <Link
              href="/genres"
              className="inline-flex items-center bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-300"
            >
              <FaPlayCircle className="mr-2" /> Explorar por Género
            </Link>
          </div>
        </div>
      </section>

      {/* Continue Watching Section */}
      {marvelMovies.slice(0, 5).length > 0 && (
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-6 border-l-4 pl-4 border-indigo-500">
            Siguiendo tu Maratón de Marvel
          </h2>
          <div className="overflow-x-auto">
            <div className="grid grid-flow-row auto-cols-fr gap-6 py-4">
              {marvelMovies.slice(0, 5).map((movie) => (
                <MovieCard key={movie.id} movie={movie} isFeatured={true} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Marvel Spotlight Section */}
      {marvelMovies.slice(5, 9).length > 0 && (
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-6 border-l-4 pl-4 border-red-500">
            Especial de Marvel
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {marvelMovies.slice(5, 9).map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          {marvelMovies.length > 9 && (
            <div className="mt-6 text-center">
              <Link
                href="/marvel"
                className="text-red-400 font-semibold hover:underline"
              >
                Ver más películas de Marvel →
              </Link>
            </div>
          )}
        </section>
      )}

      {/* Upcoming Movies Section */}
      {upcomingMovies.length > 0 && (
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-6 border-l-4 pl-4 border-green-500">
            Próximamente en Cines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingMovies.slice(0, 3).map((movie) => (
              <div
                key={movie.id}
                className="bg-white/10 backdrop-blur rounded-xl overflow-hidden shadow-lg transition transform hover:scale-105 duration-300"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-white text-xl mb-1">{movie.title}</h3>
                  <p className="text-gray-300 text-sm">
                    Fecha de estreno: {movie.release_date}
                  </p>
                  {/* Si necesitas un formato específico del cliente después de la hidratación, puedes usar un useEffect aquí */}
                  {/* <p className="text-gray-300 text-sm" data-release-date={movie.release_date}></p> */}
                </div>
              </div>
            ))}
          </div>
          {upcomingMovies.length > 3 && (
            <div className="mt-6 text-center">
              <Link
                href="/upcoming"
                className="text-green-400 font-semibold hover:underline"
              >
                Ver más próximos lanzamientos →
              </Link>
            </div>
          )}
        </section>
      )}

      {/* Footer */}
      <footer className="py-6 mt-12 text-center text-gray-500 text-sm border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} My Movies. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}