import axios from 'axios';
import {isAuthenticated, getAccessToken, getRefreshToken} from '../utils/tokenHelpers';

const globalAPI = axios.create({
  baseURL: `${process.env.REACT_APP_GLOBAL_URL}`,
});

globalAPI.interceptors.request.use(
  config => {
    if (isAuthenticated()) {
      config.headers['Authorization'] = 'Bearer ' + getAccessToken();
    }
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

/* globalAPI.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    const originalRequest = error.config;

    if (error.response.status === 401) {
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = getRefreshToken();
      return globalAPI
        .post('/auth/token', {
          refreshToken: refreshToken,
        })
        .then(res => {
          if (res.status === 201) {
            localStorageService.setToken(res.data);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorageService.getAccessToken();
            return axios(originalRequest);
          }
        });
    }
    return Promise.reject(error);
  },
); */

export default globalAPI;
