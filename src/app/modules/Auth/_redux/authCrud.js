import axios from 'axios';

export const GLOBAL_URL = process.env.REACT_APP_GLOBAL_URL;

export const LOGIN_URL = '/v1/auth/login';
export const REGISTER_URL = '/v1/auth/register';
export const REQUEST_PASSWORD_URL = 'api/auth/forgot-password';

export const ME_URL = '/v1/user/profile';

export function login(username, password) {
  return axios.post(GLOBAL_URL + LOGIN_URL, {username, password});
}

export function register(data) {
  return axios.post(GLOBAL_URL + REGISTER_URL, data);
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_URL, {email});
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(GLOBAL_URL + ME_URL);
}
