# Google Maps · Semana 10 · Expo SDK 58

La maqueta conserva los TODO del GPS y del movimiento de cámara.

## Estructura

```text
app/                         ruta y conexión de dependencias
src/
  presentation/              pantalla y componentes
  domain/                    modelo Ubicacion y contrato LocationService
  infrastructure/            acceso a expo-location
```

La pantalla usa el contrato de `src/domain/services/LocationService.ts`. `app/index.tsx` le entrega la implementación de `src/infrastructure/services/locationService.ts`.

## Preparación

Requiere Node.js 22.13 o superior. Instala dependencias con `npm ci`. Para mostrar Google Maps en Android, reemplaza `TU_GOOGLE_MAPS_API_KEY` en `app.json` por una clave válida de **Maps SDK for Android**. Configura sus restricciones para el `android.package` de este proyecto y el certificado SHA-1 que use el build. La clave del ZIP original no está incluida.

```bash
npm ci
npm start
```

La pantalla conserva un modo de maqueta en Expo Go. Para comprobar el mapa nativo, instala un APK generado con EAS desde tu cuenta Expo:

```bash
npx eas-cli login
npx eas-cli init
npx eas-cli build -p android --profile preview
```

El perfil `preview` de `eas.json` solicita un APK. Esta copia no reutiliza el `projectId` docente; vincúlala a tu propio proyecto. La generación del APK requiere conexión y cuenta Expo.

## Verificación local

```bash
npx expo install --check
npx tsc --noEmit
npm run lint
```
