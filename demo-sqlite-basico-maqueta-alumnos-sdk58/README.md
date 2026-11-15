# SQLite básico · Semana 9 · Expo SDK 58

La maqueta mantiene los TODO de creación de tabla y operaciones SQL.

## Estructura

```text
app/                         rutas y conexión de SQLite con el repositorio
src/
  presentation/              pantalla y componentes
  domain/                    modelo y contrato SolicitudRepository
  infrastructure/            inicialización de SQLite y consultas SQL
```

`presentation` usa el contrato de `domain`. `infrastructure` implementa ese contrato. `app/index.tsx` crea el repositorio con la conexión SQLite.

## Ejecutar

Requiere Node.js 22.13 o superior.

```bash
npm ci
npm start
```

## Verificar

```bash
npx expo install --check
npx tsc --noEmit
npm run lint
```

La configuración de Metro incluye soporte WebAssembly y los encabezados necesarios para SQLite en desarrollo web. Si publicas la versión web, configura también los encabezados `Cross-Origin-Embedder-Policy: credentialless` y `Cross-Origin-Opener-Policy: same-origin` en el servidor de alojamiento.
