|                               |                               |
|:-----------------------------:|:-----------------------------:|
| <a target="_blank" href="https://reactnative.dev/">  <img src="https://reactnative.dev/img/header_logo.svg" width="180" alt="React Native Logo"></a> | <a target="blank"  href="https://docs.expo.dev/"> <img src="https://www.svgrepo.com/show/330397/expo.svg" width="180" alt="Expo Logo"></a> |
| [Docs React Native](https://reactnative.dev/) | [Docs Expo](https://docs.expo.dev/) |



# Curso de React Native - Expo 2026

Esta guía reúne las instalaciones recomendadas para el curso de React Native con Expo. La idea es que cada alumno pueda seguir los pasos en orden, verificar que todo quedó listo y evitar errores comunes desde el inicio.

## Semana 5: proyectos de práctica

Esta rama contiene dos aplicaciones independientes. El objetivo de la semana es practicar formularios, componentes reutilizables, navegación y manejo de estado con **Context API** y **useReducer**. CRUD significa **crear, leer, actualizar y eliminar** registros.

| Proyecto | Propósito | Datos que maneja |
| --- | --- | --- |
| [demo-crud-maqueta](./demo-crud-maqueta/) | Practicar un CRUD de productos en una sola pantalla y entender cómo se conectan el formulario, el Context y el reducer. | Nombre y precio de productos. |
| [login-crud-memoria](./login-crud-memoria/) | Integrar formularios de acceso y registro con navegación y un CRUD de estudiantes en varias pantallas. | Nombre, correo y carrera de estudiantes. |

### 1. Demo CRUD de productos (`demo-crud-maqueta`)

Es una práctica de clase que parte de una maqueta visual. Incluye un formulario para ingresar nombre y precio, un listado con `FlatList` y acciones para crear, editar, cancelar la edición y eliminar con confirmación. Al iniciar, muestra un teclado y un mouse como datos de ejemplo.

El formulario se controla desde el hook `useProductoForm`, el estado se comparte mediante `ProductosProvider` y las operaciones se organizan en `productosReducer`. El código conserva comentarios `TODO` y textos de la maqueta como parte del ejercicio; conviene revisarlos junto con la implementación durante la clase.

### 2. Login y CRUD de estudiantes (`login-crud-memoria`)

Es una aplicación de práctica más completa. Incluye inicio de sesión, registro con validaciones, un panel de bienvenida y pantallas para listar, crear, editar y eliminar estudiantes. También permite buscar por nombre o correo y filtrar por carrera.

Para entrar, utiliza las credenciales de demostración:

| Campo | Valor |
| --- | --- |
| Correo | `admin@edu.pe` |
| Contraseña | `admin123` |

Después de iniciar sesión, pulsa **Ir a Estudiantes**. Puedes agregar un estudiante con el botón **+**, editarlo con el lápiz o eliminarlo con la papelera.

El acceso se simula con credenciales fijas. El formulario de registro valida los campos y muestra una confirmación, pero no crea una cuenta que permita iniciar sesión. Los estudiantes se comparten entre pantallas mediante `EstudiantesProvider` y `estudiantesReducer`.

### Tecnologías y herramientas que usan

Las versiones indicadas corresponden a los archivos `package.json` de estos proyectos.

| Tecnología | Versión o uso |
| --- | --- |
| React Native | `0.86.3`: componentes e interfaz de la aplicación. |
| React | `19.2.3`: componentes, hooks y estado. |
| Expo | SDK `57`: herramientas para desarrollar y ejecutar el proyecto. |
| TypeScript | `~6.0.3`: tipos para entidades, formularios y acciones. |
| Expo Router | Serie `57`: navegación mediante archivos en `src/app/`. |
| NativeWind y Tailwind CSS | `^4.2.7` y `^3.4.19`: estilos con clases en `className`. |
| Context API y `useReducer` | Estado compartido y operaciones del CRUD en memoria. |
| React Native Web y React DOM | Ejecución de la interfaz en el navegador. |
| npm | Instalación de dependencias y ejecución de scripts. |

**Ambos proyectos guardan los cambios solo en memoria.** Una recarga completa restablece los datos iniciales. Para estas prácticas no se necesita una API, base de datos, servidor backend, archivo `.env` ni Postman.

### Cómo descargar la semana 5

Si todavía no tienes el repositorio, abre una terminal y ejecuta:

```bash
git clone --branch Semana5 --single-branch https://github.com/albinrk10/React-native-expo-clas.git
cd React-native-expo-clas
```

Si ya tienes el repositorio, entra en su carpeta y cambia de rama con `git switch Semana5`. Guarda tus cambios pendientes antes de cambiar de rama.

### Cómo levantar cada proyecto

Necesitas Node.js y npm instalados. Para probar en el celular, utiliza una versión de Expo Go compatible con el SDK 57 del proyecto. Las instalaciones de herramientas se explican más abajo.

Cada aplicación tiene su propio `package.json`: instala las dependencias y ejecuta los comandos **dentro de la carpeta del proyecto elegido**.

**Opción A: ejecutar la maqueta de productos**

Desde la raíz del repositorio:

```bash
cd demo-crud-maqueta
npm install
npm start
```

**Opción B: ejecutar el login y CRUD de estudiantes**

Desde la raíz del repositorio:

```bash
cd login-crud-memoria
npm install
npm start
```

Para pasar de una aplicación a la otra, detén el servidor con `Ctrl + C`, vuelve a la raíz con `cd ..` y entra en la otra carpeta. Son aplicaciones independientes; puedes trabajar con una a la vez.

### Cómo abrir la aplicación

Al ejecutar `npm start`, Expo inicia el servidor de desarrollo y muestra un código QR.

1. **Celular:** conecta la computadora y el teléfono a la misma red Wi-Fi y abre el proyecto con Expo Go desde el QR. En un iPhone físico, inicia sesión en Expo CLI (`npx expo login`) y Expo Go con la misma cuenta si se solicita.
2. **Android:** inicia un emulador desde Android Studio y pulsa `a` en la terminal de Expo.
3. **iOS en Mac:** ten Xcode y un simulador configurados y pulsa `i`.
4. **Navegador:** pulsa `w` o inicia directamente con `npm run web`.

Estos pasos siguen la [guía oficial para iniciar un proyecto Expo](https://docs.expo.dev/get-started/start-developing/). Consulta también la [referencia del SDK 57](https://docs.expo.dev/versions/v57.0.0/).

### Comandos útiles

Ejecuta los comandos desde la carpeta de cualquiera de las dos aplicaciones:

| Comando | Para qué sirve |
| --- | --- |
| `npm install` | Instala las dependencias del proyecto. |
| `npm start` | Inicia el servidor de desarrollo de Expo. |
| `npm run android` | Inicia Expo e intenta abrir la aplicación en Android. |
| `npm run ios` | Inicia Expo e intenta abrirla en el simulador de iOS en Mac. |
| `npm run web` | Inicia la versión para navegador. |
| `npx expo start --clear` | Inicia Expo limpiando la caché del servidor. |
| `npx expo start --tunnel` | Usa un túnel si la red impide conectar el celular. |
| `npx tsc --noEmit` | Revisa los tipos de TypeScript sin generar archivos. |

En `login-crud-memoria`, también puedes ejecutar `npm run lint` para revisar el código con ESLint. La maqueta incluye ese script, pero todavía no declara ESLint ni su configuración como dependencias propias.

### Cómo está organizado el código

Los dos proyectos siguen esta estructura principal:

```text
src/
├── app/                     # Pantallas, rutas y layout de Expo Router
├── domain/
│   └── entities/             # Tipos de Producto o Estudiante
├── presentation/
│   ├── components/          # Formularios, tarjetas y botones
│   ├── context/             # Provider y acceso al estado compartido
│   ├── hooks/               # Estado y validación de formularios
│   └── reducers/            # Acciones de crear, actualizar y eliminar
└── global.css               # Estilos base de Tailwind/NativeWind
```

Para estudiar el flujo, empieza por `src/app/index.tsx`, revisa el Provider en `src/app/_layout.tsx` y continúa con los componentes, hooks y reducers. En el proyecto de login, las pantallas del CRUD están en `src/app/estudiantes/`.

### Problemas frecuentes al iniciar

- **No encuentra `package.json`:** verifica que estés dentro de `demo-crud-maqueta` o `login-crud-memoria`, no en la raíz del repositorio.
- **No reconoce `expo` o faltan módulos:** ejecuta `npm install` dentro del proyecto y vuelve a iniciar.
- **El celular no conecta:** revisa la red Wi-Fi; si la conexión local está bloqueada, prueba `npx expo start --tunnel`.
- **Expo Go indica un SDK incompatible:** comprueba que su versión soporte el SDK 57 usado por estos proyectos.
- **No aparecen los últimos cambios:** detén el servidor y ejecuta `npx expo start --clear`.
- **Los registros desaparecen al recargar:** es el comportamiento esperado del CRUD en memoria.

## Antes de empezar

1. Verifica que tu computadora tenga conexión a internet estable.
2. Cierra programas que puedan bloquear instalaciones, como antivirus o instaladores viejos.
3. Si ya tenías herramientas instaladas, revisa que estén actualizadas antes de comenzar.

## Orden recomendado de instalación

### 1. Instala Visual Studio Code

1. Entra a [Visual Studio Code](https://code.visualstudio.com/).
2. Descarga la versión correspondiente a tu sistema operativo.
3. Ejecuta el instalador y termina el proceso con la configuración por defecto.
4. Abre VS Code para confirmar que inicia correctamente.

### 2. Instala Git

1. Descarga Git desde [git-scm.com](https://git-scm.com/).
2. Instálalo con la configuración sugerida por el instalador.
3. Abre una terminal y confirma que Git responde correctamente.
4. Configura tus datos personales una sola vez:

```bash
git config --global user.name "Tu nombre"
git config --global user.email "Tu correo"
```

### 3. Instala Node.js

1. Descarga Node desde [nodejs.org/es](https://nodejs.org/es/).
2. Elige la versión LTS, que es la más estable para el curso.
3. Completa la instalación.
4. Verifica que Node y npm queden disponibles en la terminal.
5. Para saber si se instaló correctamente, abre la terminal y ejecuta `node -v` y `npm -v`.
6. Si ambos comandos muestran un número de versión, la instalación fue correcta.

### 4. Instala Postman

1. Descarga Postman desde [postman.com/downloads](https://www.postman.com/downloads/).
2. Instálalo normalmente.
3. Ábrelo al menos una vez para confirmar que funciona.
4. Más adelante lo usaremos para probar servicios y APIs.

### 5. Instala Android Studio

1. Descarga Android Studio desde [developer.android.com/studio](https://developer.android.com/studio).
2. Instálalo con los componentes recomendados.
3. Abre Android Studio y deja que termine de preparar el entorno.
4. Si vas a usar emulador, verifica que tenga instalado un dispositivo virtual Android.
5. Si tu PC es lenta o no soporta bien los emuladores, puedes usar [Vysor](https://www.vysor.io/) como alternativa.
6. Con Vysor puedes conectar tu celular por cable USB y usarlo para probar la aplicación directamente en tu dispositivo.
7. Para que funcione correctamente, activa las opciones de desarrollador y la depuración USB en tu teléfono.
8. Comprueba que el sistema reconozca el dispositivo antes de continuar con el curso.

### 6. Instala Xcode solo en Mac

1. Si usas macOS, descarga [Xcode](https://apps.apple.com/ca/app/xcode/id497799835).
2. Instálalo desde la App Store.
3. Ábrelo una vez para completar la configuración inicial.
4. Este paso no aplica en Windows.

### 7. Instala Expo Go

Expo Go sirve para probar aplicaciones del curso directamente desde el celular.

1. En Android, instala [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent).
2. En iPhone, instala [Expo Go](https://apps.apple.com/us/app/expo-go/id982107779).
3. Inicia sesión si la app lo solicita.
4. Ten el teléfono listo para escanear códigos QR cuando trabajemos con proyectos Expo.



## Extensiones recomendadas para VS Code

Instala estas extensiones para trabajar más rápido y con menos errores:

1. [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens): muestra errores y advertencias directamente en el código.
2. [ES7 React/Redux](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets): agrega atajos útiles para React.
3. [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets): ofrece plantillas rápidas para componentes.
4. [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag): cierra etiquetas automáticamente.
5. [Paste JSON as Code](https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype): ayuda a convertir JSON en código.
6. [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss): mejora el autocompletado de Tailwind CSS.
7. [Colorize](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize): muestra colores directamente en el editor.

## Revisión final

Antes de empezar a programar, confirma lo siguiente:

1. VS Code abre sin problemas.
2. Git reconoce tu nombre y correo.
3. Node.js responde en la terminal.
4. Postman abre correctamente.
5. Android Studio o Xcode están listos según tu sistema operativo.
6. Si no usarás emulador, Vysor está instalado y tu celular se conecta por cable USB.
7. Expo Go está instalado en el celular.
8. Las extensiones de VS Code ya están instaladas.
