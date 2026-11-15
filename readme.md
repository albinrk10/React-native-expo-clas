|                               |                               |
|:-----------------------------:|:-----------------------------:|
| <a target="_blank" href="https://reactnative.dev/">  <img src="https://reactnative.dev/img/header_logo.svg" width="180" alt="React Native Logo"></a> | <a target="_blank" href="https://docs.expo.dev/"> <img src="https://www.svgrepo.com/show/330397/expo.svg" width="180" alt="Expo Logo"></a> |
| [Docs React Native](https://reactnative.dev/) | [Docs Expo](https://docs.expo.dev/) |

# Semana 9: Persistencia Local con SQLite y Autenticación OAuth2

Bienvenido a la **Semana 9** del curso de **React Native con Expo**. En esta sesión trabajaremos con dos proyectos prácticos desarrollados bajo el enfoque de **Clean Architecture**, diseñados para dominar la persistencia de datos local y la seguridad en el consumo de APIs protegidas.

---

## 📁 Proyectos de la semana

| Proyecto | Descripción | Tecnologías clave |
| :--- | :--- | :--- |
| **`demo-sqlite-basico-maqueta-alumnos-sdk58`** | Base de datos local offline-first con SQLite para gestión y CRUD de solicitudes. | `expo-sqlite`, Clean Architecture, NativeWind |
| **`demo-oauth-books-maqueta-alumnos-sdk58`** | Autenticación con OAuth2 (Password Grant & Refresh Token), interceptores Axios y catálogo de libros. | `axios`, OAuth2, Context API, NativeWind |

---

## 🏛️ Enfoque: Clean Architecture

Ambos proyectos siguen una estructura desacoplada para separar la lógica de negocio de la interfaz y los servicios externos:

```text
├── app/                  # Rutas (Expo Router) e inyección de dependencias
└── src/
    ├── domain/           # Entidades (modelos) y contratos (interfaces/repositorios)
    ├── infrastructure/   # Implementaciones concretas (SQLite, Axios, APIs, Storage)
    └── presentation/     # Vistas (screens), componentes visuales y contextos (UI/State)
```

- **Domain:** Define las reglas y tipos puros de la aplicación sin depender de librerías externas.
- **Infrastructure:** Implementa los contratos definidos en `domain` (consultas SQL, llamadas HTTP con Axios, configuración).
- **Presentation:** Maneja la interfaz de usuario con Tailwind/NativeWind y el estado accesible para las pantallas.
- **App:** Conecta e inyecta las implementaciones de `infrastructure` hacia los componentes de `presentation`.

---

## 1. Proyecto: SQLite Básico (`demo-sqlite-basico`)

Gestión de solicitudes en una base de datos local SQLite utilizando el módulo oficial `expo-sqlite`.

### Requisitos previos
- Node.js 22.13 o superior.

### Instalación y ejecución

1. Entra a la carpeta del proyecto:
   ```bash
   cd demo-sqlite-basico-maqueta-alumnos-sdk58
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o usando npm ci si prefieres una instalación exacta
   ```

3. Inicia la aplicación:
   ```bash
   npx expo start
   ```

4. Escanea el código QR con **Expo Go** o pulsa:
   - `a` para abrir en emulador de Android.
   - `i` para abrir en simulador de iOS (macOS).
   - `w` para abrir en navegador web.

> 💡 **Nota sobre el entorno Web:** El archivo `metro.config.js` ya incluye soporte para WebAssembly y los encabezados requeridos para SQLite en web. Si lo publicas en producción, recuerda configurar los encabezados `Cross-Origin-Embedder-Policy: credentialless` y `Cross-Origin-Opener-Policy: same-origin`.

### 🎯 Tareas para los alumnos (TODOs)
- **`src/infrastructure/database/database.ts`**:
  - `TODO 1`: Inicializar la base de datos y ejecutar la sentencia `CREATE TABLE IF NOT EXISTS solicitudes ...`.
- **`src/infrastructure/repositories/solicitudRepository.ts`**:
  - `TODO Listar`: Ejecutar `getAllAsync` para traer las solicitudes registradas.
  - `TODO Crear`: Ejecutar `runAsync` con `INSERT INTO solicitudes ...`.
  - `TODO Actualizar`: Ejecutar sentencia `UPDATE` por ID.
  - `TODO Eliminar`: Ejecutar sentencia `DELETE FROM solicitudes WHERE id = ?`.

---

## 2. Proyecto: OAuth2 y Libros Protegidos (`demo-oauth-books`)

Flujo completo de autenticación OAuth2 (Resource Owner Password Credentials Grant) y consumo de API protegida de libros mediante interceptores de **Axios**.

### Requisitos previos
- Node.js 22.13 o superior.

### Configuración del entorno (`.env`)

1. Entra a la carpeta del proyecto:
   ```bash
   cd demo-oauth-books-maqueta-alumnos-sdk58
   ```

2. Copia el archivo de variables de entorno de ejemplo:
   ```bash
   cp .env.example .env
   ```

3. Verifica o ajusta el archivo `.env` con las credenciales del servidor OAuth2 y la API de libros:
   ```env
   EXPO_PUBLIC_OAUTH_TOKEN_URL=https://wso2isjr.techjrstar.com/oauth2/token
   EXPO_PUBLIC_BOOKS_BASE_URL=https://library-management.techjrstar.com/api/v1
   EXPO_PUBLIC_OAUTH_CLIENT_ID=Tz1fQn_lJrff1N5dJeUJy33L1Z0a
   EXPO_PUBLIC_OAUTH_CLIENT_SECRET=GxoEdkmM32JNaXWVdMb8G2053w0fdnWZSXZ22B2attYa
   ```

> ⚠️ **Aviso de seguridad para demos:** Las variables con prefijo `EXPO_PUBLIC_` se compilan en el bundle público de la app móvil. En proyectos reales en producción, nunca expongas credenciales secretas directamente en el cliente.

### Instalación y ejecución

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Inicia el servidor de desarrollo:
   ```bash
   npx expo start
   ```

3. Escanea el QR con **Expo Go** o pulsa `a` (Android) / `i` (iOS) / `w` (Web).

### 🎯 Tareas para los alumnos (TODOs)
- **`src/infrastructure/api/oauthApi.ts`**:
  - Implementar petición POST para obtener token (`grant_type=password`).
  - Implementar petición POST para refrescar token (`grant_type=refresh_token`).
- **`src/infrastructure/api/booksApi.ts`**:
  - `TODO 6`: Interceptor de solicitudes para inyectar `Authorization: Bearer <token>`.
  - `TODO 7`: Interceptor de respuestas para capturar errores `401 Unauthorized`, refrescar el token y reintentar la solicitud original.
  - `TODO 8 & 9`: Métodos para listar libros y obtener detalle.
- **`src/presentation/context/AuthContext.tsx`**:
  - `TODO 10`: Completar la acción de login y almacenamiento de sesión en memoria.
  - `TODO 11`: Implementar la acción de refresh token en el estado global.

---

## 🛠️ Comandos de verificación y buenas prácticas

En cualquiera de los dos proyectos puedes validar la integridad del código ejecutando:

```bash
# Verificar compatibilidad de paquetes Expo
npx expo install --check

# Verificar tipado estático con TypeScript
npx tsc --noEmit

# Ejecutar el linter
npm run lint
```
