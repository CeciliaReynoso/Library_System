// ===== TIPOS Y INTERFACES PARA EL SISTEMA DE BIBLIOTECA =====

// Enum para géneros de libros
export enum GeneroLibro {
  FICCION = "FICCION",
  NO_FICCION = "NO_FICCION", 
  CIENCIA = "CIENCIA",
  HISTORIA = "HISTORIA",
  BIOGRAFIA = "BIOGRAFIA"
}

// Literal types para estado del libro
export type EstadoLibro = "disponible" | "prestado" | "reservado" | "mantenimiento";

// Type alias para calificación
export type Calificacion = 1 | 2 | 3 | 4 | 5;

// Interface para Autor
export interface Autor {
  readonly id: number;
  nombre: string;
  apellido: string;
  nacionalidad: string;
  fechaNacimiento?: string; // Propiedad opcional
}

// Interface base para información básica
export interface InformacionBasica {
  readonly id: number;
  titulo: string;
  isbn: string;
}

// Interface para Libro que extiende información básica
export interface Libro extends InformacionBasica {
  autor: Autor;
  genero: GeneroLibro;
  año: number;
  paginas: number;
  estado: EstadoLibro;
  calificacion?: Calificacion; // Opcional
  disponible: boolean;
  imagenUrl?: string; // Para la imagen del libro
}

// Datos de ejemplo
export const autoresEjemplo: Autor[] = [
  {
    id: 1,
    nombre: "Gabriel",
    apellido: "García Márquez",
    nacionalidad: "Colombiana",
    fechaNacimiento: "1927-03-06"
  },
  {
    id: 2,
    nombre: "Isabel",
    apellido: "Allende",
    nacionalidad: "Chilena"
  }
];

export const librosEjemplo: Libro[] = [
  {
    id: 1,
    titulo: "Cien años de soledad",
    isbn: "978-84-376-0494-7",
    autor: autoresEjemplo[0],
    genero: GeneroLibro.FICCION,
    año: 1967,
    paginas: 471,
    estado: "disponible",
    calificacion: 5,
    disponible: true,
    imagenUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&crop=center"
  },
  {
    id: 2,
    titulo: "La casa de los espíritus",
    isbn: "978-84-204-8200-7",
    autor: autoresEjemplo[1],
    genero: GeneroLibro.FICCION,
    año: 1982,
    paginas: 448,
    estado: "prestado",
    disponible: false,
    imagenUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop&crop=center"
  },
  {
    id: 3,
    titulo: "El amor en los tiempos del cólera",
    isbn: "978-84-376-0495-4",
    autor: autoresEjemplo[0],
    genero: GeneroLibro.FICCION,
    año: 1985,
    paginas: 368,
    estado: "disponible",
    calificacion: 4,
    disponible: true,
    imagenUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=center"
  }
];
