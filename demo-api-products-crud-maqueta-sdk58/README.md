# Maqueta para alumnos — Productos CRUD · Expo SDK 58

Proyecto de React Native con Expo Router, Axios y una estructura Clean Architecture sencilla.

## Estructura

```text
app/                           rutas de Expo Router y composición de dependencias
src/
  presentation/                pantalla, componentes y hook de estado
  domain/
    entities/Product.ts         modelo y datos de entrada
    repositories/ProductsRepository.ts  contrato del repositorio
  data/
    repositories/axiosProductsRepository.ts  implementación HTTP con Axios
```

La presentación depende del contrato de `domain`. `data` implementa ese contrato. La ruta `app/index.tsx` conecta ambas capas.

Los métodos HTTP están pendientes para que el alumno los complete en `src/data/repositories/axiosProductsRepository.ts`.

## Preparación

Requiere Node.js 22.13 o superior. Copia `.env.example` como `.env` y reemplaza `REEMPLAZA_TU_TOKEN` por un endpoint vigente de [CrudCrud](https://crudcrud.com). Los endpoints de CrudCrud expiran.

```bash
npm ci
npm start
```

Para comprobar el proyecto:

```bash
npx expo install --check
npx tsc --noEmit
npm run lint
```
