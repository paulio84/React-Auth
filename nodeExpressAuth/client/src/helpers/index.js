const AUTH_TOKEN = 'authToken';

export function getAuthTokenFromLocalStorage() {
  return localStorage.getItem(AUTH_TOKEN);
}

export function setAuthTokenInLocalStorage(token) {
  if (token) {
    localStorage.setItem(AUTH_TOKEN, token);
  }
}

export function deleteAuthTokenFromLocalStorage() {
  localStorage.removeItem(AUTH_TOKEN);
}