import axios from 'axios';

import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from './actionTypes';

export function LoginAction(userCredentials) {
  return function (dispatch) {
    axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, userCredentials)
      .then(
        response => dispatch(loginSucces(response.data.token)),
        error => {
          if (error.response) {
            dispatch(loginError(error.response.data.message));
          } else {
            dispatch(loginError(error.message));
          }
        }
      );
  };
};

export function LogoutAction(errorMessage) {
  return {
    type: LOGOUT,
    errorMessage
  };
}

function loginSucces(token) {
  return {
    type: LOGIN_SUCCESS,
    token
  };
}

function loginError(errorMessage) {
  return {
    type: LOGIN_ERROR,
    errorMessage
  };
}
