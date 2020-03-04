import { LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/actionTypes';

const initialState = { token: '', error: null };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
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
