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
    <div className="min-h-screen bg-gray-50 w-full">
      <div className="w-full grid grid-cols-1 lg:grid-cols-[260px_1fr] min-h-screen">
        {/* Sidebar */}
        <aside className="bg-white border-b lg:border-b-0 lg:border-r px-6 py-8 flex flex-col gap-8">
          {/* Header */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">📚 Biblioteca</h1>
            <p className="text-base text-gray-600">Gestiona tu colección de libros con TypeScript y Tailwind</p>
          </div>
          {/* Estadísticas */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 Estadísticas</h3>
            <div className="flex flex-col gap-4">
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm border flex flex-col items-center">
                <div className="text-2xl font-bold text-blue-600">{totalLibros}</div>
                <div className="text-sm text-gray-600 text-center">Total de libros</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm border flex flex-col items-center">
                <div className="text-2xl font-bold text-green-600">{librosDisponibles}</div>
                <div className="text-sm text-gray-600 text-center">Disponibles</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm border flex flex-col items-center">
                <div className="text-2xl font-bold text-red-600">{totalLibros - librosDisponibles}</div>
                <div className="text-sm text-gray-600 text-center">Prestados</div>
              </div>
            </div>
          </div>
        </aside>
        {/* Main content */}
        <main className="flex flex-col min-h-screen">
          {/* Filtros */}
          <section className="w-full bg-white border-b px-6 py-4 flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-between">
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <div>
                <label htmlFor="filtro-genero" className="block text-sm font-medium text-gray-700 mb-1">Género</label>
                <select
                  id="filtro-genero"
                  value={filtroGenero}
                  onChange={(e) => setFiltroGenero(e.target.value as GeneroLibro | 'TODOS')}
                  className="w-full md:w-40 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="TODOS">Todos los géneros</option>
                  {Object.values(GeneroLibro).map(genero => (
                    <option key={genero} value={genero}>{genero}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="filtro-estado" className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                <select
                  id="filtro-estado"
                  value={filtroEstado}
                  onChange={(e) => setFiltroEstado(e.target.value as EstadoLibro | 'TODOS')}
                  className="w-full md:w-40 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="TODOS">Todos los estados</option>
                  <option value="disponible">Disponible</option>
                  <option value="prestado">Prestado</option>
                  <option value="reservado">Reservado</option>
                  <option value="mantenimiento">Mantenimiento</option>
                </select>
              </div>
            </div>
          </section>
          {/* Título */}
          <div className="px-6 pt-6 pb-2">
            <h2 className="text-2xl font-semibold text-gray-900">
              📖 Libros ({librosFiltrados.length} de {totalLibros})
            </h2>
          </div>
          {/* Tarjetas */}
          <div className="flex-1 px-6 pb-8">
            {librosFiltrados.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron libros</h3>
                <p className="text-gray-600">Intenta ajustar los filtros para ver más resultados.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {librosFiltrados.map(libro => (
                  <div className="w-full max-w-[340px] mx-auto" key={libro.id}>
                    <BookCard 
                      libro={libro} 
                      onCambiarEstado={handleCambiarEstado}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Footer */}
          <footer className="text-center py-8 border-t w-full bg-white mt-auto">
            <p className="text-gray-600">
              ✨ Construido con <span className="text-red-500">❤️</span> usando React + TypeScript + Tailwind CSS
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
