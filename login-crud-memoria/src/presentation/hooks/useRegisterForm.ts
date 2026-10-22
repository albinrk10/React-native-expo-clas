import { router } from 'expo-router';
import { useState } from 'react';
import { Alert } from 'react-native';

export const useRegisterForm = () => {
  // 💡 EXPLICACIÓN :
  // Estado para capturar todos los datos del formulario de registro.
  const [nombre, setNombre] = useState('');
  const [email, setEmailValue] = useState('');
  const [password, setPassword] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [errors, setErrors] = useState<{
    nombre?: string;
    email?: string;
    password?: string;
    confirmar?: string;
  }>({});

  // AJUSTE: valida al escribir, evitando un setState dentro de useEffect.
  // Conserva el comportamiento visible del registro original y permite pasar lint.
  const setEmail = (valor: string) => {
    setEmailValue(valor);
    setErrors((prev) => ({
      ...prev,
      email: valor.length > 0 && !valor.includes('@') ? 'Formato de correo inválido' : undefined,
    }));
  };

  const validar = (): boolean => {
    const e: typeof errors = {};

    if (nombre.trim().length === 0) e.nombre = 'Tu nombre es requerido';
    if (!email.includes('@')) e.email = 'Formato de correo inválido';
    if (password.length < 6) e.password = 'La contraseña requiere mínimo 6 caracteres';
    if (password !== confirmar) e.confirmar = 'Las contraseñas no coinciden';

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleRegistro = () => {
    if (!validar()) return;

    Alert.alert(
      '¡Registro completado!',
      `Bienvenido a la comunidad, ${nombre} 🎉`,
      [
        { 
          text: 'Ir al Login', 
          // 💡 EXPLICACIÓN :
          // Tras registrar, regresamos al login usando replace o push dependiendo de la navegación deseada.
          onPress: () => router.replace('/login') 
        }
      ]
    );
  };

  return {
    nombre, setNombre,
    email, setEmail,
    password, setPassword,
    confirmar, setConfirmar,
    errors, handleRegistro
  };
};
