# Curso de React Native con Expo

Este repositorio reúne ejercicios del curso de React Native. Incluye dos aplicaciones independientes desarrolladas con **React Native**, **Expo**, **Expo Router** y **NativeWind**. Cada carpeta tiene su propio `package.json`, por lo que las dependencias y el servidor se ejecutan por separado.

## Proyectos

### `formularios_router`

Aplicación de práctica para aprender navegación con Expo Router, estilos con NativeWind y formularios. La pantalla inicial permite navegar a una pantalla de estilos y a una de formulario.

### `login`

Aplicación de ejemplo con pantallas de inicio de sesión, registro y bienvenida. Incluye validaciones de campos y navegación entre pantallas.

Credenciales de demostración:

| Correo | Contraseña |
| --- | --- |
| `admin@edu.pe` | `admin123` |

## Requisitos

- [Node.js (versión LTS)](https://nodejs.org/), que incluye npm.
- [Expo Go](https://expo.dev/go) en el teléfono para ejecutar la aplicación sin emulador.
- Para usar emuladores: Android Studio en Windows o macOS; Xcode en macOS para el simulador de iPhone.

Comprueba que Node.js y npm estén disponibles:

```bash
node -v
npm -v
```

## Instalar y ejecutar

Elige el proyecto que quieras levantar y ejecuta los comandos desde su carpeta. Por ejemplo, para `formularios_router`:

```bash
cd formularios_router
npm install
npx expo start
```

Para iniciar la aplicación de inicio de sesión:

```bash
cd login
npm install
npx expo start
```

Si estás en la raíz del repositorio, puedes entrar a cada carpeta con `cd formularios_router` o `cd login`. Al iniciar Expo, escanea el código QR con Expo Go (Android) o con la cámara del iPhone. El teléfono y la computadora deben estar conectados a la misma red.

### Abrir en otras plataformas

Con el servidor Expo en marcha, puedes usar las teclas que aparecen en la terminal, o ejecutar los scripts correspondientes desde la carpeta del proyecto:

```bash
npm run android  # abre en un emulador Android disponible
npm run ios      # abre en el simulador iOS (macOS)
npm run web      # abre la versión web
```

Para detener el servidor, pulsa `Ctrl + C` en la terminal.

## Tecnologías

- React Native y React
- Expo SDK 57
- Expo Router para la navegación basada en archivos
- NativeWind para estilos con clases
- TypeScript

## Estructura del repositorio

```text
.
├── formularios_router/   # Ejercicios de rutas, estilos y formularios
│   └── src/app/          # Pantallas de Expo Router
├── login/                # Ejemplo de login, registro y bienvenida
│   └── src/app/          # Pantallas de Expo Router
└── readme.md
```

Cada aplicación tiene un README propio con más detalles de ese ejercicio.
