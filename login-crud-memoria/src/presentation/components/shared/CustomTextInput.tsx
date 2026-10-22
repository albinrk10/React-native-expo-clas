import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';

interface CustomTextInputProps extends TextInputProps {
  label: string;
  error?: string;
  isPassword?: boolean;
}

export const CustomTextInput = ({ label, error, isPassword, onFocus, onBlur, ...props }: CustomTextInputProps) => {
  const [isSecure, setIsSecure] = useState(isPassword || false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className="mb-4">
      {/* Label del input */}
      <Text className="text-slate-700 font-semibold mb-2 ml-1">{label}</Text>
      
      {/* 💡 EXPLICACIÓN :
          Usamos un View contenedor con 'flex-row' para alinear el Input y el Icono horizontalmente.
          Controlamos el color del borde dinámicamente según si está enfocado (isFocused) o si hay un error. */}
      <View 
        className={`flex-row items-center border-2 rounded-2xl bg-slate-50 px-4 h-14 ${
          error 
            ? 'border-red-400 bg-red-50' 
            : isFocused 
              ? 'border-indigo-500 bg-white' 
              : 'border-slate-200'
        }`}
      >
        <TextInput
          // flex-1 hace que el input ocupe todo el espacio disponible, empujando el icono a la derecha
          className="flex-1 text-base text-slate-800 h-full"
          secureTextEntry={isSecure}
          placeholderTextColor="#94a3b8"
          onFocus={(e) => {
            setIsFocused(true);
            onFocus && onFocus(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur && onBlur(e);
          }}
          {...props}
        />
        
        {/* Renderizado del ojito condicional y dentro del flex-row */}
        {isPassword && (
          <TouchableOpacity 
            onPress={() => setIsSecure(!isSecure)}
            className="p-2" // Añadimos padding para que sea más fácil de tocar
          >
            <Ionicons 
              name={isSecure ? "eye-off-outline" : "eye-outline"} 
              size={22} 
              color={isFocused ? "#4f46e5" : "#94a3b8"} 
            />
          </TouchableOpacity>
        )}
      </View>
      
      {/* Mensaje de Error */}
      {error && (
        <Text className="text-red-500 text-sm mt-2 ml-2 font-medium">
          {error}
        </Text>
      )}
    </View>
  );
};
