# Guía alumnos — Axios CRUD

## Objetivo

Completar un CRUD remoto con Axios, parecido a Retrofit en Android.

## Métodos

| Método | Endpoint | Acción |
|---|---|---|
| GET | `/products` | Listar |
| POST | `/products` | Crear |
| PUT | `/products/{id}` | Actualizar |
| DELETE | `/products/{id}` | Eliminar |

## Archivos

```text
src/domain/entities/Product.ts
src/data/repositories/axiosProductsRepository.ts
src/presentation/hooks/useProductsApi.ts
src/presentation/screens/ProductsScreen.tsx
app/index.tsx
```

## Flujo

```text
Pantalla (`src/presentation/screens/ProductsScreen.tsx`)
  ↓
useProductsApi() → ProductsRepository
  ↓
axiosProductsRepository.ts
  ↓
Axios
  ↓
CrudCrud /products
  ↓
response.data
  ↓
FlatList
```
