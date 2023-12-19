import axios, { AxiosRequestConfig } from 'axios';
import { storageService } from '@/helper';

export const request = axios.create({
  baseURL: 'http://localhost:3000/api',
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    accept: 'application/json',
  },
});
request.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = storageService.getItem('accessToken');
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export const get = async (path: string, option?: {}) => {
  const result = await request.get(path, option);
  return result.data;
};

export const post = async (path: string, option?: {}, config?: AxiosRequestConfig) => {
  const result = await request.post(path, option, config);
  return result.data;
};
