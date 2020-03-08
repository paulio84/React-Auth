import { LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/actionTypes';
import {
  getAuthTokenFromLocalStorage,
  setAuthTokenInLocalStorage
} from '../../helpers';

const initialState = { token: getAuthTokenFromLocalStorage(), error: null };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      setAuthTokenInLocalStorage(action.token);
      return {
        ...state,
        token: action.token,
        error: null
      };
    case LOGIN_ERROR:
      return {
        ...state,
        token: '',
        error: action.errorMessage
      };
    default:
      return state;
  }
};

export default authReducer;
