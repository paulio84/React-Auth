const placesModel = require('../models/places.model');

exports.GetAllPlaces = async (req, res, next) => {
  try {
    const result = await placesModel.GetAllPlaces();
    res.status(200).send(result);
  } catch (err) {
    res.status(500);
    next(err);
  }
};

exports.GetPlaceById = async (req, res, next) => {
  try {
    const { placeId } = req.params;
    const result = await placesModel.GetPlaceById(placeId);

    res.status(200).send(result);
  } catch (err) {
    res.status(500);
    next(err);
  }
};

exports.CreatePlace = async (req, res, next) => {
  try {
    const place = req.body;

    const result = await placesModel.CreatePlace(place);
    res.status(201).send(result);
  } catch (err) {
    res.status(500);
    next(err);
  }
};
