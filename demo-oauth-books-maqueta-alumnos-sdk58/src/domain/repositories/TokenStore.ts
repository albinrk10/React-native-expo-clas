export interface TokenStore {
  setTokens(accessToken: string, refreshToken: string): void;
  getAccessToken(): string | null;
  getRefreshToken(): string | null;
  clear(): void;
}
