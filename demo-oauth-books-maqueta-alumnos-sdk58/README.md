# OAuth2 y libros protegidos · Expo SDK 58

La maqueta conserva los TODO de login, refresh, interceptor, listado y contexto de sesión.

## Estructura Clean Architecture

```text
app/                         rutas y composición de dependencias
src/
  presentation/              pantallas, componentes y contexto de sesión
  domain/                    modelos y contratos de repositorios
  infrastructure/            Axios, configuración y tokens en memoria
```

`presentation` utiliza los contratos de `domain`. `infrastructure` los implementa. Las rutas de `app` conectan las capas.

## Configuración

Requiere Node.js 22.13 o superior. Copia `.env.example` como `.env` y configura `EXPO_PUBLIC_OAUTH_CLIENT_ID` y `EXPO_PUBLIC_OAUTH_CLIENT_SECRET` con credenciales válidas para la demo. Puedes cambiar también las dos URLs si usas otros servidores. Los valores de los ZIP originales se retiraron de estos archivos.

```bash
npm ci
npm start
```

Verificación:

```bash
npx expo install --check
npx tsc --noEmit
npm run lint
```

**Nota de la demo:** Las variables `EXPO_PUBLIC_` se incluyen en la aplicación compilada. No guardes secretos reales de producción en una app móvil. El flujo `grant_type=password` se conserva porque forma parte del ejercicio original.
