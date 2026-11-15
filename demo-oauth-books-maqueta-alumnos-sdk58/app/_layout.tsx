import '../global.css';

import { Stack } from 'expo-router';

import { AuthProvider } from '../src/presentation/context/AuthContext';
import { oauthApi } from '../src/infrastructure/api/oauthApi';
import { tokenStore } from '../src/infrastructure/session/tokenStore';

export default function RootLayout() {
  return (
    <AuthProvider authRepository={oauthApi} tokenStore={tokenStore}>
      <Stack screenOptions={{ headerShown: false }} />
    </AuthProvider>
  );
}
