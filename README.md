# Wizzer Frontend

Wizzer es una aplicación web para ayudar a encontrar mascotas perdidas.

## Requisitos

- Node.js (versión 18 o superior)
- npm (versión 9 o superior)

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/wizzer-frontend.git
cd wizzer-frontend
```

2. Instala las dependencias:
```bash
npm install
```

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200`.

## Construcción

Para construir la aplicación para producción:

```bash
npm run build
```

Los archivos generados se encontrarán en el directorio `dist/wizzer-frontend`.

## Pruebas

Para ejecutar las pruebas unitarias:

```bash
npm test
```

## Estructura del Proyecto

```
src/
├── app/
│   ├── features/          # Módulos de características
│   │   ├── home/         # Página de inicio
│   │   ├── pets/         # Gestión de mascotas
│   │   └── map/          # Mapa interactivo
│   ├── core/             # Servicios y modelos core
│   └── shared/           # Componentes y utilidades compartidas
├── assets/               # Recursos estáticos
└── styles.scss          # Estilos globales
```

## Tecnologías Utilizadas

- Angular 17
- Angular Material
- TypeScript
- SCSS
- RxJS

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles. 