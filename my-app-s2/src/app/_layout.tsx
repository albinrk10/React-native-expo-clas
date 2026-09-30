
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppTabs from '@/components/app-tabs';


import { Stack } from 'expo-router';

export default function TabLayout() {
 
  return (
    <Stack screenOptions={{headerShown: false}}>
    <Stack.Screen name='index'/>
    </Stack>
  );
}
