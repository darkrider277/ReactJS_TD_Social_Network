export default function setupAxios(axios, store) {
  console.log('bbbb');

  axios.interceptors.request.use(
    config => {
      const {
        auth: {authToken},
      } = store.getState();

      console.log('store.getState()');
      console.log(store.getState());

      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }

      return config;
    },
    err => Promise.reject(err),
  );
}
