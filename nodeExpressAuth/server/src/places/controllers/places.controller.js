const placesModel = require('../models/places.model');
const { VALIDATION_ERROR, NO_DOCUMENT_FOUND } = require('../../common/constants');

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
    switch (err.name) {
      case NO_DOCUMENT_FOUND:
        res.status(404);
        break;
      default:
        res.status(500);
    }
    next(err);
  }
};

exports.CreatePlace = async (req, res, next) => {
  try {
    const place = req.body;

    const result = await placesModel.CreatePlace(place);
    res.location(`${process.env.BASE_URL}${req.baseUrl}/${result.id}`);
    res.status(201).send(result);
  } catch (err) {
    switch (err.name) {
      case VALIDATION_ERROR:
        res.status(400);
        break;
      default:
        res.status(500);
    }
    next(err);
  }
};

exports.UpdatePlace = async (req, res, next) => {
  try {
    const { placeId } = req.params;
    const place = req.body;

    await placesModel.UpdatePlace(placeId, place);
    res.sendStatus(204);
  } catch (err) {
    switch (err.name) {
      case NO_DOCUMENT_FOUND:
        res.status(404);
        break;
      default:
        res.status(500);
    }
    next(err);
  }
};

exports.DeletePlace = async (req, res, next) => {
  try {
    const { placeId } = req.params;

    await placesModel.DeletePlace(placeId);
    res.sendStatus(204);
  } catch (err) {
    res.status(500);
    next(err);
  }
};
