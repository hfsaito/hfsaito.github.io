import axios, { AxiosRequestConfig } from 'axios';

import { TWITCH_API_CLIENT_ID } from './constants';
import { AuthManager } from './auth';

export const requester = axios.create();
requester.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const token = await AuthManager.getToken();
  if (!token) {
    throw 'Missing token'
  }
  config.headers = {
    ...(config.headers ?? {}),
    Authorization: `Bearer ${token}`,
    'Client-Id': TWITCH_API_CLIENT_ID,
    'Content-Type': 'application/json'
  };
  return config;
}, () => null);

requester.interceptors.response.use(res => res, () => {
  alert('Twtich response error. Wrong import format maybe');
  return null;
});
