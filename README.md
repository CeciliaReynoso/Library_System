# 📚 Sistema de Biblioteca - React + TypeScript + Tailwind

Una aplicación moderna de gestión de biblioteca construida con React, TypeScript y Tailwind CSS.

![React](https://img.shields.io/badge/React-19.1.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-06B6D4.svg)
![Vite](https://img.shields.io/badge/Vite-7.0.6-646CFF.svg)

## 🚀 Características

- ✅ **Frontend moderno**: React 19 con TypeScript para type safety
- ✅ **Diseño responsivo**: Tailwind CSS con grid adaptativo
- ✅ **Gestión de estado**: React hooks para manejo eficiente del estado
- ✅ **Filtros dinámicos**: Por género y estado de libro
- ✅ **Interfaz interactiva**: Cambio de estado de libros con un click
- ✅ **Optimización de imágenes**: Integración con Unsplash
- ✅ **Estadísticas en tiempo real**: Contadores dinámicos

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 19** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de CSS utilitario
- **Vite** - Build tool y servidor de desarrollo

### Herramientas de Desarrollo
- **ESLint** - Linter para calidad de código
- **PostCSS** - Procesador de CSS
- **Git** - Control de versiones

## 📦 Instalación

### Prerrequisitos
- Node.js >= 18.0.0
- npm >= 9.0.0

### Pasos de instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/CeciliaReynoso/Library_System.git
   cd Library_System
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   - Visita `http://localhost:5173/`

## 🎯 Funcionalidades

### ✅ Implementadas
- **Listado de libros**: Vista en grid responsivo
- **Filtros avanzados**: Por género (Ficción, Ciencia, etc.) y estado
- **Gestión de estados**: Disponible, Prestado, Reservado, Mantenimiento
- **Información detallada**: Autor, año, páginas, calificación
- **Diseño moderno**: Cards con hover effects y transiciones

### 🔄 En desarrollo
- [ ] Formulario para agregar nuevos libros
- [ ] Búsqueda por texto (título/autor)
- [ ] Modo oscuro/claro
- [ ] Persistencia en localStorage
- [ ] Autenticación de usuarios
- [ ] Backend con base de datos
- [ ] Integración con Cloudinary para imágenes

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── BookCard.tsx          # Componente tarjeta de libro
│   └── BookList.tsx          # Lista principal con filtros
├── types/
│   └── biblioteca.ts         # Definiciones TypeScript
├── App.jsx                   # Componente principal
├── index.css                 # Estilos Tailwind
└── main.jsx                  # Punto de entrada
```

## 💻 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Construcción
npm run build        # Genera build de producción
npm run preview      # Vista previa del build

# Calidad de código
npm run lint         # Ejecuta ESLint
```

## 🎨 Conceptos TypeScript Aplicados

- **Enums**: `GeneroLibro` para categorización
- **Literal Types**: `EstadoLibro` para estados específicos
- **Interfaces**: `Libro`, `Autor` con propiedades tipadas
- **Herencia**: `Libro extends InformacionBasica`
- **Propiedades opcionales**: `fechaNacimiento?`, `calificacion?`
- **Arrays tipados**: `Libro[]` para type safety
- **Function typing**: Parámetros y retornos específicos

## 🎨 Estilos Tailwind Destacados

- **Grid responsivo**: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
- **Hover effects**: `hover:shadow-lg transition-shadow duration-300`
- **Color schemes**: Estados dinámicos con clases condicionales
- **Components**: Cards modernas con `rounded-lg shadow-md`

## 📈 Roadmap Futuro

### Fase 2: Backend Integration
- Integración con Node.js + Express
- Base de datos PostgreSQL
- API REST para CRUD operations

### Fase 3: Funcionalidades Avanzadas
- Sistema de usuarios y roles
- Historial de préstamos
- Notificaciones y recordatorios
- Dashboard administrativo

### Fase 4: Deploy y DevOps
- Containerización con Docker
- Deploy en Vercel/Netlify
- CI/CD con GitHub Actions

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Autor

**Cecilia Reynoso**
- GitHub: [@CeciliaReynoso](https://github.com/CeciliaReynoso)
- LinkedIn: [Tu Perfil](https://linkedin.com/in/tu-perfil)

---

⭐ ¡No olvides dar una estrella al proyecto si te ha sido útil!
