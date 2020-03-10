import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { FetchPlacesAction } from '../../store/actions/placesActions';

const Places = ({ authToken, fetchPlaces, places }) => {
  useEffect(() => {
    fetchPlaces();
  }, [fetchPlaces]);

  if (!authToken) {
    return <Redirect to='/login' />;
  } else {
    return (
      <h1>Places</h1>
    );
  }
};

const mapState = (state) => {
  return {
    authToken: state.auth.token,
    places: state.places.data
  };
};

const mapDispatch = dispatch => {
  return {
    fetchPlaces: () => dispatch(FetchPlacesAction())
  };
};

export default connect(mapState, mapDispatch)(Places);
