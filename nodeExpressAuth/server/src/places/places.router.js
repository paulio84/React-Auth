const express = require('express');
const placesController = require('./controllers/places.controller');
const authValidation = require('../common/middlewares/auth.validation.middleware');

const placesRouter = express.Router();

placesRouter
  .all('*', [authValidation.validTokenNeeded])
  // GET /api/places/
  .get('/', [placesController.GetAllPlaces])
  // GET /api/places/:placeId
  .get('/:placeId', [placesController.GetPlaceById])
  // POST /api/places/
  .post('/', [placesController.CreatePlace])
  // PUT /api/places/:placeId
  .put('/:placeId', [placesController.UpdatePlace])
  // DELETE /api/places/:placeId
  .delete('/:placeId', [placesController.DeletePlace]);

module.exports = placesRouter;
