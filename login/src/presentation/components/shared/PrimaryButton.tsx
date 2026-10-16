import { Text, TouchableOpacity } from 'react-native';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  className?: string;
}

export const PrimaryButton = ({ title, onPress, className = '' }: PrimaryButtonProps) => {
  return (
    <TouchableOpacity
      // 💡 EXPLICACIÓN :
      // Cambiamos py-4 por h-14 para asegurar una altura consistente con los TextInputs.
      // justify-center e items-center centran el texto perfectamente en la caja.
      className={`bg-indigo-600 rounded-2xl h-14 mt-2 shadow-sm justify-center items-center active:bg-indigo-700 ${className}`}
      onPress={onPress}
    >
      <Text className="text-white font-bold text-lg tracking-wide">
        {title}
      </Text>
    </TouchableOpacity>
  );
};
