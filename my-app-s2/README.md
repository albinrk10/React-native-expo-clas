# Mi primera pantalla en React Native

Aplicación móvil de ejemplo hecha con **Expo** y **React Native**. Muestra una tarjeta de perfil con nombre, rol, estado y botón.

## Archivos principales

- `src/app/index.tsx`: pantalla inicial. Guarda los datos de ejemplo y organiza el título y la tarjeta.
- `src/app/_layout.tsx`: configura la navegación de Expo Router y oculta el encabezado automático para esta pantalla.
- `src/components/UserCard.tsx`: componente reutilizable que presenta la información del usuario y define sus estilos.
- `src/types/Usuario.ts`: describe qué datos tiene un usuario y qué valores puede tener su rol.

## Conceptos básicos

- **Componente:** una parte de la interfaz. `HomeScreen` y `UserCard` son componentes.
- **`View`:** contenedor para ordenar elementos, parecido a un `div` en una página web.
- **`Text`:** se usa para mostrar texto en pantalla.
- **Props:** datos que un componente recibe. `UserCard` recibe al usuario mediante la propiedad `user`.
- **`StyleSheet`:** reúne los estilos, como colores, tamaños y espacios.
- **`useState`:** permite guardar datos que usa un componente.

En React Native se usan componentes como `View` y `Text` en lugar de etiquetas HTML. Los estilos se escriben en JavaScript y los tamaños se adaptan a la pantalla del dispositivo.

## Ejecutar la aplicación

Instala las dependencias y luego inicia Expo:

```bash
npm install
npm run start
```

Escanea el código QR con Expo Go o abre la aplicación en un emulador Android o iOS.
