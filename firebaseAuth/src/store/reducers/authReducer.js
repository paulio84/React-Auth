import {
  AUTH_SUCCESS,
  AUTH_LOGIN_FAIL,
  AUTH_LOGOUT_FAIL,
  AUTH_REGISTER_FAIL
} from '../../shared/utils/Constants';

const initialState = {
  authError: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        authError: null
      };
    case AUTH_LOGIN_FAIL:
      console.debug('auth login fail');

      return {
        ...state,
        authError: "Incorrect email address or password."
      };
    case AUTH_LOGOUT_FAIL:
      console.debug('auth logout fail');

      return {
        ...state,
        authError: action.error.message
      };
    case AUTH_REGISTER_FAIL:
      console.debug('auth register fail');
      return {
        ...state,
        authError: action.error.message
      };
    default:
      return state;
  }
};

export default authReducer;
