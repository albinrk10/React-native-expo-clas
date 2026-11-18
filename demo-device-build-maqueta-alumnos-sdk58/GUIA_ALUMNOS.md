# Guía alumnos - Semana 10 dispositivo + build

## Objetivo

Completar una app que usa funcionalidades del dispositivo:

```txt
Cámara / Galería -> Preview de imagen -> GPS -> Abrir mapa -> Guardar evidencia
```

## Archivo principal para completar

```txt
src/infrastructure/services/deviceService.ts
```

## TODOs

### Cámara

Completar:

```txt
requestCameraPermissionsAsync
launchCameraAsync
retornar result.assets[0].uri
```

### Galería

Completar:

```txt
requestMediaLibraryPermissionsAsync
launchImageLibraryAsync
retornar result.assets[0].uri
```

### GPS

Completar:

```txt
requestForegroundPermissionsAsync
getCurrentPositionAsync
retornar latitude y longitude
```

### Mapa

Completar:

```txt
Linking.openURL(url)
```

URL sugerida:

```txt
https://www.google.com/maps/search/?api=1&query=LATITUDE,LONGITUDE
```

## Build

El archivo `eas.json` ya está incluido.

Para generar APK de prueba:

```bash
npm install -g eas-cli
eas login
eas init
eas build -p android --profile preview
```

## Resultado esperado

La app debe permitir:

- tomar foto o seleccionar imagen,
- obtener GPS,
- abrir mapa,
- guardar evidencia en memoria,
- listar evidencias,
- eliminar evidencias.
