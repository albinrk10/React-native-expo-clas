import { create, type AxiosError, type InternalAxiosRequestConfig } from 'axios';

import type { Book } from '../../domain/models/Book';
import type { BooksRepository } from '../../domain/repositories/BooksRepository';
import { normalizeBook } from './normalizeBook';
import { oauthConfig } from '../config/oauthConfig';
import { oauthApi } from './oauthApi';
import { tokenStore } from '../session/tokenStore';

type RetryConfig = InternalAxiosRequestConfig & {
  _retry?: boolean;
};

export const booksApi = create({
  baseURL: oauthConfig.booksBaseUrl,
});

booksApi.interceptors.request.use((config) => {
  const token = tokenStore.getAccessToken();

  // TODO 6:
  // Si hay token, agregar:
  // config.headers.Authorization = `Bearer ${token}`;
  if (token){
    config.headers.Authorization = `Bearer ${token} `
  }

  console.log('[API REQUEST] Books endpoint', {
    method: config.method?.toUpperCase(),
    url: config.url,
    Authorization: token ? 'Bearer [presente]' : 'SIN TOKEN',
  });

  return config;
});

booksApi.interceptors.response.use(
  (response) => {
    console.log('[API RESPONSE] Books endpoint', {
      status: response.status,
      url: response.config.url,
    });
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as RetryConfig | undefined;

    console.log('[API ERROR] Books endpoint', {
      status: error.response?.status,
      url: originalRequest?.url,
    });

    if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = tokenStore.getRefreshToken();
      if (!refreshToken) {
        return Promise.reject(error);
      }

      console.log('[TODO INTERCEPTOR] Renovar token y reintentar request original');

      // TODO 7:
     const newSession =await oauthApi.refresh(refreshToken);
     tokenStore.setTokens(newSession.accessToken,newSession.refreshToken);
     originalRequest.headers.Authorization = `Bearer ${newSession.accessToken}`;
     console.log('[INTERCEPTOR] Reintentando resquet original con nuewvo access token');
     return booksApi(originalRequest);
    }

    return Promise.reject(error);
  },
);

export const booksRepository: BooksRepository = {
  async listar(): Promise<Book[]> {
   const response = await booksApi.get<unknown>('/books');
   const rawData = response.data;
   // TODO 8:
    // Llamar booksApi.get<unknown>('/books')

    // TODO 9:
    // Normalizar la respuesta a Book[]

   const list = Array.isArray(rawData)
      ? rawData
      : Array.isArray((rawData as { data?: unknown[] }).data)
        ? (rawData as { data: unknown[] }).data
        : Array.isArray((rawData as { content?: unknown[] }).content)
          ? (rawData as { content: unknown[] }).content
          : [];
    console.log('[Books DATA] GET /books',list);
  

   
   return list.map((item, index) => normalizeBook(item as Record<string, unknown>, index));
  },
};


