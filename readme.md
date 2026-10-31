# Curso de React Native con Expo · 2026

Aprende a preparar tu entorno y explora los ejercicios del curso. Abre solo la sección que necesitas y marca la lista final mientras avanzas.

| Empieza aquí | Proyecto de la semana 6 | Recursos |
| :--- | :--- | :--- |
| [Prepara tu entorno](#prepara-tu-entorno) | [GET básico: Fetch y Axios](#semana-6--get-básico) | [Documentación y extensiones](#recursos-útiles) |

## Semana 6 · GET básico

En [get-basic](get-basic/) encontrarás una aplicación Expo que consulta el mismo menú con **Fetch** y **Axios**. Puedes elegir cualquiera de los dos botones, ver los datos en tarjetas y observar los estados de carga y error.

<details>
<summary><strong>▶ Abrir instrucciones para ejecutar el proyecto</strong></summary>

1. Entra a la carpeta del ejercicio:

   ```bash
   cd get-basic
   ```

2. Instala las dependencias y abre Expo:

   ```bash
   npm install
   npx expo start
   ```

3. Sigue las opciones que muestra Expo en la terminal para abrir la aplicación en tu dispositivo o emulador.

El código de la pantalla está en [`src/app/index.tsx`](get-basic/src/app/index.tsx) y las dos peticiones están en [`src/data/services/menuApi.ts`](get-basic/src/data/services/menuApi.ts).

</details>

## Prepara tu entorno

Sigue estas secciones en orden. Puedes abrirlas y cerrarlas para concentrarte en un paso a la vez.

<details>
<summary><strong>1. Visual Studio Code</strong></summary>

Descarga [Visual Studio Code](https://code.visualstudio.com/), instálalo y ábrelo para comprobar que inicia correctamente.

</details>

<details>
<summary><strong>2. Git</strong></summary>

Descarga [Git](https://git-scm.com/) e instálalo. Después, configura tu nombre y correo en la terminal:

```bash
git config --global user.name "Tu nombre"
git config --global user.email "Tu correo"
```

Comprueba la instalación con `git --version`.

</details>

<details>
<summary><strong>3. Node.js y npm</strong></summary>

Instala la versión LTS de [Node.js](https://nodejs.org/es). Abre una terminal nueva y comprueba ambas herramientas:

```bash
node -v
npm -v
```

Si ambos comandos muestran un número de versión, puedes continuar.

</details>

<details>
<summary><strong>4. Postman</strong></summary>

Instala [Postman](https://www.postman.com/downloads/) y ábrelo una vez. Lo usaremos para explorar servicios y API.

</details>

<details>
<summary><strong>5. Android Studio o un teléfono Android</strong></summary>

Instala [Android Studio](https://developer.android.com/studio) y prepara un dispositivo virtual si vas a usar emulador.

Si prefieres probar en un teléfono, puedes conectarlo por USB y usar [Vysor](https://www.vysor.io/) para ver su pantalla en la computadora. Activa las opciones de desarrollador y la depuración USB en el teléfono.

</details>

<details>
<summary><strong>6. Xcode (solo macOS)</strong></summary>

Si trabajas en macOS y usarás un simulador de iPhone, instala [Xcode](https://apps.apple.com/ca/app/xcode/id497799835) desde la App Store y ábrelo para completar su configuración inicial.

</details>

<details>
<summary><strong>7. Expo Go</strong></summary>

Instala Expo Go en [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) o [iPhone](https://apps.apple.com/us/app/expo-go/id982107779). Ten el teléfono listo para escanear el código QR que muestra Expo al iniciar un proyecto compatible.

</details>

## Recursos útiles

| Recurso | Para qué sirve |
| :--- | :--- |
| [Documentación de React Native](https://reactnative.dev/) | Componentes y conceptos de React Native |
| [Documentación de Expo](https://docs.expo.dev/) | Herramientas, guías y flujo de trabajo con Expo |
| [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) | Muestra errores directamente en el editor |
| [ES7 React/Redux](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) y [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets) | Atajos para escribir componentes |
| [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) | Cierra etiquetas automáticamente |
| [Paste JSON as Code](https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype) | Convierte JSON en tipos y código |
| [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) | Autocompletado de clases de Tailwind |
| [Colorize](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize) | Muestra colores en el editor |

## Lista de preparación

- [ ] VS Code abre correctamente.
- [ ] `git --version`, `node -v` y `npm -v` muestran sus versiones.
- [ ] Git tiene configurados mi nombre y correo.
- [ ] Postman abre correctamente.
- [ ] Tengo un emulador o un teléfono listo para probar la aplicación.
- [ ] Instalé Expo Go si voy a usar un proyecto compatible.
- [ ] Puedo entrar a [`get-basic`](get-basic/) y ejecutar `npx expo start`.

> Las casillas son una guía de seguimiento. Para guardar tus marcas, edita tu propia copia de este archivo.
