export function getAuthTokenFromLocalStorage() {
  return localStorage.getItem('authToken');
}

export function setAuthTokenInLocalStorage(token) {
  if (token) {
    localStorage.setItem('authToken', token);
  }
}