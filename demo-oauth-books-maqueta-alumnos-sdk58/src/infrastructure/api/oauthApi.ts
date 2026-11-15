import { create } from 'axios';

import type { OAuthSession } from '../../domain/models/OAuthSession';
import type { AuthRepository } from '../../domain/repositories/AuthRepository';
import { assertOAuthConfigured, oauthConfig } from '../config/oauthConfig';

type OAuthTokenResponse = {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
  scope?: string;
};

const oauthClient = create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

function toSession(data: OAuthTokenResponse): OAuthSession {
  return {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    tokenType: data.token_type,
    expiresIn: data.expires_in,
    scope: data.scope,
  };
}

export const oauthApi: AuthRepository = {

  async login(username: string, password: string): Promise<OAuthSession> {
    assertOAuthConfigured();
    const body = new URLSearchParams({
      grant_type:'password',
      client_id: oauthConfig.clientId,
      client_secret: oauthConfig.clientSecret,
      username,
      password
    })

    console.log('[TODO] POST /oauth2/token grant_type=password', {
      username,
      password: '***',
    });
  
    const response = await oauthClient.post<OAuthTokenResponse>(oauthConfig.tokenUrl,body.toString());
 
      console.log('[API RESPONSE] POST /oauth2/token', {
      token_type: response.data.token_type,
      access_token: '[Recibo]',
      refresh_token: '[Recibida]',
      expires_in: response.data.expires_in, 
    });


    return toSession(response.data);
  },

  async refresh(refreshToken: string): Promise<OAuthSession> {
    assertOAuthConfigured();

      const body = new URLSearchParams({
      grant_type: 'refresh_token',
      client_id: oauthConfig.clientId,
      client_secret: oauthConfig.clientSecret,
      refresh_token: refreshToken,
    });

    console.log('[TODO] POST /oauth2/token grant_type=refresh_token', {
      refreshToken: '[presente]',
    });
   
    const response =await oauthClient.post<OAuthTokenResponse>(oauthConfig.tokenUrl,body.toString())


     console.log('[API RESPONSE] refresh_token', {
      token_type: response.data.token_type,
      access_token: '[Recibo]',
      refresh_token: '[Recibida]',
      expires_in: response.data.expires_in, 
    });

    return toSession(response.data)
  },
};


