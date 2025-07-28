import { useState } from 'react';
import { Libro, EstadoLibro, GeneroLibro, librosEjemplo } from '../types/biblioteca';
import { BookCard } from './BookCard';

export function BookList() {
  const [libros, setLibros] = useState<Libro[]>(librosEjemplo);
  const [filtroGenero, setFiltroGenero] = useState<GeneroLibro | 'TODOS'>('TODOS');
  const [filtroEstado, setFiltroEstado] = useState<EstadoLibro | 'TODOS'>('TODOS');

  const handleCambiarEstado = (id: number, nuevoEstado: EstadoLibro) => {
    setLibros(libros.map(libro => 
      libro.id === id 
        ? { ...libro, estado: nuevoEstado, disponible: nuevoEstado === 'disponible' }
        : libro
    ));
  };

  const librosFiltrados = libros.filter(libro => {
    const cumpleFiltroGenero = filtroGenero === 'TODOS' || libro.genero === filtroGenero;
    const cumpleFiltroEstado = filtroEstado === 'TODOS' || libro.estado === filtroEstado;
    return cumpleFiltroGenero && cumpleFiltroEstado;
  });

  const totalLibros = libros.length;
  const librosDisponibles = libros.filter(libro => libro.disponible).length;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            📚 Sistema de Biblioteca
          </h1>
          <p className="text-lg text-gray-600">
            Gestiona tu colección de libros de manera moderna con TypeScript y Tailwind
          </p>
          
          {/* Estadísticas */}
          <div className="flex justify-center space-x-6 mt-6">
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="text-2xl font-bold text-blue-600">{totalLibros}</div>
              <div className="text-sm text-gray-600">Total de libros</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="text-2xl font-bold text-green-600">{librosDisponibles}</div>
              <div className="text-sm text-gray-600">Disponibles</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="text-2xl font-bold text-red-600">{totalLibros - librosDisponibles}</div>
              <div className="text-sm text-gray-600">Prestados</div>
            </div>
          </div>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">🔍 Filtros</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Filtro por género */}
            <div>
              <label htmlFor="filtro-genero" className="block text-sm font-medium text-gray-700 mb-2">
                Género
              </label>
              <select
                id="filtro-genero"
                value={filtroGenero}
                onChange={(e) => setFiltroGenero(e.target.value as GeneroLibro | 'TODOS')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="TODOS">Todos los géneros</option>
                {Object.values(GeneroLibro).map(genero => (
                  <option key={genero} value={genero}>
                    {genero}
                  </option>
                ))}
              </select>
            </div>

            {/* Filtro por estado */}
            <div>
              <label htmlFor="filtro-estado" className="block text-sm font-medium text-gray-700 mb-2">
                Estado
              </label>
              <select
                id="filtro-estado"
                value={filtroEstado}
                onChange={(e) => setFiltroEstado(e.target.value as EstadoLibro | 'TODOS')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="TODOS">Todos los estados</option>
                <option value="disponible">Disponible</option>
                <option value="prestado">Prestado</option>
                <option value="reservado">Reservado</option>
                <option value="mantenimiento">Mantenimiento</option>
              </select>
            </div>
          </div>
        </div>

        {/* Lista de libros */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            📖 Libros ({librosFiltrados.length} de {totalLibros})
          </h2>
          
          {librosFiltrados.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No se encontraron libros
              </h3>
              <p className="text-gray-600">
                Intenta ajustar los filtros para ver más resultados.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {librosFiltrados.map(libro => (
                <BookCard 
                  key={libro.id} 
                  libro={libro} 
                  onCambiarEstado={handleCambiarEstado}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t">
          <p className="text-gray-600">
            ✨ Construido con <span className="text-red-500">❤️</span> usando React + TypeScript + Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}
