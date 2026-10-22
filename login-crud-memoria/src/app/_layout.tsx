import 'react-native-reanimated';
import '../global.css';
import { Stack } from 'expo-router';
import { EstudiantesProvider } from '@/presentation/context/EstudiantesContext';

export default function RootLayout() {
  return (
    // AÑADIDO: el Provider comparte los estudiantes entre listado, creación y edición.
    <EstudiantesProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="registro" />
        <Stack.Screen name="home" />
        {/* AÑADIDO: rutas del CRUD; el encabezado */}
        <Stack.Screen name="estudiantes/index" options={{ headerShown: true, title: 'Estudiantes' }} />
        <Stack.Screen name="estudiantes/nuevo" options={{ headerShown: true, title: 'Nuevo estudiante' }} />
        <Stack.Screen name="estudiantes/[id]" options={{ headerShown: true, title: 'Editar estudiante' }} />
      </Stack>
    </EstudiantesProvider>
  );
}
