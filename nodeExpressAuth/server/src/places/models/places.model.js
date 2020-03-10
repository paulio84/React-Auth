const { mongoose } = require('../../common/mongodb.service');

const { Schema } = mongoose;

const placesSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  start_date: Date,
  end_date: Date,
  latitude: Number,
  longitude: Number,
  userId: { type: String, required: true }
});

const Places = mongoose.model('Places', placesSchema);

exports.GetAllPlaces = (userId) => new Promise((resolve, reject) => {
  Places.find(
    { userId },
    { name: 1, description: 1, rating: 1 },
    (err, places) => {
      if (err) reject(err);

      resolve(places);
    }
  );
});

exports.GetPlaceById = (placeId, userId) => new Promise((resolve, reject) => {
  Places.findOne(
    { _id: placeId, userId },
    { name: 1, description: 1, rating: 1 },
    (err, place) => {
      if (err) reject(err);

      resolve(place);
    }
  ).orFail();
});

exports.CreatePlace = (place) => new Promise((resolve, reject) => {
  Places.create(place, (err, createdPlace) => {
    if (err) reject(err);

    resolve(createdPlace);
  });
});

exports.UpdatePlace = async (placeId, userId, place) => {
  await Places.validate(place, ['name', 'description', 'rating']);

  return new Promise((resolve, reject) => {
    Places.findOne({ _id: placeId, userId }, (findErr, placeData) => {
      if (findErr) reject(findErr);

      if (placeData) {
        // using Object.assign here because placeData is a places.model object
        const updatedPlace = Object.assign(placeData, place);

        updatedPlace.save((updateErr) => {
          if (updateErr) reject(updateErr);

          resolve();
        });
      }
    }).orFail();
  });
};

exports.DeletePlace = (placeId, userId) => new Promise((resolve, reject) => {
  Places.findOneAndDelete({ _id: placeId, userId }, (err) => {
    if (err) reject(err);

    resolve();
  }).orFail();
});
