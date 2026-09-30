# Tarjeta de usuario

Proyecto de interfaz hecho con React, TypeScript y Vite. La pantalla muestra una tarjeta de usuario con sus iniciales, nombre, rol, estado de conexión y un botón para ver el perfil.

## Requisitos

- Node.js y npm instalados.

## Cómo iniciar el proyecto

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
npm run dev
```

Vite mostrará en la terminal la dirección local (normalmente `http://localhost:5173`). Ábrela en el navegador. Para detener el servidor, pulsa `Ctrl + C` en la terminal.

## Archivos trabajados

- `src/types/ejemplos.ts`: reúne ejemplos de introducción a TypeScript, como variables tipadas, interfaces, funciones, arreglos y parámetros opcionales.
- `src/types/Usuario.ts`: declara el modelo `Usuario`, con sus propiedades y los roles permitidos. Este tipo sirve para tipar los datos y la lógica del componente.
- `src/App.tsx`: prepara el ejemplo de usuario que se muestra y renderiza el componente `UserCard`.
- `src/components/UserCard.tsx`: recibe el usuario, calcula sus iniciales y muestra su nombre, rol, estado y botón. También contiene los estilos de la tarjeta.

## Cómo se muestra la tarjeta

La aplicación arranca desde `index.html`, que carga `src/main.tsx`. Este archivo renderiza `src/App.tsx`; allí se crea el usuario de ejemplo y se pasa al componente `UserCard`. `Usuario.ts` define la forma de esos datos. `ejemplos.ts` se usa como material aparte para practicar los fundamentos de TypeScript.

## Otros comandos

```bash
npm run build    # comprueba TypeScript y genera la versión de producción en dist/
npm run preview  # sirve localmente la compilación de dist/
npm run lint     # analiza el código con Oxlint
```
