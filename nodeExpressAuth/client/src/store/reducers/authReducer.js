import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from '../actions/actionTypes';
import {
  getAuthTokenFromLocalStorage,
  setAuthTokenInLocalStorage,
  deleteAuthTokenFromLocalStorage
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
    case LOGOUT:
      deleteAuthTokenFromLocalStorage();
      return {
        ...state,
        token: getAuthTokenFromLocalStorage(),
        error: null
      };
    default:
      return state;
  }
};

export default authReducer;
