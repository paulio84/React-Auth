import axios from 'axios';

import {
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_ERROR
} from '../actions/actionTypes';

export function FetchPlacesAction() {
  return async function (dispatch, getState) {
    const authToken = getState().auth.token;
    const requestConfig = {
      headers: { 'Authorization': `Bearer ${authToken}` }
    };

    try {
      const response =
        await axios
          .get(`${process.env.REACT_APP_API_URL}/api/places`, requestConfig);

      dispatch(fetchPlacesSuccess(response.data));
    } catch (error) {
      dispatch(fetchPlacesError(error.message));
    }
  };
}

function fetchPlacesSuccess(data) {
  return {
    type: FETCH_PLACES_SUCCESS,
    data
  };
}

function fetchPlacesError(error) {
  return {
    type: FETCH_PLACES_ERROR,
    error
  };
}