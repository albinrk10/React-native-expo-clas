# CRUD de Productos — React Native & Expo

Aplicación móvil para listar, crear, editar y eliminar productos conectándose a una API REST remota con **Axios**.

---

## 1. ¿De dónde se obtiene el Mock de API?
Entra a **[crudcrud.com](https://crudcrud.com)** y copia la URL que aparece en pantalla:
```text
https://crudcrud.com/api/TU_TOKEN_GENERADO
```

> ⚠️ **Nota:** Cada endpoint de CrudCrud expira a las 24 horas. Si da error, genera uno nuevo en la web y cámbialo en el `.env`.

---

## 2. ¿Cómo configurar el `.env`?

1. Entra a la carpeta y crea el archivo `.env`:
   ```bash
   cd demo-api-products-crud-maqueta-sdk58
   cp .env.example .env
   ```

2. Abre `.env` y pega tu URL de CrudCrud:
   ```env
   EXPO_PUBLIC_CRUDCRUD_BASE_URL=https://crudcrud.com/api/TU_TOKEN_GENERADO
   ```

---

## 3. ¿Cómo ejecutar el proyecto?

```bash
npm install
npx expo start
```

Escanea el código QR desde tu celular con la app **Expo Go** (Android / iOS).
