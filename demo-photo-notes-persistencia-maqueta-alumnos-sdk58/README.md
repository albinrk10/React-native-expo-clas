# Notas con foto y SQLite · Semana 10 · Expo SDK 58

La maqueta conserva comentarios TODO como guía, pero las operaciones de la actividad ya están implementadas.

## Estructura Clean Architecture

```text
app/                         ruta y conexión de dependencias
src/
  presentation/              pantalla y componentes
  domain/                    modelos y contratos de repositorio y servicio
  infrastructure/            SQLite y selección de fotos
```

`app/index.tsx` entrega `notasDatabase` y `fotoService` a la pantalla mediante los contratos de `src/domain`.

## Ejecutar

Requiere Node.js 22.13 o superior.

```bash
npm ci
npm start
```

La base guarda los datos de la nota y la URI de la foto, no el archivo de imagen dentro de SQLite. Una foto procedente de caché puede dejar de estar disponible más adelante; para persistir el archivo de forma duradera habría que copiarlo a un directorio permanente.

## APK de prueba

El perfil `preview` de `eas.json` está configurado para pedir un APK Android. Vincula esta copia a tu cuenta Expo antes de solicitar el build:

```bash
npx eas-cli login
npx eas-cli init
npx eas-cli build -p android --profile preview
```

## Verificación local

```bash
npx expo install --check
npx tsc --noEmit
npm run lint
```

La configuración de Metro permite usar SQLite en web durante el desarrollo. Si publicas la web, el servidor de alojamiento debe enviar los encabezados COEP y COOP que requiere SQLite WebAssembly.
