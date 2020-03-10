import React from 'react';

const PlacesList = ({ places }) => {
  return (
    places.map(place =>
      <p key={place._id}>
        {place.name}
        <span>{place.description}</span>
      </p>
    )
  );
};

export default PlacesList;
