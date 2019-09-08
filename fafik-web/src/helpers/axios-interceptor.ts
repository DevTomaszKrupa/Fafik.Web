import axios, { AxiosRequestConfig } from 'axios';
import { localStorageService } from '../services';


const setupAxiosInterceptors = () => {

  const onRequestSuccess = (config: AxiosRequestConfig) => {
    const token = localStorageService.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  };
  axios.interceptors.request.use(onRequestSuccess);
};

export { setupAxiosInterceptors };
