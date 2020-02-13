import {
  GET_MESSAGE_SUCCESS,
  GET_MESSAGE_FAIL,
  MESSAGE_UPDATE_SUCCESS,
  MESSAGE_UPDATE_FAIL
} from '../../shared/utils/Constants';

const initialState = {
  messageError: null
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE_SUCCESS:
    case MESSAGE_UPDATE_SUCCESS:
      return {
        ...state,
        messageError: null
      };
    case GET_MESSAGE_FAIL:
    case MESSAGE_UPDATE_FAIL:
      return {
        ...state,
        messageError: action.payload.message
      };
    default:
      return state;
  }
};

export default messageReducer;
