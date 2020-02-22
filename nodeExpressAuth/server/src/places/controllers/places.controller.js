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
