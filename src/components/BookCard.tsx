import { Libro, EstadoLibro } from '../types/biblioteca';

interface BookCardProps {
  libro: Libro;
  onCambiarEstado: (id: number, nuevoEstado: EstadoLibro) => void;
}

export function BookCard({ libro, onCambiarEstado }: BookCardProps) {
  const getEstadoColor = (estado: EstadoLibro) => {
    switch (estado) {
      case 'disponible':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'prestado':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'reservado':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'mantenimiento':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleCambiarEstado = () => {
    const nuevosEstados: EstadoLibro[] = ['disponible', 'prestado', 'reservado', 'mantenimiento'];
    const estadoActualIndex = nuevosEstados.indexOf(libro.estado);
    const siguienteEstado = nuevosEstados[(estadoActualIndex + 1) % nuevosEstados.length];
    onCambiarEstado(libro.id, siguienteEstado);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      {/* Imagen del libro */}
      <div className="h-48 bg-gray-200 overflow-hidden">
        {libro.imagenUrl ? (
          <img 
            src={libro.imagenUrl} 
            alt={libro.titulo}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500">
            <span className="text-white text-4xl">📚</span>
          </div>
        )}
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-4 flex flex-col flex-1">
        {/* Título */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
          {libro.titulo}
        </h3>

        {/* Autor */}
        <p className="text-sm text-gray-600 mb-2">
          por <span className="font-medium">{libro.autor.nombre} {libro.autor.apellido}</span>
        </p>

        {/* Información adicional */}
        <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
          <span>📅 {libro.año}</span>
          <span>📄 {libro.paginas} pág.</span>
          <span>🏷️ {libro.genero}</span>
        </div>

        {/* Calificación */}
        {libro.calificacion && (
          <div className="flex items-center mb-3">
            <span className="text-sm text-gray-600 mr-1">⭐</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <span 
                  key={star}
                  className={`text-sm ${star <= libro.calificacion! ? 'text-yellow-400' : 'text-gray-300'}`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-1">({libro.calificacion}/5)</span>
          </div>
        )}

        {/* Estado y acciones */}
        <div className="flex items-center justify-between mt-auto">
          <span 
            className={`px-2 py-1 text-xs font-medium rounded-md border ${getEstadoColor(libro.estado)}`}
          >
            {libro.estado.charAt(0).toUpperCase() + libro.estado.slice(1)}
          </span>

          <button
            onClick={handleCambiarEstado}
            className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 transition-colors duration-200"
          >
            Cambiar estado
          </button>
        </div>

        {/* ISBN */}
        <p className="text-xs text-gray-400 mt-2">
          ISBN: {libro.isbn}
        </p>
      </div>
    </div>
  );
}
