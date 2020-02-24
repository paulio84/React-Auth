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
  longitude: Number
});

const Places = mongoose.model('Places', placesSchema);

exports.GetAllPlaces = () => new Promise((resolve, reject) => {
  Places.find()
    .exec((err, places) => {
      if (err) reject(err);

      resolve(places);
    });
});

exports.GetPlaceById = (placeId) => new Promise((resolve, reject) => {
  Places.findById(placeId, (err, place) => {
    if (err) reject(err);

    resolve(place);
  }).orFail();
});

exports.CreatePlace = (place) => new Promise((resolve, reject) => {
  Places.create(place, (err, createdPlace) => {
    if (err) reject(err);

    resolve(createdPlace);
  });
});

exports.UpdatePlace = (placeId, place) => new Promise((resolve, reject) => {
  Places.findById(placeId, (findErr, placeData) => {
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

exports.DeletePlace = (placeId) => new Promise((resolve, reject) => {
  Places.deleteOne({ _id: placeId }, (err) => {
    if (err) reject(err);

    resolve();
  });
});
