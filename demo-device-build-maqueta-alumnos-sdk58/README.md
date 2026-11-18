# Dispositivo y build · Semana 10 · Expo SDK 58

La maqueta conserva los TODO de cámara, galería, GPS y apertura del mapa. Las evidencias se guardan solo en memoria mientras la app está abierta.

## Estructura Clean Architecture

```text
app/                         ruta y conexión de dependencias
src/
  presentation/              pantalla y componentes
  domain/                    modelo y contrato DeviceService
  infrastructure/            acceso a cámara, galería, GPS y mapa
```

La pantalla utiliza `src/domain/services/DeviceService.ts`; `app/index.tsx` le entrega la implementación de `src/infrastructure/services/deviceService.ts`.

## Ejecutar

Requiere Node.js 22.13 o superior.

```bash
npm ci
npm start
```

## APK de prueba con EAS

El perfil `preview` de `eas.json` genera un APK. Desde tu propia cuenta Expo, vincula primero esta copia a un proyecto y luego solicita el build:

```bash
npx eas-cli login
npx eas-cli init
npx eas-cli build -p android --profile preview
```

La copia SDK 58 no reutiliza el `projectId` ni el identificador Android del proyecto docente original. EAS te pedirá configurar el identificador de tu app si hace falta. La cámara y el GPS deben comprobarse en un dispositivo o emulador con los permisos correspondientes; la exportación de código no prueba esos sensores.

## Comprobaciones locales

```bash
npx expo install --check
npx tsc --noEmit
npm run lint
```
