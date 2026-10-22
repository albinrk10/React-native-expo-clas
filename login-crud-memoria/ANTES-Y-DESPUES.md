# Demostración: login de semana 4 + CRUD de semana 5

## Qué se tomó de cada ZIP

La base es `login-maqueta-sem4.zip`: conserva Expo **57**, sus dependencias,
la estructura `src/`, el login, el registro y el diseño del panel.
De `maqueta-login-crud-sem5.zip` (Expo **54**) se adaptó el módulo de estudiantes:
no se reemplazó el SDK ni se mezclaron sus dependencias.

## Antes y después

| Antes (semana 4) | Después (esta copia) |
| --- | --- |
| Login, registro y panel | Mismas pantallas y acceso a Estudiantes |
| Sin administración de estudiantes | Listar, crear, editar y eliminar |
| Sin búsqueda de estudiantes | Buscar por nombre o correo y filtrar por carrera |
| Sin estado compartido del módulo | Context + useReducer, únicamente en memoria |

## Archivos para explicar en clase

- `src/app/home.tsx`: botón **Ir a Estudiantes**; también se limpia el temporizador al salir.
- `src/app/_layout.tsx`: el Provider envuelve las rutas y comparte el estado;
  se registraron las tres pantallas con encabezado para regresar.
- `src/presentation/hooks/useRegisterForm.ts`: ajuste de la validación del correo al evento
  de escritura, conservando su comportamiento y resolviendo un error previo de lint.
- `src/domain/entities/Estudiante.ts`: contrato TypeScript del estudiante y sus campos.
- `src/presentation/context/EstudiantesContext.tsx`: lista inicial de Juan y Maria,
  funciones de crear, actualizar, eliminar y buscar por id. Los identificadores nuevos
  combinan tiempo y un sufijo aleatorio para reducir colisiones.
- `src/presentation/reducers/estudiantesReducer.ts`: acciones CARGAR, CREAR,
  ACTUALIZAR y ELIMINAR; usa spread, map y filter sin modificar el arreglo original.
- `src/app/estudiantes/index.tsx`: listado, búsqueda, filtro por carrera y confirmación
  de eliminación con Modal para móvil y web. Si una carrera desaparece, muestra TODAS.
- `src/app/estudiantes/nuevo.tsx`: formulario y acción de creación.
- `src/app/estudiantes/[id].tsx`: busca el estudiante por id y permite editarlo;
  muestra un mensaje si ese id no existe.
- `src/presentation/components/estudiantes/EstudianteForm.tsx`: formulario reutilizable
  para crear y editar; valida nombre, correo y carrera, y limpia espacios.
- `src/presentation/components/estudiantes/EstudianteCard.tsx`: tarjeta con botones
  para editar y eliminar.

Los comentarios `AÑADIDO` señalan puntos clave del código integrado.
El CRUD, el buscador y el filtro proceden de la referencia de semana 5.
La adaptación a `src/` y Expo 57, el inicio directo del reducer, la confirmación
multiplataforma y los ajustes de validación y navegación se realizaron en esta copia.

## useReducer no guarda caché

`useReducer` recibe el estado actual y una acción y calcula el siguiente estado.
React conserva ese estado mientras el Provider siga montado. Navegar entre pantallas
conserva los cambios; una **recarga completa** o reiniciar la app restaura los dos
estudiantes de ejemplo. Eliminar un estudiante también es temporal.
No se usa AsyncStorage, localStorage, SQLite ni un servidor.
Fast Refresh durante desarrollo puede conservar estado: para mostrar el reinicio,
usa Reload en Expo o recarga la página completa en web.
Cerrar sesión navega al login; por sí solo no reinicia el Provider.

## Ejecutar

Desde esta carpeta:

```bash
npm ci
npm start
```

Para navegador: `npm run web`.
Usuario de demostración: **admin@edu.pe**. Contraseña: **admin123**.
El login y el registro siguen siendo una maqueta, sin autenticación de servidor.

## Guion breve de demostración

1. Enseñar el ZIP original de semana 4 como el antes.
2. Abrir esta copia, iniciar sesión y tocar **Ir a Estudiantes**.
3. Crear un estudiante con nombre, correo válido y carrera.
4. Buscarlo por nombre o correo; probar el filtro de carrera.
5. Editarlo y verificar que la tarjeta cambia.
6. Eliminarlo: probar Cancelar y después confirmar Eliminar.
7. Eliminar uno de los estudiantes iniciales y hacer una recarga completa.
8. Volver a entrar: Juan y Maria reaparecen; los cambios eran solo en memoria.

Documentación consultada:
- https://docs.expo.dev/versions/v57.0.0/
- https://docs.expo.dev/router/basics/navigation/

## Verificación realizada

- `tsc --noEmit`: correcto.
- `npm run lint`: correcto después de ajustar la validación original del registro.
- `expo export --platform web`: compilación y generación de rutas correctas.
- Comprobaciones del reducer: creación, edición, eliminación, lista vacía,
  recarga mediante CARGAR e inmutabilidad de los datos anteriores.

Se añadieron ESLint y su configuración compatible con Expo 57 como herramientas
  de desarrollo. No se agregaron dependencias de almacenamiento.
No se ha probado en un teléfono o emulador; las comprobaciones anteriores no
sustituyen la demostración manual en el dispositivo.
