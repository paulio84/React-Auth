const placesModel = require('../models/places.model');
const { VALIDATION_ERROR, NO_DOCUMENT_FOUND } = require('../../common/constants');

exports.GetAllPlaces = async (req, res, next) => {
  try {
    const result = await placesModel.GetAllPlaces();

    return res.status(200).send(result);
  } catch (err) {
    res.status(500);
    return next(err);
  }
};

exports.GetPlaceById = async (req, res, next) => {
  try {
    const result = await placesModel.GetPlaceById(req.params.placeId);

    return res.status(200).send(result);
  } catch (err) {
    res.status(500);
    if (err.name === NO_DOCUMENT_FOUND) res.status(404);

    return next(err);
  }
};

exports.CreatePlace = async (req, res, next) => {
  try {
    const result = await placesModel.CreatePlace(req.body);
    res.location(`${process.env.BASE_URL}${req.baseUrl}/${result.id}`);

    return res.status(201).send(result);
  } catch (err) {
    res.status(500);
    if (err.name === VALIDATION_ERROR) res.status(400);

    return next(err);
  }
};

exports.UpdatePlace = async (req, res, next) => {
  try {
    await placesModel.UpdatePlace(req.params.placeId, req.body);

    return res.sendStatus(204);
  } catch (err) {
    res.status(500);
    if (err.name === NO_DOCUMENT_FOUND) res.status(404);

    return next(err);
  }
};

exports.DeletePlace = async (req, res, next) => {
  try {
    await placesModel.DeletePlace(req.params.placeId);

    return res.sendStatus(204);
  } catch (err) {
    res.status(500);
    return next(err);
  }
};
