import { createContext, PropsWithChildren, useState } from 'react';

import type { OAuthSession } from '../../domain/models/OAuthSession';
import type { AuthRepository } from '../../domain/repositories/AuthRepository';
import type { TokenStore } from '../../domain/repositories/TokenStore';

type AuthContextValue = {
  session: OAuthSession | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  refreshSession: () => Promise<void>;
  logout: () => void;
  clearError: () => void;
};

export const AuthContext = createContext<AuthContextValue | null>(null);

type AuthProviderProps = PropsWithChildren<{ authRepository: AuthRepository; tokenStore: TokenStore }>;

export function AuthProvider({ children, authRepository, tokenStore }: AuthProviderProps) {
  const [session, setSession] = useState<OAuthSession | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
    const newSession = await authRepository.login(username,password);
      // TODO 10:
      // Llamar authRepository.login(username, password)
      // Guardar tokens con tokenStore.setTokens(...)
      // Guardar la sesión con setSession(...)
    tokenStore.setTokens(newSession.accessToken,newSession.refreshToken);
    setSession(newSession);
      console.log('[TODO AUTH] Login OAuth2', { username, password: '***' });
    } catch (e) {
      console.log('[AUTH ERROR] login', e);
      setError('No se pudo iniciar sesión. Revisa usuario/contraseña o conexión.');
    } finally {
      setLoading(false);
    }
  };

  const refreshSession = async () => {
    const refreshToken = tokenStore.getRefreshToken();
    if (!refreshToken) {
      setError('No hay refresh token para renovar sesión.');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // TODO 11:
      // Llamar authRepository.refresh(refreshToken)
      // Guardar nuevos tokens
      // Actualizar session
      const newSession = await authRepository.refresh(refreshToken);
      tokenStore.setTokens(newSession.accessToken,newSession.refreshToken);
      setSession(newSession);

      console.log('[TODO AUTH] Refresh token');
    } catch (e) {
      console.log('[AUTH ERROR] refreshSession', e);
      setError('No se pudo renovar el token.');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    tokenStore.clear();
    setSession(null);
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        loading,
        error,
        isAuthenticated: Boolean(session?.accessToken),
        login,
        refreshSession,
        logout,
        clearError: () => setError(null),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
