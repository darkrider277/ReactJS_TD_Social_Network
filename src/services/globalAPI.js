import axios from 'axios';
import {isAuthenticated, getAccessToken} from '../utils/tokenHelpers';

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

export default globalAPI;
