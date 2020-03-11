import {
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_ERROR
} from '../actions/actionTypes';

const initialState = {};

const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLACES_SUCCESS:
      return {
        ...state,
        data: [...action.data],
        error: null
      };
    case FETCH_PLACES_ERROR:
      return {
        ...state,
        data: null,
        error: action.errorMessage
      };
    default:
      return state;
  }
};

export default placesReducer;
