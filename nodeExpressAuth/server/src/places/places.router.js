const express = require('express');
const placesController = require('./controllers/places.controller');

const placesRouter = express.Router();

placesRouter
  // GET /api/places/
  .get('/', [placesController.GetAllPlaces])
  // GET /api/places/:placeId
  .get('/:placeId', [placesController.GetPlaceById])
  // POST /api/places/
  .post('/', [placesController.CreatePlace])
  // DELETE /api/places/:placeId
  .delete('/:placeId', (req, res) => {

  });

module.exports = placesRouter;
