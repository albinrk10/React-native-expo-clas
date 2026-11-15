// Configuración pública de la demo. Define los valores en .env (ver .env.example).
export const oauthConfig = {
 tokenUrl:process.env.EXPO_PUBLIC_OAUTH_TOKEN_URL ?? "https://wso2isjr.techjrstar.com/oauth2/token",
 booksBaseUrl:process.env.EXPO_PUBLIC_BOOKS_BASE_URL ?? "",
 clientId: process.env.EXPO_PUBLIC_OAUTH_CLIENT_ID ?? "",
 clientSecret:process.env.EXPO_PUBLIC_OAUTH_CLIENT_SECRET?? ""
};

export function assertOAuthConfigured() {
  if (!oauthConfig.clientId || !oauthConfig.clientSecret || oauthConfig.clientId.startsWith('REEMPLAZA_') || oauthConfig.clientSecret.startsWith('REEMPLAZA_')) {
    throw new Error('Configura EXPO_PUBLIC_OAUTH_CLIENT_ID y EXPO_PUBLIC_OAUTH_CLIENT_SECRET en .env');
  }
}
