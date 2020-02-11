import { AUTH_SUCCESS, AUTH_FAIL } from '../../shared/utils/Constants';

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
    case AUTH_FAIL:
      return {
        ...state,
        authError: action.error.message
      };
    default:
      return state;
  }
};

export default authReducer;
