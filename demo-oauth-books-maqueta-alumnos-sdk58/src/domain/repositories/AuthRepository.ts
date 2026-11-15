import type { OAuthSession } from '../models/OAuthSession';

export interface AuthRepository {
  login(username: string, password: string): Promise<OAuthSession>;
  refresh(refreshToken: string): Promise<OAuthSession>;
}
