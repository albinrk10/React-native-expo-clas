import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';

import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';

export default function App() {
  return (
    // <SafeAreaProvider>
    //   <ScreenContent title="Home" path="App.tsx"></ScreenContent>
    //   <StatusBar style="auto" />
    // </SafeAreaProvider>
    <View className="flex-1 items-center justify-center bg-slate-500">
      <Text className='text-4xl font-extrabold text-blue-400'>
        Bienvenido a Movil
      </Text>

    </View>
  );
}
