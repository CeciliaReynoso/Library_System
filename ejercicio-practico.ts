// ===== EJERCICIO PRÁCTICO: COMPLETA EL CÓDIGO =====
// Tu misión: Completar las partes faltantes usando los conceptos aprendidos

console.log("🎯 EJERCICIO PRÁCTICO - Sistema de Biblioteca\n");

// ===== PARTE 1: COMPLETA LOS TIPOS =====

// TODO: Crea un enum para géneros de libros
enum GeneroLibro {
    FICCION = "FICCION",
    NO_FICCION = "NO_FICCION",
    CIENCIA = "CIENCIA", 
    HISTORIA = "HISTORIA",
    BIOGRAFIA = "BIOGRAFIA"
    // ☝️ Ejercicio: Descomenta y agrega los valores faltantes
}

// TODO: Crea literal types para estado del libro
type EstadoLibro = "disponible" | "prestado" | "reservado" | "mantenimiento";
// ☝️ Ejercicio: Esta línea está completa como ejemplo

// TODO: Crea un type alias para calificación (números del 1 al 5)
type Calificacion = 1 | 2 | 3 | 4 | 5;
// ☝️ Ejercicio: Esta línea está completa como ejemplo

// ===== PARTE 2: COMPLETA LAS INTERFACES =====

// TODO: Crea interface para Autor
interface Autor {
    readonly id: number;
    nombre: string;
    apellido: string;
    nacionalidad: string;
    fechaNacimiento?: string; // Propiedad opcional
}

// TODO: Crea interface para Libro que extienda información básica
interface InformacionBasica {
    readonly id: number;
    titulo: string;
    isbn: string;
}

interface Libro extends InformacionBasica {
    autor: Autor;
    genero: GeneroLibro;
    año: number;
    paginas: number;
    estado: EstadoLibro;
    calificacion?: Calificacion; // Opcional
    disponible: boolean;
}

// ===== PARTE 3: COMPLETA LAS FUNCIONES =====

// TODO: Array de libros
let biblioteca: Libro[] = [];

// TODO: Función para agregar libro
function agregarLibro(libro: Libro): void {
    biblioteca.push(libro);
    console.log(`✅ Libro "${libro.titulo}" agregado a la biblioteca`);
}

// TODO: Función para buscar libros por género
function buscarPorGenero(genero: GeneroLibro): Libro[] {
    return biblioteca.filter(libro => libro.genero === genero);
}

// TODO: Función para cambiar estado del libro
function cambiarEstado(id: number, nuevoEstado: EstadoLibro): void {
    const libro = biblioteca.find(lib => lib.id === id);
    if (libro) {
        libro.estado = nuevoEstado;
        console.log(`📖 Estado del libro "${libro.titulo}" cambiado a: ${nuevoEstado}`);
    } else {
        console.log(`❌ No se encontró el libro con ID: ${id}`);
    }
}

// ===== DATOS DE PRUEBA =====

const autor1: Autor = {
    id: 1,
    nombre: "Gabriel",
    apellido: "García Márquez",
    nacionalidad: "Colombiana",
    fechaNacimiento: "1927-03-06"
};

// TODO: Crea autor2 sin fecha de nacimiento (usando propiedad opcional)
const autor2: Autor = {
    id: 2,
    nombre: "Isabel",
    apellido: "Allende",
    nacionalidad: "Chilena"
    // fechaNacimiento es opcional, no se incluye
};

// TODO: Crea libro1 con todos los datos
const libro1: Libro = {
    id: 1,
    titulo: "Cien años de soledad",
    isbn: "978-84-376-0494-7",
    autor: autor1,
    genero: GeneroLibro.FICCION,
    año: 1967,
    paginas: 471,
    estado: "disponible",
    calificacion: 5,
    disponible: true
};

const libro2: Libro = {
    id: 2,
    titulo: "La casa de los espíritus",
    isbn: "978-84-204-8200-7",
    autor: autor2,
    genero: GeneroLibro.FICCION,
    año: 1982,
    paginas: 448,
    estado: "prestado",
    disponible: false
    // calificacion es opcional, no se incluye
};

// ===== EJECUTAR EJEMPLOS =====

console.log("📚 Agregando libros a la biblioteca...\n");
agregarLibro(libro1);
agregarLibro(libro2);

console.log("\n📊 Estado actual de la biblioteca:");
console.log(`Total de libros: ${biblioteca.length}`);

console.log("\n🔍 Buscando libros de ficción:");
const librosFiccion = buscarPorGenero(GeneroLibro.FICCION);
librosFiccion.forEach(libro => {
    console.log(`📖 "${libro.titulo}" por ${libro.autor.nombre} ${libro.autor.apellido} - Estado: ${libro.estado}`);
});

console.log("\n🔄 Cambiando estado de un libro:");
cambiarEstado(2, "disponible");

console.log("\n📋 Información detallada de los libros:");
biblioteca.forEach(libro => {
    console.log(`
📖 ${libro.titulo}
   Autor: ${libro.autor.nombre} ${libro.autor.apellido} (${libro.autor.nacionalidad})
   Género: ${libro.genero}
   Año: ${libro.año}
   Páginas: ${libro.paginas}
   Estado: ${libro.estado}
   ${libro.calificacion ? `Calificación: ${libro.calificacion}/5` : 'Sin calificación'}
   ${libro.disponible ? '✅ Disponible' : '❌ No disponible'}
    `);
});

console.log(`
🎯 CONCEPTOS APLICADOS EN ESTE EJERCICIO:
──────────────────────────────────────────
✅ Enums: GeneroLibro para categorizar libros
✅ Literal Types: EstadoLibro, Calificacion para valores específicos
✅ Type Aliases: Tipos personalizados reutilizables
✅ Interfaces: Autor, InformacionBasica, Libro
✅ Herencia: Libro extends InformacionBasica
✅ Propiedades opcionales: fechaNacimiento?, calificacion?
✅ Propiedades readonly: id (no se puede modificar)
✅ Arrays tipados: Libro[] para la biblioteca
✅ Function typing: Parámetros y tipos de retorno específicos
✅ Union types: Múltiples opciones válidas
✅ Template literals: Interpolación de strings

💡 BENEFICIOS DE TYPESCRIPT EN ESTE EJEMPLO:
─────────────────────────────────────────────
🔒 Seguridad de tipos: Evita errores en tiempo de compilación
🚀 IntelliSense: Autocompletado inteligente en el editor
📖 Documentación: Los tipos documentan la estructura del código
🔄 Refactoring: Cambios seguros en toda la base de código
🎯 Consistencia: Estructura de datos predecible y confiable

🚀 ¡Has completado el ejercicio práctico con éxito!
`);
