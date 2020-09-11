exports.isAuthenticated = () => {
  if (typeof window === 'undefined') return true;
  let data = window.localStorage.getItem('accessToken');

  if (data) {
    return true;
  }
  return false;
};

exports.getAccessToken = () => {
  if (typeof window === 'undefined') return true;
  let data = window.localStorage.getItem('accessToken');

  if (data) {
    return data;
  }
  return null;
};

exports.getRefreshToken = () => {
  if (typeof window === 'undefined') return true;
  let data = window.localStorage.getItem('refreshToken');

  if (data) {
    return data;
  }
  return null;
};

exports.isTokenExpired = TokenObject => {
  const currentTimestamp = new Date().getTime();
  const {exp} = TokenObject;
  if (!exp) return false;
  return currentTimestamp >= exp;
};
