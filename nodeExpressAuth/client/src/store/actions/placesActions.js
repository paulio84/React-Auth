import axios from 'axios';

import {
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_ERROR
} from '../actions/actionTypes';

import { LogoutAction } from './authActions';

export function FetchPlacesAction() {
  return async function (dispatch, getState) {
    const authToken = getState().auth.token;
    if (!authToken) {
      dispatch(LogoutAction(null));
      return;
    }

    const requestConfig = {
      headers: { 'Authorization': `Bearer ${authToken}` }
    };

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/places`, requestConfig);

      dispatch(fetchPlacesSuccess(response.data));
    } catch (error) {
      if (error.response.status === 403) {
        dispatch(LogoutAction("Access denied: It's possible your login has expired."));
      } else {
        dispatch(fetchPlacesError(error.response.data.message));
      }
    }
  };
}

function fetchPlacesSuccess(data) {
  return {
    type: FETCH_PLACES_SUCCESS,
    data
  };
}

function fetchPlacesError(errorMessage) {
  return {
    type: FETCH_PLACES_ERROR,
    errorMessage
  };
}