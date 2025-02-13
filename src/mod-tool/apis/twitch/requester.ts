import axios, { InternalAxiosRequestConfig } from 'axios';

import { TWITCH_API_CLIENT_ID } from './constants';
import { AuthManager } from './auth';

export const requester = axios.create();
requester.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const token = await AuthManager.getToken();
  if (!token) {
    throw 'Missing token'
  }

  config.headers.set('Authorization', `Bearer ${token}`);
  config.headers.set('Client-Id', TWITCH_API_CLIENT_ID);
  config.headers.set('Content-Type', 'application/json');
  return config;
}, () => null);

requester.interceptors.response.use(res => res, () => {
  alert('Twtich response error. Wrong import format maybe');
  return null;
});
