import { SIGNUP_SUCCESS, SIGNUP_FAIL } from '../../shared/utils/Constants';

const initialState = {
  authError: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        authError: null
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        authError: action.error.message
      };
    default:
      return state;
  }
};

export default authReducer;
