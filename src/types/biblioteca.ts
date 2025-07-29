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
  },
  {
    id: 3,
    nombre: "Mario",
    apellido: "Vargas Llosa",
    nacionalidad: "Peruana",
    fechaNacimiento: "1936-03-28"
  },
  {
    id: 4,
    nombre: "Jorge Luis",
    apellido: "Borges",
    nacionalidad: "Argentina",
    fechaNacimiento: "1899-08-24"
  },
  {
    id: 5,
    nombre: "Octavio",
    apellido: "Paz",
    nacionalidad: "Mexicana",
    fechaNacimiento: "1914-03-31"
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
  },
  {
    id: 4,
    titulo: "La ciudad y los perros",
    isbn: "978-84-376-0496-1",
    autor: autoresEjemplo[2],
    genero: GeneroLibro.FICCION,
    año: 1963,
    paginas: 414,
    estado: "disponible",
    calificacion: 4,
    disponible: true,
    imagenUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop&crop=center"
  },
  {
    id: 5,
    titulo: "El Aleph",
    isbn: "978-84-376-0497-8",
    autor: autoresEjemplo[3],
    genero: GeneroLibro.FICCION,
    año: 1949,
    paginas: 224,
    estado: "reservado",
    calificacion: 5,
    disponible: false,
    imagenUrl: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=400&fit=crop&crop=center"
  },
  {
    id: 6,
    titulo: "El laberinto de la soledad",
    isbn: "978-84-376-0498-5",
    autor: autoresEjemplo[4],
    genero: GeneroLibro.NO_FICCION,
    año: 1950,
    paginas: 352,
    estado: "disponible",
    calificacion: 4,
    disponible: true,
    imagenUrl: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=300&h=400&fit=crop&crop=center"
  }
];
