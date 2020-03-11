import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { FetchPlacesAction } from '../../store/actions/placesActions';
import PlacesList from './PlacesList';

const Places = ({ authToken, fetchPlaces, places, error }) => {
  useEffect(() => {
    fetchPlaces();
  }, [fetchPlaces]);

  if (!authToken) {
    return <Redirect to='/login' />;
  } else {
    return (
      <Fragment>
        <h1>Places</h1>
        {
          error
            ? <p>{error}</p>
            : <PlacesList places={places} />
        }
      </Fragment>
    );
  }
};

const mapState = (state) => {
  return {
    authToken: state.auth.token,
    places: state.places.data || [],
    error: state.places.error
  };
};

const mapDispatch = dispatch => {
  return {
    fetchPlaces: () => dispatch(FetchPlacesAction())
  };
};

export default connect(mapState, mapDispatch)(Places);
