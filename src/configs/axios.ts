import axios, { Axios, AxiosError, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

const getAxiosInstance = (): Axios => axiosInstance;

const getResponseData = <T>(response: AxiosResponse): T => {
  return response as T;
};

export { getAxiosInstance, getResponseData };
