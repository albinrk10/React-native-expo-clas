import { router } from 'expo-router';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { LoginHeader } from '../presentation/components/login/LoginHeader';
import { CustomTextInput } from '../presentation/components/shared/CustomTextInput';
import { PrimaryButton } from '../presentation/components/shared/PrimaryButton';
import { useLoginForm } from '../presentation/hooks/useLoginForm';

export default function LoginRoute() {
  const { email, setEmail, password, setPassword, errors, handleLogin } = useLoginForm();

  return (
    // 💡 EXPLICACIÓN :
    // KeyboardAvoidingView empuja el contenido hacia arriba cuando el teclado aparece en pantalla.
    // Usamos un fondo degradado simulado usando un header alto de color índigo y un fondo slate.
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-slate-100"
    >
      <ScrollView contentContainerClassName="flex-grow">
        
        {/* Cabecera decorativa (La parte azul arriba) */}
        <View className="bg-indigo-600 h-64 w-full absolute top-0 rounded-b-[40px]" />

        <View className="flex-1 px-6 pt-24 pb-12">
          
          {/* Tarjeta flotante (Card) */}
          <View className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-300 elevation-10 mt-10">
            
            <LoginHeader />

            <CustomTextInput
              label="Correo Electrónico"
              placeholder="alumno@idat.pe"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              error={errors.email}
            />

            <CustomTextInput
              label="Contraseña"
              placeholder="••••••••"
              value={password}
              onChangeText={setPassword}
              isPassword={true}
              error={errors.password}
            />

            <PrimaryButton title="Ingresar" onPress={handleLogin} />

            {/* Navegación al registro */}
            <TouchableOpacity
              className="mt-6 p-2"
              onPress={() => router.push('/registro')}
            >
              <Text className="text-center text-slate-500 text-base">
                ¿Aún no tienes cuenta?{' '}
                <Text className="text-indigo-600 font-bold">Regístrate aquí</Text>
              </Text>
            </TouchableOpacity>

          </View>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}
