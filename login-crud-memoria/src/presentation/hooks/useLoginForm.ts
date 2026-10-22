import { router } from 'expo-router';
import { useState } from 'react';
import { Alert } from 'react-native';

export const useLoginForm = () => {
  // 💡 EXPLICACIÓN :
  // Aquí declaramos el Estado (State). 'email' guarda lo que el usuario escribe,
  // y 'setEmail' es la función que usamos para actualizar ese valor.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Guardamos los errores en un objeto. Si 'errors.email' existe, es porque hay un error.
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validar = (): boolean => {
    const e: { email?: string; password?: string } = {};

    // Validaciones básicas de negocio
    if (!email.includes('@')) {
      e.email = 'El correo debe contener un @';
    }
    if (password.length < 6) {
      e.password = 'La contraseña debe tener mínimo 6 caracteres';
    }

    setErrors(e);
    // Retorna 'true' si no hay errores en el objeto.
    return Object.keys(e).length === 0;
  };

  const handleLogin = () => {
    // 1. Primero validamos. Si falla, detenemos todo con el 'return'.
    if (!validar()) return;

    // 2. Simulación de Login con la Base de Datos
    if (email === 'admin@edu.pe' && password === 'admin123') {
      // 💡 EXPLICACIÓN :
      // Usamos router.replace('/home') porque vamos a la pantalla '/home' 
      // y destruimos la pantalla de Login del historial para que el usuario 
      // no pueda regresar presionando el botón "Atrás" de Android/iOS.
      router.replace('/home');
    } else {
      Alert.alert('Error de Acceso', 'El usuario o contraseña son incorrectos.');
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    errors,
    handleLogin
  };
};
